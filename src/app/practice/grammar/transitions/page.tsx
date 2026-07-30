import type { Metadata } from "next";
import GrammarCoursePage from "@/components/course/GrammarCoursePage";
import { transitionsCourse } from "@/content/grammar";
export const metadata: Metadata = { title: "Logical Transitions | Grammar & Writing" };
export default function Page() { return <GrammarCoursePage course={transitionsCourse} />; }
