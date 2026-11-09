import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  BookOpen,
  ShieldCheck,
  Server,
  Mail,
} from "lucide-react";
import { projects } from "@/data/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

/* ─── Static site generation for all portfolio topic slugs ─── */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/* ─── Dynamic metadata per project ─── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = "https://shams.systems";
  const projectUrl = `${siteUrl}/portfolio/${project.slug}`;

  return {
    title: `${project.title} | Ahmed Shams – Shams Systems`,
    description: project.description,
    keywords: [
      ...project.tags,
      "Ahmed Shams",
      "Shams Systems",
      "shams.systems",
      "احمد شمس",
      "أحمد شمس",
      "DevOps Engineer",
      "Fixed Misr",
      "Hybrid Infrastructure",
      "Kubernetes",
      "Terraform",
    ],
    authors: [{ name: "Ahmed Shams", url: siteUrl }],
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      type: "article",
      url: projectUrl,
      title: `${project.title} | Ahmed Shams – Shams Systems`,
      description: project.description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ahmed Shams`,
      description: project.description,
      images: ["/opengraph-image"],
    },
  };
}

/* ─── Server Component: Project Detail Page ─── */
export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  // Schema.org TechArticle JSON-LD structured data
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Ahmed Shams",
      url: "https://shams.systems",
    },
    publisher: {
      "@type": "Organization",
      name: "Shams Systems",
      url: "https://shams.systems",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://shams.systems/portfolio/${project.slug}`,
    },
    keywords: project.tags.join(", "),
  };

  return (
    <>
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      {/* ── Back button ── */}
      <Link
        href="/portfolio"
        className="group mb-5 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
        Back to Portfolio
      </Link>

      {/* ── Hero Banner ── */}
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-secondary/40 p-5 sm:p-8 md:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-cyan-500/8 blur-3xl" />

        {/* Top Badges */}
        <div className="relative mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
            {project.deploymentModel}
          </span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title (Single H1) */}
        <h1 className="relative text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
          {project.title}
        </h1>

        {/* Subtitle */}
        <p className="relative mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.subtitle}
        </p>

        {/* Author / Engineering Context */}
        <div className="relative mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-black tracking-wider text-primary">
              AS
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Ahmed Shams</p>
              <p className="text-[11px] text-muted-foreground">
                DevOps &amp; Hybrid Infrastructure Engineer · Shams Systems
              </p>
            </div>
          </div>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center gap-2">
            {project.relatedBlogSlug && (
              <Link
                href={`/blog/${project.relatedBlogSlug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Technical Guide</span>
              </Link>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ── Main Detail Sections ── */}
      <div className="space-y-6">
        {/* Architecture & Blueprint Overview */}
        <section className="rounded-xl border border-border bg-card p-5 sm:p-7 shadow-sm dark:bg-secondary/30">
          <div className="flex items-center gap-2.5 text-primary">
            <Layers className="h-5 w-5" />
            <h2 className="text-lg font-bold text-foreground">System Overview &amp; Architecture Blueprint</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.overview}
          </p>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">
            Architecture Highlights &amp; Topology Decisions
          </h3>
          <ul className="mt-3 space-y-2.5">
            {project.architectureHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Engineering Capabilities & Operational Reliability */}
        <section className="rounded-xl border border-border bg-card p-5 sm:p-7 shadow-sm dark:bg-secondary/30">
          <div className="flex items-center gap-2.5 text-primary">
            <ShieldCheck className="h-5 w-5" />
            <h2 className="text-lg font-bold text-foreground">Operational Capabilities &amp; Standards</h2>
          </div>
          <ul className="mt-4 space-y-2.5">
            {project.keyCapabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technology Stack & Tooling */}
        <section className="rounded-xl border border-border bg-card p-5 sm:p-7 shadow-sm dark:bg-secondary/30">
          <div className="flex items-center gap-2.5 text-primary">
            <Cpu className="h-5 w-5" />
            <h2 className="text-lg font-bold text-foreground">Production Technology Stack</h2>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border/80 bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground dark:bg-secondary/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Connect & Consult CTA */}
        <section className="rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 via-card to-card p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground">
                Discuss Architecture or Implementation Details
              </h3>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Have questions about this production setup or want to collaborate on hybrid infrastructure?
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-transform hover:opacity-95 active:scale-95 shrink-0"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contact Ahmed Shams</span>
            </Link>
          </div>
        </section>
      </div>

      {/* ── Other Portfolio Projects ── */}
      {otherProjects.length > 0 && (
        <aside className="mt-12 border-t border-border pt-8 sm:mt-16 sm:pt-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Explore More Production Work
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50 hover:bg-secondary/40 hover:shadow-md dark:bg-secondary/30 dark:shadow-none dark:hover:bg-secondary/60"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-secondary/50 text-muted-foreground transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                    {p.subtitle}
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </>
  );
}
