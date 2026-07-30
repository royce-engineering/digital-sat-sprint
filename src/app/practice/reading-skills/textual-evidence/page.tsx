import type { Metadata } from "next";
import { textualEvidenceCourse } from "@/content/courses";
import ReadingCoursePage from "@/components/course/ReadingCoursePage";
export const metadata: Metadata = { title: "Textual Evidence" };
export default function Page(){ return <ReadingCoursePage course={textualEvidenceCourse}/>; }
