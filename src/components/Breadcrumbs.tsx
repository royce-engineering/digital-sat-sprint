"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  practice: "Practice",
  "reading-skills": "Reading Skills",
  grammar: "Grammar & Writing",
  math: "Math",
  lessons: "Vocabulary",
  progress: "Dashboard",
  tutor: "AI Tutor",
  flashcards: "Flashcards",
  favorites: "Favorites",
  search: "Search",
  settings: "Settings",
};

function titleCase(value: string) {
  return labels[value] ?? value.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  const parts = pathname.split("/").filter(Boolean);
  return (
    <div className="breadcrumbBar">
      <nav className="container breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        {parts.map((part, index) => {
          const href = `/${parts.slice(0, index + 1).join("/")}`;
          const last = index === parts.length - 1;
          return <span key={href}><span className="breadcrumbSeparator">›</span>{last ? <strong aria-current="page">{titleCase(part)}</strong> : <Link href={href}>{titleCase(part)}</Link>}</span>;
        })}
      </nav>
    </div>
  );
}
