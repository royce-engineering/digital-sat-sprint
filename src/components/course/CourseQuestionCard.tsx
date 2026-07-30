"use client";
import { useState } from "react";
import type { CourseQuestion } from "@/content/courses/types";
export default function CourseQuestionCard({ question, number }: { question: CourseQuestion; number: number }) {
 const [selected,setSelected]=useState<number|null>(null); const answered=selected!==null;
 return <article className="courseQuestionCard"><div className="courseQuestionMeta"><span>Question {number}</span><span>{question.difficulty}</span></div><p className="coursePassage">{question.passage}</p><h3>{question.prompt}</h3><div className="courseChoiceList">{question.choices.map((choice,i)=><button key={`${question.id}-choice-${i}`} type="button" onClick={()=>setSelected(i)} className={answered ? (i===question.answer?"courseChoice correct":i===selected?"courseChoice incorrect":"courseChoice") : "courseChoice"}><strong>{String.fromCharCode(65+i)}.</strong> {choice.text}</button>)}</div>{answered?<div className="courseFeedback"><strong>{selected===question.answer?"Correct":"Review this one"}</strong><p>{question.choices[question.answer].rationale}</p>{selected!==question.answer?<p><strong>Why your choice misses:</strong> {question.choices[selected!].rationale}</p>:null}</div>:null}</article>
}
