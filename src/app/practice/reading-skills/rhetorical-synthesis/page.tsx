import type { Metadata } from "next";
import { rhetoricalSynthesisCourse } from "@/content/courses";
import ReadingCoursePage from "@/components/course/ReadingCoursePage";
export const metadata: Metadata = { title: "Rhetorical Synthesis" };
export default function Page(){ return <ReadingCoursePage course={rhetoricalSynthesisCourse}/>; }
