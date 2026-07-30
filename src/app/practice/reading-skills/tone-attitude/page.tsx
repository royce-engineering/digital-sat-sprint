import type { Metadata } from "next";
import { toneAttitudeCourse } from "@/content/courses";
import ReadingCoursePage from "@/components/course/ReadingCoursePage";
export const metadata: Metadata = { title: "Tone & Attitude" };
export default function Page(){ return <ReadingCoursePage course={toneAttitudeCourse}/>; }
