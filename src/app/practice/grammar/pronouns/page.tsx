import type { Metadata } from "next";
import GrammarCoursePage from "@/components/course/GrammarCoursePage";
import { pronounsCourse } from "@/content/grammar";
export const metadata: Metadata = { title: "Pronouns | Grammar & Writing" };
export default function Page() { return <GrammarCoursePage course={pronounsCourse} />; }
