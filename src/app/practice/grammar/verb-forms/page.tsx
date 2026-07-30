import type { Metadata } from "next";
import GrammarCoursePage from "@/components/course/GrammarCoursePage";
import { verbFormsCourse } from "@/content/grammar";
export const metadata: Metadata = { title: "Verb Forms & Agreement | Grammar & Writing" };
export default function Page() { return <GrammarCoursePage course={verbFormsCourse} />; }
