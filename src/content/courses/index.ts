import { mainIdeaCourse } from "./mainIdea";
import { inferenceCourse } from "./inference";
import { textualEvidenceCourse } from "./textualevidence";
import { vocabularyInContextCourse } from "./vocabularyincontext";
import { authorsPurposeCourse } from "./authorspurpose";
import { toneAttitudeCourse } from "./toneattitude";
import { organizationCourse } from "./organization";
import { crossTextCourse } from "./crosstext";
import { rhetoricalSynthesisCourse } from "./rhetoricalsynthesis";
import { readingWorkflowCourse } from "./readingworkflow";
import type { Course } from "./types";

export const courses: Record<string, Course> = {
  [mainIdeaCourse.id]: mainIdeaCourse,
  [inferenceCourse.id]: inferenceCourse,
  [textualEvidenceCourse.id]: textualEvidenceCourse,
  [vocabularyInContextCourse.id]: vocabularyInContextCourse,
  [authorsPurposeCourse.id]: authorsPurposeCourse,
  [toneAttitudeCourse.id]: toneAttitudeCourse,
  [organizationCourse.id]: organizationCourse,
  [crossTextCourse.id]: crossTextCourse,
  [rhetoricalSynthesisCourse.id]: rhetoricalSynthesisCourse,
  [readingWorkflowCourse.id]: readingWorkflowCourse,
};
export { mainIdeaCourse, inferenceCourse, textualEvidenceCourse, vocabularyInContextCourse, authorsPurposeCourse, toneAttitudeCourse, organizationCourse, crossTextCourse, rhetoricalSynthesisCourse, readingWorkflowCourse };
export type { Course } from "./types";
