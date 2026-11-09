"use client";

import { useState } from "react";
import Link from "next/link";
import {
  learningTracks,
  allCategories,
  type LearningCategory,
} from "@/data/learning";
import {
  ArrowUpRight,
  Award,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function LearningPathClient() {
  const [activeCategory, setActiveCategory] = useState<LearningCategory | "All">("All");

  const filteredTracks =
    activeCategory === "All"
      ? learningTracks
      : learningTracks.filter((t) => t.category === activeCategory);

  return (
    <div className="w-full min-w-0 max-w-full">
      {/* ── Category Filter Pills ── */}
      <div className="mt-6 flex flex-wrap gap-2">
        {["All", ...allCategories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as LearningCategory | "All")}
            className={cn(
              "rounded-full border px-3 py-1 text-xs sm:text-sm font-medium transition-all",
              activeCategory === cat
                ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Minimalist Learning Tracks Grid ── */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 w-full min-w-0">
        {filteredTracks.map((track) => (
          <article
            key={track.id}
            className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all duration-200 hover:border-primary/50 hover:bg-secondary/40 hover:shadow-md dark:bg-secondary/25 dark:shadow-none dark:hover:border-primary/50 dark:hover:bg-secondary/40 w-full min-w-0 max-w-full overflow-hidden"
          >
            {/* Top-Right Arrow Button */}
            <Link
              href={`/learning/${track.slug}`}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-secondary/50 text-muted-foreground transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground hover:scale-105 focus:outline-none"
              aria-label={`Open plan details for ${track.title}`}
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <div className="min-w-0 w-full pr-10 sm:pr-11">
              {/* Category & Status */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-primary">
                <span>{track.category}</span>
                <span className="text-muted-foreground/50">·</span>
                <span className="text-muted-foreground font-medium">{track.curriculumVersion}</span>
              </div>

              {/* Title */}
              <h2 className="mt-2 text-base sm:text-lg font-bold leading-snug text-foreground">
                <Link
                  href={`/learning/${track.slug}`}
                  className="transition-colors group-hover:text-primary focus:outline-none focus:underline"
                >
                  {track.title}
                </Link>
              </h2>

              {/* Scope */}
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                <Award className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{track.targetCredential}</span>
              </p>

              {/* Summary */}
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {track.summary}
              </p>

              {/* Domains list — clean text bullets, NO nested boxes */}
              <div className="mt-4 border-t border-border/50 pt-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Key Curriculum Domains:
                </p>
                <ul className="space-y-1 text-xs text-foreground/90 font-medium">
                  {track.topicsList.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span className="truncate">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Card Footer ── */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-3 min-w-0">
              {track.relatedBlogSlug ? (
                <Link
                  href={`/blog/${track.relatedBlogSlug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <BookOpen className="h-3 w-3" />
                  <span>Technical Guide</span>
                </Link>
              ) : (
                <div />
              )}

              <Link
                href={`/learning/${track.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors group-hover:text-primary"
              >
                <span>Read Full Plan &amp; Labs</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
