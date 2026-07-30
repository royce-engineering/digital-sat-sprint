import Link from "next/link";
import type { PracticeModuleSummary } from "@/content/practice/modules";

export default function PracticeModuleCard({ module }: { module: PracticeModuleSummary }) {
  const available = module.status === "available";
  const content = (
    <article className={`practiceModuleCard ${available ? "practiceModuleCardAvailable" : "practiceModuleCardLocked"}`}>
      <div className="practiceModuleCardHeader">
        <span className={`practiceStatus ${available ? "practiceStatusAvailable" : "practiceStatusSoon"}`}>
          {available ? "Available" : "Coming soon"}
        </span>
        <span className="practiceDifficulty">{module.difficulty}</span>
      </div>
      <h3>{module.title}</h3>
      <p>{module.description}</p>
      <div className="practiceModuleStats">
        <span>{module.estimatedMinutes} min</span>
        <span>{module.vocabularyCount ? `${module.vocabularyCount} words` : "Mixed skills"}</span>
        <span>{module.questionCount} questions</span>
      </div>
      <strong className="practiceModuleAction">{available ? "Open module →" : "Planned module"}</strong>
    </article>
  );

  return available ? <Link href={module.id === "reading-skills" ? "/practice/reading-skills" : `/practice/${module.id}`}>{content}</Link> : content;
}
