import type { Metadata } from "next";
import { crossTextCourse } from "@/content/courses";
import ReadingCoursePage from "@/components/course/ReadingCoursePage";
export const metadata: Metadata = { title: "Cross-Text Connections" };
export default function Page(){ return <ReadingCoursePage course={crossTextCourse}/>; }
