"use client";
import { useState } from "react"; import type { CourseFlashcard } from "@/content/courses/types";
export default function FlashcardGrid({ cards }: { cards: CourseFlashcard[] }) { const [open,setOpen]=useState<number[]>([]); return <div className="courseFlashcardGrid">{cards.map((card,i)=><button type="button" key={card.front} onClick={()=>setOpen(v=>v.includes(i)?v.filter(x=>x!==i):[...v,i])} className="courseFlashcard"><strong>{card.front}</strong><span>{open.includes(i)?card.back:"Tap to reveal"}</span></button>)}</div> }
