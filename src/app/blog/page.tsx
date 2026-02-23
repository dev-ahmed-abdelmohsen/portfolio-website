import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <section>
      {/* ── Section Title ── */}
      <h2 className="text-3xl font-bold tracking-tight">Blog</h2>
      <div className="mt-2 h-1 w-10 rounded-full bg-primary" />
      <p className="mt-3 text-base text-muted-foreground">
        Writing about DevOps, Cloud, and Software Engineering.
      </p>

      {/* ── Article Cards ── */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-secondary/40 p-5 transition-all hover:border-primary/30 hover:bg-secondary/70 hover:shadow-lg hover:shadow-primary/5"
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

            <h4 className="text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h4>
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
                Read <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
