import type { Metadata } from "next";
import { organizationCourse } from "@/content/courses";
import ReadingCoursePage from "@/components/course/ReadingCoursePage";
export const metadata: Metadata = { title: "Organization & Structure" };
export default function Page(){ return <ReadingCoursePage course={organizationCourse}/>; }
