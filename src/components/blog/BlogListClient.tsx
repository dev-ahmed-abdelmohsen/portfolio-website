"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost, allBlogTags } from "@/data/blog";
import { cn } from "@/lib/utils";

export function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered =
    activeTag === "All"
      ? posts
      : posts.filter((p) => p.tags.includes(activeTag));

  return (
    <div>
      {/* ── Category / Topic Pills ── */}
      <div className="mt-6 flex flex-wrap gap-2">
        {allBlogTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
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

      {/* ── Article Cards ── */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:bg-secondary/50 hover:shadow-md dark:bg-secondary/40 dark:shadow-none dark:hover:bg-secondary/70"
          >
            <div className="flex flex-wrap gap-1.5 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read Guide <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
