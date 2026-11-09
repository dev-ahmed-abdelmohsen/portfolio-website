import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { learningTracks } from "@/data/learning";

type Props = {
  params: Promise<{ slug: string }>;
};

/* ─── Static site generation for all learning track slugs ─── */
export async function generateStaticParams() {
  return learningTracks.map((track) => ({
    slug: track.slug,
  }));
}

/* ─── Dynamic metadata per study plan ─── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const track = learningTracks.find((t) => t.slug === slug);

  if (!track) {
    return {
      title: "Study Plan Not Found",
    };
  }

  const siteUrl = "https://shams.systems";
  const trackUrl = `${siteUrl}/learning/${track.slug}`;

  return {
    title: `${track.title} | Ahmed Shams – Shams Systems`,
    description: track.summary,
    keywords: [
      track.title,
      track.targetCredential,
      track.category,
      "Ahmed Shams",
      "Shams Systems",
      "shams.systems",
      "احمد شمس",
      "أحمد شمس",
      "DevOps Learning Path",
      "CKA Study Plan",
      "ArgoCD Study Plan",
      "GitOps Roadmap",
      "Kubernetes Roadmap",
    ],
    authors: [{ name: "Ahmed Shams", url: siteUrl }],
    alternates: {
      canonical: trackUrl,
    },
    openGraph: {
      type: "article",
      url: trackUrl,
      title: `${track.title} | Ahmed Shams – Shams Systems`,
      description: track.summary,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: track.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${track.title} | Ahmed Shams`,
      description: track.summary,
      images: ["/opengraph-image"],
    },
  };
}

/* ─── Server Component: Clean, Authoritative Technical Curriculum ─── */
export default async function LearningPlanDetailPage({ params }: Props) {
  const { slug } = await params;
  const track = learningTracks.find((t) => t.slug === slug);

  if (!track) {
    notFound();
  }

  const otherTracks = learningTracks.filter((t) => t.slug !== slug);

  // Schema.org Course JSON-LD for rich snippets & GEO
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: track.title,
    description: track.summary,
    educationalCredentialAwarded: track.targetCredential,
    provider: {
      "@type": "Person",
      name: "Ahmed Shams",
      url: "https://shams.systems",
    },
    publisher: {
      "@type": "Organization",
      name: "Shams Systems",
      url: "https://shams.systems",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Self-paced hands-on labs",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://shams.systems/learning/${track.slug}`,
    },
  };

  return (
    <>
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* ── Minimalist Back Navigation ── */}
      <Link
        href="/learning"
        className="group mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
        Back to Learning Paths
      </Link>

      {/* ── Header: Clean & Typographical (No Giant Box) ── */}
      <header className="border-b border-border/70 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            {track.category}
          </span>
          <span className="text-xs text-muted-foreground font-medium">·</span>
          <span className="text-xs text-muted-foreground font-medium">
            {track.curriculumVersion}
          </span>
        </div>

        {/* Title (Single H1) */}
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {track.title}
        </h1>

        {/* Target Credential / Scope */}
        <p className="mt-1.5 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary">
          <Award className="h-4 w-4 shrink-0" />
          <span>Scope: {track.targetCredential}</span>
        </p>

        {/* Executive Summary */}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-3xl">
          {track.summary}
        </p>

        {/* Metadata Links */}
        <div className="mt-4 flex flex-wrap items-center gap-3 pt-3 text-xs">
          {track.officialReference && (
            <a
              href={track.officialReference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-muted-foreground transition-colors hover:text-foreground underline underline-offset-4"
            >
              <span>{track.officialReference.name}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {track.relatedBlogSlug && (
            <>
              <span className="text-muted-foreground/40">·</span>
              <Link
                href={`/blog/${track.relatedBlogSlug}`}
                className="inline-flex items-center gap-1 font-semibold text-primary transition-colors hover:underline"
              >
                <BookOpen className="h-3 w-3" />
                <span>Related In-Depth Technical Guide</span>
              </Link>
            </>
          )}
        </div>
      </header>

      {/* ── Unified Syllabus & Production Labs (Clean Flow, Zero Card Fatigue) ── */}
      <div className="mt-6 divide-y divide-border/60">
        {track.modules.map((mod) => (
          <article
            key={mod.id}
            id={mod.id}
            className="py-6 first:pt-0 last:pb-0"
          >
            {/* Domain Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div className="flex items-baseline gap-2.5">
                <span className="font-mono text-xs font-bold text-primary">
                  {mod.stepNumber}
                </span>
                <h2 className="text-base sm:text-lg font-bold text-foreground">
                  {mod.title}
                </h2>
              </div>
              <span className="text-xs font-medium text-muted-foreground shrink-0 sm:text-right">
                {mod.focusArea}
              </span>
            </div>

            {/* Brief Context */}
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {mod.summary}
            </p>

            {/* Core Objectives */}
            <ul className="mt-3.5 space-y-1.5 pl-1">
              {mod.objectives.map((obj, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90 leading-relaxed"
                >
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>

            {/* Minimalist Lab Note (Admonition style — clean, no giant box) */}
            <div className="mt-3.5 rounded-lg border-l-2 border-primary bg-secondary/30 px-3.5 py-2.5 text-xs sm:text-sm text-foreground/90">
              <span className="font-semibold text-primary">Hands-On Lab: </span>
              <span>{mod.labScenario}</span>
            </div>

            {/* Essential Tools / Commands */}
            {mod.keyCommandsOrTools && mod.keyCommandsOrTools.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Tooling:
                </span>
                {mod.keyCommandsOrTools.map((cmd) => (
                  <code
                    key={cmd}
                    className="rounded bg-secondary/80 px-2 py-0.5 font-mono text-[11px] text-foreground border border-border/50"
                  >
                    {cmd}
                  </code>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      {/* ── Bottom Section: Core Competencies Summary ── */}
      <footer className="mt-10 border-t border-border pt-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Core Production Competencies
        </h3>
        <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2 text-xs sm:text-sm text-foreground/90">
          {track.coreCompetencies.map((comp, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{comp}</span>
            </li>
          ))}
        </ul>

        {/* Quick Link to Other Learning Track */}
        {otherTracks.length > 0 && (
          <div className="mt-8 rounded-xl border border-border/80 bg-secondary/30 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Next Learning Track
              </p>
              <h4 className="mt-0.5 text-sm font-bold text-foreground">
                {otherTracks[0].title}
              </h4>
            </div>
            <Link
              href={`/learning/${otherTracks[0].slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:underline shrink-0"
            >
              <span>Open Study Plan</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </footer>
    </>
  );
}
