import type { Metadata } from "next";
import { authorsPurposeCourse } from "@/content/courses";
import ReadingCoursePage from "@/components/course/ReadingCoursePage";
export const metadata: Metadata = { title: "Author\u2019s Purpose" };
export default function Page(){ return <ReadingCoursePage course={authorsPurposeCourse}/>; }
