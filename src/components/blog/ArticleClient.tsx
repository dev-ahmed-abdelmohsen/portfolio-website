"use client";

import { useEffect, useState } from "react";
import {
  Copy,
  Check,
  Info,
  AlertTriangle,
  Lightbulb,
  AlertCircle,
} from "lucide-react";
import { ContentBlock } from "@/data/blog";
import { cn } from "@/lib/utils";

/* ─── Reading progress bar ─── */
export function ReadingProgress() {
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
export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      aria-label={copied ? "Copied code" : "Copy code"}
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
export function Block({ block }: { block: ContentBlock }) {
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
      <div className="mb-6 overflow-hidden rounded-xl border border-border/80 bg-[#0d1117] shadow-md dark:border-white/10 dark:shadow-xl">
        {/* Code block header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
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
      <blockquote className="relative mb-6 overflow-hidden rounded-xl border border-primary/30 bg-primary/5 p-5 pl-6 shadow-sm dark:shadow-none">
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
        bg: "bg-blue-500/10 dark:bg-blue-500/8",
        icon_color: "text-blue-600 dark:text-blue-400",
        label: "Note",
        label_color: "text-blue-600 dark:text-blue-400",
      },
      warning: {
        icon: AlertTriangle,
        border: "border-amber-500/30 dark:border-yellow-500/30",
        bg: "bg-amber-500/10 dark:bg-yellow-500/8",
        icon_color: "text-amber-600 dark:text-yellow-400",
        label: "Warning",
        label_color: "text-amber-600 dark:text-yellow-400",
      },
      tip: {
        icon: Lightbulb,
        border: "border-emerald-500/30",
        bg: "bg-emerald-500/10 dark:bg-emerald-500/8",
        icon_color: "text-emerald-600 dark:text-emerald-400",
        label: "Tip",
        label_color: "text-emerald-600 dark:text-emerald-400",
      },
      danger: {
        icon: AlertCircle,
        border: "border-red-500/30",
        bg: "bg-red-500/10 dark:bg-red-500/8",
        icon_color: "text-red-600 dark:text-red-400",
        label: "Danger",
        label_color: "text-red-600 dark:text-red-400",
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

export function ArticleBody({ content }: { content: ContentBlock[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      {content.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
