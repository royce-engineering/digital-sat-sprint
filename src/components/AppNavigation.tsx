"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/practice", label: "Practice" },
  { href: "/vocabulary", label: "Vocabulary" },
  { href: "/progress", label: "Dashboard" },
  { href: "/analytics", label: "Analytics" },
  { href: "/adaptive", label: "Adaptive Test" },
  { href: "/mistakes", label: "Mistakes" },
  { href: "/tutor", label: "AI Tutor" },
];

const learningCenters = [
  { href: "/practice/reading-skills", label: "Reading Skills", description: "10 complete reading courses" },
  { href: "/practice/grammar", label: "Grammar & Writing", description: "8 complete writing courses" },
  { href: "/practice/math", label: "Math", description: "16 courses across all four domains" },
  { href: "/vocabulary", label: "Vocabulary", description: "25 lessons · 600 words · mastery tracking" },
];

export default function AppNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [centersOpen, setCentersOpen] = useState(false);

  return (
    <header className="appHeader">
      <div className="container appNav appNavSimplified">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brandMark">S</span>
          <span className="brandText"><strong>Digital SAT</strong><small>Sprint</small></span>
        </Link>

        <button className="menuButton" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>

        <nav className={`mainNav mainNavPrimary ${open ? "mainNavOpen" : ""}`} aria-label="Primary navigation">
          {primaryNavigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link className={`mainNavLink ${active ? "mainNavLinkActive" : ""}`} href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>;
          })}
          <div className="centersMenu">
            <button className="mainNavLink centersMenuButton" type="button" aria-expanded={centersOpen} onClick={() => setCentersOpen((value) => !value)}>
              Learning Centers <span aria-hidden="true">▾</span>
            </button>
            <div className={`centersDropdown ${centersOpen ? "centersDropdownOpen" : ""}`}>
              {learningCenters.map((center) => (
                <Link href={center.href} key={center.href} onClick={() => { setCentersOpen(false); setOpen(false); }}>
                  <strong>{center.label}</strong><span>{center.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <Link className="navCta" href="/adaptive">Take Adaptive Test</Link>
      </div>
    </header>
  );
}
