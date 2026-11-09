"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, allTags, type ProjectTag } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PortfolioClient() {
  const [activeTag, setActiveTag] = useState<ProjectTag | "All">("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div>
      {/* ── Filter Tags ── */}
      <div className="mt-6 flex flex-wrap gap-2">
        {["All", ...allTags].map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag as ProjectTag | "All")}
            className={cn(
              "rounded-full border px-3 py-1 text-xs sm:text-sm font-medium transition-all",
              activeTag === tag
                ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Project Cards ── */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 w-full min-w-0">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-4 sm:p-5 shadow-sm transition-all hover:border-primary/50 hover:bg-secondary/40 hover:shadow-md dark:bg-secondary/30 dark:shadow-none dark:hover:border-primary/50 dark:hover:bg-secondary/60 w-full min-w-0 max-w-full overflow-hidden"
          >
            {/* Top-Right Arrow Linking to Dedicated Detail Page */}
            <Link
              href={`/portfolio/${project.slug}`}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-secondary/50 text-muted-foreground transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground hover:scale-105 focus:outline-none"
              aria-label={`Open dedicated detail page for ${project.title}`}
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <div className="min-w-0 w-full">
              {/* ── Card Header: Title & Padding to avoid arrow ── */}
              <div className="pr-10 sm:pr-11">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-base font-semibold text-foreground transition-colors group-hover:text-primary focus:outline-none focus:underline"
                >
                  {project.title}
                </Link>

                {/* Deployment Model Badge */}
                <div className="mt-2 text-[11px] font-medium tracking-wide uppercase text-muted-foreground">
                  {project.deploymentModel}
                </div>
              </div>

              {/* Description */}
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* ── Footer Tags ── */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/portfolio/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary/90 transition-colors group-hover:text-primary"
              >
                <span>Architecture Details</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
