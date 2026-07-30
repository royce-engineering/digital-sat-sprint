import type { Metadata } from "next";
import GrammarCoursePage from "@/components/course/GrammarCoursePage";
import { modifiersCourse } from "@/content/grammar";
export const metadata: Metadata = { title: "Modifiers | Grammar & Writing" };
export default function Page() { return <GrammarCoursePage course={modifiersCourse} />; }
