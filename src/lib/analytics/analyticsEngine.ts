import { getQuestion } from "@/lib/adaptive/questionBank";
import { isScoreAnswerCorrect } from "@/lib/adaptive/scoreEngine";
import type { ExamQuestion, ExamSection } from "@/lib/adaptive/types";

export interface AnalyticsAnswer { selected:number; typedAnswer?:string; flagged:boolean; answeredAt:number; durationMs?:number; }
export interface AnalyticsAttempt { id:string; completedAt:number; modules:Array<{section:ExamSection;questionIds:string[]}>; answers:Record<string,AnalyticsAnswer>; scoreEstimate:{bestTotal:number;readingWriting:{bestEstimate:number};math:{bestEstimate:number}}; }
export interface MasteryItem { label:string; section:ExamSection; correct:number; total:number; accuracy:number; recentAccuracy:number; trend:number; level:"Strong"|"Developing"|"Needs Review"; }
export interface TimingSummary { available:boolean; averageSeconds:number; correctAverageSeconds:number; incorrectAverageSeconds:number; slowest:Array<{label:string;seconds:number;correct:boolean}>; }
export interface Recommendation { section:ExamSection; label:string; reason:string; score:number; href:string; }
export interface AnalyticsReport { scoreTrend:Array<{date:number;total:number;rw:number;math:number}>; domains:MasteryItem[]; skills:MasteryItem[]; difficulties:MasteryItem[]; timing:TimingSummary; mistakes:{wrong:number;unanswered:number;flagged:number;studentResponseWrong:number}; recommendations:Recommendation[]; totalQuestions:number; }

const level=(accuracy:number,total:number):MasteryItem["level"]=> total>=4&&accuracy>=.8?"Strong":accuracy>=.6?"Developing":"Needs Review";
const domain=(q:ExamQuestion)=>q.section==="Math"?(q.mathDomain??"Unclassified Math"):(q.domain??"Unclassified Reading & Writing");
const answered=(q:ExamQuestion,a?:AnalyticsAnswer)=>q.questionType==="student-response"?Boolean(a?.typedAnswer?.trim()):Boolean(a&&a.selected>=0);

function aggregate(attempts:AnalyticsAttempt[], labeler:(q:ExamQuestion)=>string, filter?:(q:ExamQuestion)=>boolean):MasteryItem[]{
 const groups=new Map<string,{label:string;section:ExamSection;correct:number;total:number;recentCorrect:number;recentTotal:number}>();
 attempts.forEach((attempt,index)=>attempt.modules.flatMap(m=>m.questionIds).forEach(id=>{const q=getQuestion(id);if(!q||filter&&!filter(q))return;const label=labeler(q);const key=`${q.section}|${label}`;const g=groups.get(key)??{label,section:q.section,correct:0,total:0,recentCorrect:0,recentTotal:0};g.total++;const ok=isScoreAnswerCorrect(q,attempt.answers[id]);if(ok)g.correct++;if(index<3){g.recentTotal++;if(ok)g.recentCorrect++;}groups.set(key,g);}));
 return [...groups.entries()].map(([,g])=>{const accuracy=g.total?g.correct/g.total:0,recentAccuracy=g.recentTotal?g.recentCorrect/g.recentTotal:accuracy;return{label:g.label,section:g.section,correct:g.correct,total:g.total,accuracy,recentAccuracy,trend:recentAccuracy-accuracy,level:level(accuracy,g.total)}}).sort((a,b)=>a.accuracy-b.accuracy||b.total-a.total);
}

export function buildAnalytics(attempts:AnalyticsAttempt[]):AnalyticsReport{
 const scoreTrend=[...attempts].reverse().map(a=>({date:a.completedAt,total:a.scoreEstimate.bestTotal,rw:a.scoreEstimate.readingWriting.bestEstimate,math:a.scoreEstimate.math.bestEstimate}));
 const domains=aggregate(attempts,domain);
 const skills=aggregate(attempts,q=>q.skill);
 const difficulties=aggregate(attempts,q=>q.difficulty);
 let wrong=0,unanswered=0,flagged=0,studentResponseWrong=0,totalQuestions=0;const timed:Array<{label:string;seconds:number;correct:boolean}>=[];
 attempts.forEach(a=>a.modules.flatMap(m=>m.questionIds).forEach(id=>{const q=getQuestion(id);if(!q)return;totalQuestions++;const ans=a.answers[id],ok=isScoreAnswerCorrect(q,ans);if(!answered(q,ans))unanswered++;else if(!ok)wrong++;if(ans?.flagged)flagged++;if(q.questionType==="student-response"&&answered(q,ans)&&!ok)studentResponseWrong++;if(ans?.durationMs&&ans.durationMs>0)timed.push({label:q.skill,seconds:ans.durationMs/1000,correct:ok});}));
 const avg=(xs:number[])=>xs.length?xs.reduce((a,b)=>a+b,0)/xs.length:0;
 const timing:TimingSummary={available:timed.length>0,averageSeconds:avg(timed.map(x=>x.seconds)),correctAverageSeconds:avg(timed.filter(x=>x.correct).map(x=>x.seconds)),incorrectAverageSeconds:avg(timed.filter(x=>!x.correct).map(x=>x.seconds)),slowest:[...timed].sort((a,b)=>b.seconds-a.seconds).slice(0,5)};
 const candidates=skills.filter(x=>x.total>=2&&x.level!=="Strong").map(x=>({section:x.section,label:x.label,reason:`${Math.round(x.accuracy*100)}% accuracy across ${x.total} questions${x.trend<-.08?" and declining recently":""}.`,score:(1-x.accuracy)*Math.min(1,x.total/8)+(x.trend<0?Math.abs(x.trend)*.4:0),href:`/practice/targeted?skill=${encodeURIComponent(x.label)}`})).sort((a,b)=>b.score-a.score).slice(0,3);
 return{scoreTrend,domains,skills,difficulties,timing,mistakes:{wrong,unanswered,flagged,studentResponseWrong},recommendations:candidates,totalQuestions};
}
