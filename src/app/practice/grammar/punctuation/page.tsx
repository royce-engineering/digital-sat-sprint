import type { Metadata } from "next";
import GrammarCoursePage from "@/components/course/GrammarCoursePage";
import { punctuationCourse } from "@/content/grammar";
export const metadata: Metadata = { title: "Punctuation | Grammar & Writing" };
export default function Page() { return <GrammarCoursePage course={punctuationCourse} />; }
