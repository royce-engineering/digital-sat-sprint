"use client";
import { useSyncExternalStore } from "react";
import { getQuestion } from "@/lib/adaptive/questionBank";
import { selectModule } from "@/lib/adaptive/selectModule";
import type { ExamDifficulty, ExamSection } from "@/lib/adaptive/types";
import { isEquivalentAnswer } from "@/lib/adaptive/answerEvaluator";
import { estimateSatScore, type SatScoreEstimate } from "@/lib/adaptive/scoreEngine";

export type ModuleKey="rw1"|"rw2"|"math1"|"math2";
export interface ModuleState{key:ModuleKey;title:string;section:ExamSection;difficulty:ExamDifficulty;questionIds:string[];timeLimit:number;}
export interface ExamAnswer{selected:number;typedAnswer?:string;flagged:boolean;answeredAt:number;durationMs?:number;}
export interface ExamAttempt{id:string;completedAt:number;seed:number;modules:ModuleState[];answers:Record<string,ExamAnswer>;overall:number;readingWriting:number;math:number;estimatedRange:string;scoreEstimate:SatScoreEstimate;}
interface ExamState{
 status:"idle"|"active"|"complete";seed:number;modules:ModuleState[];moduleIndex:number;questionIndex:number;answers:Record<string,ExamAnswer>;startedAt:number|null;moduleStartedAt:number|null;questionOpenedAt:number|null;attempts:ExamAttempt[];
 startExam:()=>void;answer:(id:string,selected:number)=>void;answerText:(id:string,value:string)=>void;toggleFlag:(id:string)=>void;goToQuestion:(index:number)=>void;nextQuestion:()=>void;previousQuestion:()=>void;finishModule:()=>void;resetExam:()=>void;clearHistory:()=>void;
}

const rwCount=27,mathCount=22;
const initial={status:"idle" as const,seed:0,modules:[] as ModuleState[],moduleIndex:0,questionIndex:0,answers:{} as Record<string,ExamAnswer>,startedAt:null,moduleStartedAt:null,questionOpenedAt:null,attempts:[] as ExamAttempt[]};

function isCorrect(id:string, answer?:ExamAnswer){
 const q=getQuestion(id); if(!q||!answer)return false;
 return q.questionType==="student-response" ? isEquivalentAnswer(answer.typedAnswer??"",q.numericAnswer??"") : q.answer===answer.selected;
}
function accuracy(ids:string[],answers:Record<string,ExamAnswer>){if(!ids.length)return 0;return ids.filter(id=>isCorrect(id,answers[id])).length/ids.length;}
function buildModule(key:ModuleKey,title:string,section:ExamSection,difficulty:ExamDifficulty,seed:number,exclude:string[]=[]):ModuleState{const count=section==="Math"?mathCount:rwCount;return{key,title,section,difficulty,questionIds:selectModule(section,difficulty,count,seed,exclude).map(q=>q.examId),timeLimit:section==="Math"?2100:1920};}

type Listener = () => void;
const listeners = new Set<Listener>();
let state: ExamState;

function emit() {
  listeners.forEach((listener) => listener());
}

function setState(update: Partial<ExamState> | ((current: ExamState) => Partial<ExamState>)) {
  const patch = typeof update === "function" ? update(state) : update;
  state = { ...state, ...patch };
  emit();
}

function getState() {
  return state;
}

