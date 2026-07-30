import type { Metadata } from "next";
import GrammarCoursePage from "@/components/course/GrammarCoursePage";
import { wordChoiceCourse } from "@/content/grammar";
export const metadata: Metadata = { title: "Word Choice & Concision | Grammar & Writing" };
export default function Page() { return <GrammarCoursePage course={wordChoiceCourse} />; }
