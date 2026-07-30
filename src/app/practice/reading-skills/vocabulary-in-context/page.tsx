import type { Metadata } from "next";
import { vocabularyInContextCourse } from "@/content/courses";
import ReadingCoursePage from "@/components/course/ReadingCoursePage";
export const metadata: Metadata = { title: "Vocabulary in Context" };
export default function Page(){ return <ReadingCoursePage course={vocabularyInContextCourse}/>; }
