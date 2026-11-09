import type { Metadata } from "next";
import { experiences, skillGroups } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume & Professional Experience | Ahmed Shams – Shams Systems",
  description:
    "Professional journey, work history, and core technical skills of Ahmed Shams (أحمد شمس) — DevOps & Hybrid Infrastructure Engineer specializing in on-premises systems, private cloud, GitOps, and automation with n8n & MCP.",
  keywords: [
    "Ahmed Shams",
    "Ahmed Shams Resume",
    "Ahmed Shams CV",
    "Shams Systems",
    "shams.systems",
    "احمد شمس",
    "أحمد شمس",
    "DevOps Hybrid Infrastructure CV",
    "On-Premises DevOps",
    "n8n Automation",
    "Model Context Protocol",
  ],
  alternates: {
    canonical: "https://shams.systems/resume",
  },
  openGraph: {
    title: "Resume & Professional Experience | Ahmed Shams – Shams Systems",
    description:
      "Work history, education, and technical capabilities of Ahmed Shams in DevOps, Hybrid Infrastructure, and Systems Automation.",
    url: "https://shams.systems/resume",
  },
};

export default function ResumePage() {
  return (
    <section>
      {/* ── Section Title (Single H1) ── */}
      <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
      <div className="mt-2 h-1 w-10 rounded-full bg-primary" />

      {/* ── Experience Timeline ── */}
      <h2 className="mt-8 text-xl font-bold tracking-tight">Experience</h2>
      <div className="relative mt-5 ml-4 border-l-2 border-border pl-6">
        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-8 last:mb-0">
            {/* Timeline dot */}
            <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-card dark:bg-background">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>

            <p className="text-sm font-medium text-primary">{exp.period}</p>
            <h3 className="mt-1 text-base font-semibold">{exp.title}</h3>
            <p className="text-sm text-muted-foreground">{exp.company}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      {/* ── Skills Grid ── */}
      <h2 className="mt-10 text-xl font-bold tracking-tight">Skills &amp; Competencies</h2>
      <div className="mt-4 space-y-5">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-foreground shadow-xs transition-colors hover:border-primary/50 hover:text-primary dark:bg-secondary/50 dark:shadow-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
