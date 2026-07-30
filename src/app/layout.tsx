import type { Metadata } from "next";
import AppNavigation from "@/components/AppNavigation";
import ThemeProvider from "@/components/ThemeProvider";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Digital SAT Sprint",
    template: "%s · Digital SAT Sprint",
  },
  description:
    "A structured 20-day Digital SAT vocabulary and practice platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

<script
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        try {
          var stored = localStorage.getItem("digital-sat-sprint-settings");
          var settings = stored ? JSON.parse(stored) : {};
          var preference = settings.theme || "system";
          var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          var resolved = preference === "system"
            ? (systemDark ? "dark" : "light")
            : preference;
          document.documentElement.dataset.theme = resolved;
          document.documentElement.dataset.themePreference = preference;
          document.documentElement.dataset.reduceMotion =
            settings.reduceMotion ? "true" : "false";
        } catch (error) {
          document.documentElement.dataset.theme = "light";
        }
      })();
    `,
  }}
/>
        <ThemeProvider />
        <AppNavigation />
        <Breadcrumbs />
        {children}
        <footer className="footer">
          <div className="container footerExpanded">
            <div><strong>Digital SAT Sprint</strong><p>A complete Reading, Grammar, Math, and Vocabulary learning platform.</p></div>
            <div className="footerLinks"><Link href="/practice/reading-skills">Reading</Link><Link href="/practice/grammar">Grammar</Link><Link href="/practice/math">Math</Link><Link href="/lessons">Vocabulary</Link><Link href="/progress">Dashboard</Link></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
