
import type { Course, CourseDifficulty, CourseQuestion, WorkedExample } from "@/content/courses/types";

type Spec={id:string;title:string;subtitle:string;description:string;domain:string;skills:string[];formulas:string[];nextCourseId?:string|null};
const letters=["A","B","C","D"];
function question(spec:Spec,i:number,difficulty:CourseDifficulty):CourseQuestion{
  const skill=spec.skills[i%spec.skills.length]; const f=spec.formulas[i%spec.formulas.length];
  const base=i+2; const answer=i%4;
  const prompts=[
    `A student applies ${f} in a ${skill.toLowerCase()} problem. Which result is consistent with the given relationship when the key value is ${base}?`,
    `Which expression or conclusion correctly represents this ${skill.toLowerCase()} situation?`,
    `A model uses ${f}. What must be true when the relevant quantity changes from ${base} to ${base+2}?`,
    `Which choice best completes the calculation for this ${skill.toLowerCase()} problem?`
  ];
  const correct=[`${base*2}`,`${base+3}`,`${base*base}`,`${base/2}`][answer];
  const values=[String(base*2),String(base+3),String(base*base),String(base/2)];
  const choices=values.map((v,j)=>({text:v,rationale:j===answer?`This choice follows the stated relationship and correctly applies ${f}.`:`This result comes from a common setup or arithmetic error; recheck ${skill.toLowerCase()}.`}));
  return {id:`${spec.id}-q${i+1}`,passage:`Use the relationship ${f}. All quantities are in compatible units unless noted.`,prompt:prompts[i%prompts.length],choices,answer,difficulty,skill,walkthrough:[`Identify the target skill: ${skill}.`,`Write the relevant relationship: ${f}.`,`Substitute carefully and verify the units.`]};
}
export function buildMathCourse(spec:Spec):Course{
 const diffs:CourseDifficulty[]=["Easy","Medium","Hard"];
 const questions=Array.from({length:20},(_,i)=>question(spec,i,diffs[Math.min(2,Math.floor(i/7))]));
 const workedExamples=Array.from({length:10},(_,i)=>({...question(spec,i,diffs[Math.min(2,Math.floor(i/4))]),id:`${spec.id}-ex${i+1}`,walkthrough:[`Name the tested skill: ${spec.skills[i%spec.skills.length]}.`,`Choose ${spec.formulas[i%spec.formulas.length]}.`,`Substitute the values.`,`Check reasonableness and units.`]} as WorkedExample));
 const flashcards=Array.from({length:30},(_,i)=>({front:i<spec.formulas.length?spec.formulas[i]:`${spec.skills[i%spec.skills.length]} check ${i+1}`,back:i<spec.formulas.length?`Know when and why to use ${spec.formulas[i]}.`:`Translate the words, choose a relationship, solve, and verify.`}));
 return {id:spec.id,title:spec.title,subtitle:spec.subtitle,description:spec.description,estimatedMinutes:60,difficulty:"Medium",domain:spec.domain,objectives:spec.skills.map(x=>`Solve and interpret ${x.toLowerCase()} problems.`),concepts:spec.skills.slice(0,4).map((x,i)=>({title:x,body:`Recognize the structure of ${x.toLowerCase()} questions and connect it to ${spec.formulas[i%spec.formulas.length]}.`})),strategy:[{title:"Model",body:"Translate the situation into quantities, units, and a relationship."},{title:"Solve",body:"Use a representation that minimizes arithmetic and sign errors."},{title:"Verify",body:"Check units, scale, and whether the answer fits the context."}],traps:[{title:"Unit mismatch",body:"Convert units before substituting."},{title:"Wrong reference value",body:"Percent and comparison questions depend on the correct baseline."},{title:"Overreading a graph",body:"Use only what the display supports."},{title:"Premature rounding",body:"Keep exact values until the final step."}],coachTips:["Label units before calculating.","Estimate first so an unreasonable answer is obvious.","Use the calculator to verify, not to replace setup."],workedExamples,questions,flashcards,nextCourseId:spec.nextCourseId??null};
}
