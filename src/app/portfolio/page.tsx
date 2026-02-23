"use client";

import { useState } from "react";
import { projects, allTags, type ProjectTag } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PortfolioPage() {
  const [activeTag, setActiveTag] = useState<ProjectTag | "All">("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section>
      {/* ── Section Title ── */}
      <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
      <div className="mt-2 h-1 w-10 rounded-full bg-primary" />

      {/* ── Filter Tags ── */}
      <div className="mt-6 flex flex-wrap gap-2">
        {["All", ...allTags].map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag as ProjectTag | "All")}
            className={cn(
              "rounded-full border px-3 py-1 text-sm font-medium transition-all",
              activeTag === tag
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Project Cards ── */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border border-border bg-secondary/40 p-5 transition-all hover:border-primary/30 hover:bg-secondary/70"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-base font-semibold">{project.title}</h4>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
