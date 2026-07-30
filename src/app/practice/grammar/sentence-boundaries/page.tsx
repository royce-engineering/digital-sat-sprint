import type { Metadata } from "next";
import GrammarCoursePage from "@/components/course/GrammarCoursePage";
import { sentenceBoundariesCourse } from "@/content/grammar";
export const metadata: Metadata = { title: "Sentence Boundaries | Grammar & Writing" };
export default function Page() { return <GrammarCoursePage course={sentenceBoundariesCourse} />; }
