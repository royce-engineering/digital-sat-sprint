import type { Metadata } from "next";
import { inferenceCourse } from "@/content/courses";
import ReadingCoursePage from "@/components/course/ReadingCoursePage";
export const metadata: Metadata = { title: "Inference" };
export default function Page(){ return <ReadingCoursePage course={inferenceCourse}/>; }
