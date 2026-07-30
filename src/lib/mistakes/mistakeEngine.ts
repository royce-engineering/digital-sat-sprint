import { getQuestion, mathBank, readingWritingBank } from "@/lib/adaptive/questionBank";
import { isScoreAnswerCorrect } from "@/lib/adaptive/scoreEngine";
import type { ExamQuestion, ExamSection } from "@/lib/adaptive/types";
import type { ExamAttempt } from "@/store/adaptiveExamStore";

export type MistakeStatus = "New" | "Reviewing" | "Mastered";
export interface MistakeProgress { correctStreak:number; attempts:number; status:MistakeStatus; updatedAt:number; }
export interface MistakeRecord {
 question:ExamQuestion; section:ExamSection; domain:string; skill:string; difficulty:string; questionType:string;
 incorrectCount:number; lastIncorrectAt:number; lastUserAnswer:string; flagged:boolean; unanswered:boolean; progress:MistakeProgress;
}
export type ProgressMap=Record<string,MistakeProgress>;
const defaultProgress=():MistakeProgress=>({correctStreak:0,attempts:0,status:"New",updatedAt:0});
const domainOf=(q:ExamQuestion)=>q.section==="Math"?(q.mathDomain??"Unclassified Math"):(q.domain??"Unclassified Reading & Writing");
const displayAnswer=(q:ExamQuestion,a:any)=>q.questionType==="student-response"?(a?.typedAnswer||"No answer"):(a?.selected>=0?`${String.fromCharCode(65+a.selected)}. ${q.choices?.[a.selected]?.text??""}`:"No answer");
export function buildMistakeRecords(attempts:ExamAttempt[],progress:ProgressMap={}):MistakeRecord[]{
 const map=new Map<string,MistakeRecord>();
 attempts.forEach(attempt=>attempt.modules.flatMap(m=>m.questionIds).forEach(id=>{const q=getQuestion(id),a=attempt.answers[id];if(!q)return;const wrong=!isScoreAnswerCorrect(q,a);if(!wrong&&!a?.flagged)return;const existing=map.get(id);const p=progress[id]??defaultProgress();map.set(id,{question:q,section:q.section,domain:domainOf(q),skill:q.skill,difficulty:q.difficulty,questionType:q.questionType??"multiple-choice",incorrectCount:(existing?.incorrectCount??0)+(wrong?1:0),lastIncorrectAt:Math.max(existing?.lastIncorrectAt??0,attempt.completedAt),lastUserAnswer:displayAnswer(q,a),flagged:Boolean(existing?.flagged||a?.flagged),unanswered:q.questionType==="student-response"?!a?.typedAnswer?.trim():!(a&&a.selected>=0),progress:p});}));
 return [...map.values()].sort((a,b)=>(a.progress.status==="Mastered"?1:0)-(b.progress.status==="Mastered"?1:0)||b.lastIncorrectAt-a.lastIncorrectAt);
}
export function updateProgress(current:ProgressMap,id:string,correct:boolean):ProgressMap{const old=current[id]??defaultProgress();const streak=correct?old.correctStreak+1:0;return{...current,[id]:{correctStreak:streak,attempts:old.attempts+1,status:streak>=2?"Mastered":"Reviewing",updatedAt:Date.now()}};}
export function markMastered(current:ProgressMap,id:string):ProgressMap{return{...current,[id]:{...(current[id]??defaultProgress()),correctStreak:2,status:"Mastered",updatedAt:Date.now()}};}
export function targetedQuestions(records:MistakeRecord[],skill?:string,section?:ExamSection,count=10):ExamQuestion[]{const pool=[...readingWritingBank,...mathBank];const mistakes=records.filter(r=>(!skill||r.skill===skill)&&(!section||r.section===section)&&r.progress.status!=="Mastered").map(r=>r.question);const seen=new Set(mistakes.map(q=>q.examId));const related=pool.filter(q=>(!skill||q.skill===skill)&&(!section||q.section===section)&&!seen.has(q.examId));return [...mistakes,...related].slice(0,count);}
