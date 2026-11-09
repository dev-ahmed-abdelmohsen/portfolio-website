import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { BlogListClient } from "@/components/blog/BlogListClient";

export const metadata: Metadata = {
  title: "Technical Blog & Engineering Docs | Ahmed Shams – Shams Systems",
  description:
    "Production architecture notes, hands-on tutorials, and engineering documentation on Kubernetes, GitOps, DevSecOps, MLOps, AWS, and CI/CD automation by Ahmed Shams (Shams Systems).",
  keywords: [
    "Ahmed Shams",
    "Ahmed Shams Blog",
    "Shams Systems",
    "shams.systems",
    "احمد شمس",
    "أحمد شمس",
    "DevOps Blog",
    "Kubernetes Tutorials",
    "GitOps ArgoCD Docs",
    "DevSecOps Guide",
    "MLOps Architecture",
    "AWS Terraform Infrastructure",
  ],
  alternates: {
    canonical: "https://shams.systems/blog",
  },
  openGraph: {
    title: "Technical Blog & Engineering Docs | Ahmed Shams – Shams Systems",
    description:
      "Deep-dive technical guides on Kubernetes, GitOps, DevSecOps, MLOps, and Cloud Infrastructure by Ahmed Shams.",
    url: "https://shams.systems/blog",
  },
};

export default function BlogPage() {
  return (
    <section>
      {/* ── Section Title (Single H1) ── */}
      <h1 className="text-3xl font-bold tracking-tight">Blog &amp; Docs</h1>
      <div className="mt-2 h-1 w-10 rounded-full bg-primary" />
      <p className="mt-3 text-base text-muted-foreground">
        Deep-dive technical guides and architectural documentation across DevOps, GitOps, DevSecOps, and MLOps.
      </p>

      {/* ── Interactive Category Filter & Post Cards ── */}
      <BlogListClient posts={blogPosts} />
    </section>
  );
}
