import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { ReadingProgress, ArticleBody } from "@/components/blog/ArticleClient";

type Props = {
  params: Promise<{ slug: string }>;
};

/* ─── Static site generation for all known article slugs ─── */
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

/* ─── Dynamic metadata per article ─── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const siteUrl = "https://shams.systems";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Ahmed Shams – Shams Systems`,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      "Ahmed Shams",
      "Shams Systems",
      "احمد شمس",
      "أحمد شمس",
      "shams.systems",
      "DevOps",
      "Cloud Architecture",
      "GitOps",
      "DevSecOps",
      "Kubernetes",
      "Hamuchak",
    ],
    authors: [{ name: "Ahmed Shams", url: siteUrl }],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      url: postUrl,
      title: `${post.title} | Ahmed Shams – Shams Systems`,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Ahmed Shams"],
      tags: post.tags,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Ahmed Shams`,
      description: post.excerpt,
      images: ["/opengraph-image"],
    },
  };
}

/* ─── Server Component: Article Page ─── */
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // Schema.org TechArticle JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
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
      "@id": `https://shams.systems/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      {/* ── Structured Data: TechArticle ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <ReadingProgress />

      {/* ── Back button ── */}
      <Link
        href="/blog"
        className="group mb-5 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
        Back to Blog &amp; Docs
      </Link>

      {/* ── Hero ── */}
      <header className="relative mb-6 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/40 p-4 sm:p-7 md:mb-10 md:p-10">
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

        {/* Primary Page Title (Single H1) */}
        <h1 className="relative text-xl font-extrabold leading-tight tracking-tight text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="relative mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="relative mt-4 flex flex-wrap items-center gap-2.5 border-t border-border pt-4 sm:mt-6 sm:gap-4 sm:pt-5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[10px] font-black tracking-wider text-primary sm:h-8 sm:w-8 sm:text-xs">
              AS
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Ahmed Shams</p>
              <p className="hidden text-[10px] text-muted-foreground sm:block">
                DevOps &amp; Hybrid Infrastructure Engineer · Shams Systems
              </p>
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
      </header>

      {/* ── Article Content Body ── */}
      <article>
        <ArticleBody content={post.content} />
      </article>

      {/* ── Related Articles ── */}
      {otherPosts.length > 0 && (
        <aside className="mt-10 border-t border-border pt-7 sm:mt-16 sm:pt-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            More Technical Guides &amp; Docs
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:bg-secondary/50 dark:bg-secondary/30 dark:shadow-none dark:hover:bg-secondary/60"
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
                <h3 className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {p.readTime}
                </p>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </>
  );
}
