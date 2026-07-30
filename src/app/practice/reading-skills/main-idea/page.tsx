import type { Metadata } from "next";
import { mainIdeaCourse } from "@/content/courses";
import ReadingCoursePage from "@/components/course/ReadingCoursePage";
export const metadata: Metadata = { title: "Main Idea & Central Claim" };
export default function Page(){ return <ReadingCoursePage course={mainIdeaCourse}/>; }