state = {...initial,
 startExam:()=>{const seed=Date.now()%1000000;const rw1=buildModule("rw1","Reading & Writing · Module 1","Reading & Writing","Medium",seed);setState(s=>({...initial,status:"active",seed,modules:[rw1],startedAt:Date.now(),moduleStartedAt:Date.now(),questionOpenedAt:Date.now(),attempts:s.attempts}));},
 answer:(id,selected)=>setState(s=>{
  const now=Date.now(),elapsed=s.questionOpenedAt?Math.max(0,now-s.questionOpenedAt):0;
  return {answers:{...s.answers,[id]:{...s.answers[id],selected,flagged:s.answers[id]?.flagged??false,answeredAt:now,durationMs:Math.max(s.answers[id]?.durationMs??0,elapsed)}}};
 }),
 answerText:(id,value)=>setState(s=>{
  const now=Date.now(),elapsed=s.questionOpenedAt?Math.max(0,now-s.questionOpenedAt):0;
  return {answers:{...s.answers,[id]:{...s.answers[id],selected:-1,typedAnswer:value,flagged:s.answers[id]?.flagged??false,answeredAt:now,durationMs:Math.max(s.answers[id]?.durationMs??0,elapsed)}}};
 }),
 toggleFlag:(id)=>setState(s=>({answers:{...s.answers,[id]:{selected:s.answers[id]?.selected??-1,typedAnswer:s.answers[id]?.typedAnswer,flagged:!(s.answers[id]?.flagged??false),answeredAt:s.answers[id]?.answeredAt??Date.now(),durationMs:s.answers[id]?.durationMs}}})),
 goToQuestion:(questionIndex)=>setState({questionIndex,questionOpenedAt:Date.now()}),nextQuestion:()=>setState(s=>({questionIndex:Math.min(s.questionIndex+1,(s.modules[s.moduleIndex]?.questionIds.length??1)-1),questionOpenedAt:Date.now()})),previousQuestion:()=>setState(s=>({questionIndex:Math.max(0,s.questionIndex-1),questionOpenedAt:Date.now()})),
 finishModule:()=>{const s=getState(),current=s.modules[s.moduleIndex];if(!current)return;const modules=[...s.modules];let next:ModuleState|undefined;
  if(current.key==="rw1"){const d=accuracy(current.questionIds,s.answers)>=.7?"Hard":"Easy";next=buildModule("rw2",`Reading & Writing · Module 2 (${d})`,"Reading & Writing",d,s.seed+101,current.questionIds);}
  else if(current.key==="rw2")next=buildModule("math1","Math · Module 1","Math","Medium",s.seed+202);
  else if(current.key==="math1"){const d=accuracy(current.questionIds,s.answers)>=.7?"Hard":"Easy";next=buildModule("math2",`Math · Module 2 (${d})`,"Math",d,s.seed+303,current.questionIds);}
  if(next){modules.push(next);setState({modules,moduleIndex:s.moduleIndex+1,questionIndex:0,moduleStartedAt:Date.now(),questionOpenedAt:Date.now()});return;}
  const ids=modules.flatMap(m=>m.questionIds),rwIds=ids.filter(id=>getQuestion(id)?.section==="Reading & Writing"),mathIds=ids.filter(id=>getQuestion(id)?.section==="Math");const rw=accuracy(rwIds,s.answers),math=accuracy(mathIds,s.answers),overall=accuracy(ids,s.answers);
  const scoreEstimate=estimateSatScore(modules,s.answers);
  const attempt:ExamAttempt={id:`attempt-${Date.now()}`,completedAt:Date.now(),seed:s.seed,modules,answers:s.answers,overall,readingWriting:rw,math,estimatedRange:`${scoreEstimate.lowTotal}–${scoreEstimate.highTotal}`,scoreEstimate};
  setState({status:"complete",moduleStartedAt:null,questionOpenedAt:null,attempts:[attempt,...s.attempts].slice(0,20)});
 },
 resetExam:()=>setState(s=>({...initial,attempts:s.attempts})),clearHistory:()=>setState({attempts:[]}),
};

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useAdaptiveExamStore(): ExamState;
export function useAdaptiveExamStore<T>(selector: (state: ExamState) => T): T;
export function useAdaptiveExamStore<T>(selector?: (state: ExamState) => T): ExamState | T {
  const snapshot = useSyncExternalStore(subscribe, getState, getState);
  return selector ? selector(snapshot) : snapshot;
}


export function attemptQuestionIds(attempt:ExamAttempt){return attempt.modules.flatMap(m=>m.questionIds);}
export function reviewIds(attempt:ExamAttempt){return attemptQuestionIds(attempt).filter(id=>attempt.answers[id]?.flagged||!isCorrect(id,attempt.answers[id]));}
