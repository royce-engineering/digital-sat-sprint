import type { Metadata } from "next";
import { readingWorkflowCourse } from "@/content/courses";
import ReadingCoursePage from "@/components/course/ReadingCoursePage";
export const metadata: Metadata = { title: "Complete Reading Workflow" };
export default function Page(){ return <ReadingCoursePage course={readingWorkflowCourse}/>; }
