"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Copy,
  Check,
  Info,
  AlertTriangle,
  Lightbulb,
  AlertCircle,
} from "lucide-react";
import { blogPosts, ContentBlock } from "@/data/blog";
import { cn } from "@/lib/utils";

/* ─── Reading progress bar ─── */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-border">
      <div
        className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ─── Copy button for code blocks ─── */
function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/90"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-emerald-400" /> Copied
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" /> Copy
        </>
      )}
    </button>
  );
}

/* ─── Individual content block renderer ─── */
function Block({ block }: { block: ContentBlock }) {
  if (block.type === "heading") {
    return (
      <h2 className="mb-4 mt-10 flex items-center gap-3 text-xl font-bold tracking-tight text-foreground first:mt-0">
        <span className="inline-block h-5 w-1 rounded-full bg-primary" />
        {block.text}
      </h2>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3 className="mb-3 mt-7 text-base font-semibold text-foreground">
        {block.text}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p className="mb-5 text-base leading-[1.85] text-muted-foreground">
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="mb-5 space-y-2">
        {block.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
          >
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "ordered-list") {
    return (
      <ol className="mb-5 space-y-2">
        {block.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
              {i + 1}
            </span>
            {item}
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "code") {
    return (
      <div className="mb-6 overflow-hidden rounded-xl border border-white/8 bg-[#0d1117] shadow-xl">
        {/* Code block header */}
        <div className="flex items-center justify-between border-b border-white/8 bg-white/3 px-4 py-2.5">
          <div className="flex items-center gap-2">
            {/* Traffic lights */}
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
            {block.language}
          </span>
          <CopyButton code={block.text} />
        </div>
        {/* Code content */}
        <pre className="overflow-x-auto p-3.5 sm:p-5">
          <code className="font-mono text-[11px] leading-5 text-[#e6edf3] sm:text-[13px] sm:leading-6">
            {block.text}
          </code>
        </pre>
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote className="relative mb-6 overflow-hidden rounded-xl border border-primary/20 bg-primary/5 p-5 pl-6">
        <span className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-primary to-cyan-400" />
        <span className="absolute right-4 top-2 font-serif text-6xl leading-none text-primary/10 select-none">
          &ldquo;
        </span>
        <p className="relative text-[15px] italic leading-relaxed text-foreground">
          {block.text}
        </p>
        {block.author && (
          <p className="mt-3 text-xs font-semibold text-primary">
            — {block.author}
          </p>
        )}
      </blockquote>
    );
  }

  if (block.type === "callout") {
    const variants = {
      info: {
        icon: Info,
        border: "border-blue-500/30",
        bg: "bg-blue-500/8",
        icon_color: "text-blue-400",
        label: "Note",
        label_color: "text-blue-400",
      },
      warning: {
        icon: AlertTriangle,
        border: "border-yellow-500/30",
        bg: "bg-yellow-500/8",
        icon_color: "text-yellow-400",
        label: "Warning",
        label_color: "text-yellow-400",
      },
      tip: {
        icon: Lightbulb,
        border: "border-emerald-500/30",
        bg: "bg-emerald-500/8",
        icon_color: "text-emerald-400",
        label: "Tip",
        label_color: "text-emerald-400",
      },
      danger: {
        icon: AlertCircle,
        border: "border-red-500/30",
        bg: "bg-red-500/8",
        icon_color: "text-red-400",
        label: "Danger",
        label_color: "text-red-400",
      },
    };
    const v = variants[block.variant];
    const Icon = v.icon;
    return (
      <div
        className={cn("mb-5 flex gap-3 rounded-xl border p-4", v.border, v.bg)}
      >
        <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", v.icon_color)} />
        <div>
          <p
            className={cn(
              "mb-1 text-xs font-bold uppercase tracking-wider",
              v.label_color,
            )}
          >
            {v.label}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {block.text}
          </p>
        </div>
      </div>
    );
  }

  if (block.type === "divider") {
    return <hr className="my-8 border-border" />;
  }

  return null;
}

/* ─── Main Article Page ─── */
export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-5xl font-black text-muted-foreground/30">404</p>
        <p className="mt-3 text-muted-foreground">Article not found.</p>
        <Link
          href="/blog"
          className="mt-6 flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <ReadingProgress />

      {/* ── Back button ── */}
      <Link
        href="/blog"
        className="group mb-5 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
        Back to Blog
      </Link>

      {/* ── Hero ── */}
      <div className="relative mb-6 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/40 p-4 sm:p-7 md:mb-10 md:p-10">
        {/* Decorative gradient blob */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-cyan-500/8 blur-3xl" />

        {/* Tags */}
        <div className="relative mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="relative text-xl font-extrabold leading-tight tracking-tight text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="relative mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="relative mt-4 flex flex-wrap items-center gap-2.5 border-t border-border pt-4 sm:mt-6 sm:gap-4 sm:pt-5">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[11px] font-bold text-primary sm:h-8 sm:w-8 sm:text-xs">
              A
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Ahmed</p>
              <p className="hidden text-[10px] text-muted-foreground sm:block">DevOps &amp; Cloud Engineer</p>
            </div>
          </div>

          <div className="h-4 w-px bg-border" />

          <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground sm:text-xs">
            <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>

          <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground sm:text-xs">
            <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="mx-auto max-w-3xl">
        {post.content.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      {/* ── Related Articles ── */}
      {otherPosts.length > 0 && (
        <div className="mt-10 border-t border-border pt-7 sm:mt-16 sm:pt-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            More Articles
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-xl border border-border bg-secondary/30 p-5 transition-all hover:border-primary/30 hover:bg-secondary/60"
              >
                <div className="mb-2 flex flex-wrap gap-1">
                  {p.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {p.title}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {p.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
