import type { Metadata } from "next";
import GrammarCoursePage from "@/components/course/GrammarCoursePage";
import { parallelStructureCourse } from "@/content/grammar";
export const metadata: Metadata = { title: "Parallel Structure | Grammar & Writing" };
export default function Page() { return <GrammarCoursePage course={parallelStructureCourse} />; }
