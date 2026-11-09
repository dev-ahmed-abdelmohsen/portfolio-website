import type { Metadata } from "next";
import { LearningPathClient } from "@/components/learning/LearningPathClient";
import { learningTracks } from "@/data/learning";

export const metadata: Metadata = {
  title: "DevOps Learning Path & Study Plans | Ahmed Shams – Shams Systems",
  description:
    "Structured production study plans, certification milestones, and hands-on lab roadmaps for CKA (Certified Kubernetes Administrator) and ArgoCD GitOps by Ahmed Shams (Shams Systems).",
  keywords: [
    "Ahmed Shams",
    "Shams Systems",
    "shams.systems",
    "احمد شمس",
    "أحمد شمس",
    "DevOps Learning Path",
    "CKA Study Plan",
    "Certified Kubernetes Administrator",
    "ArgoCD Study Plan",
    "GitOps Study Plan",
    "Kubernetes Roadmap",
    "CNCF Certifications",
    "DevOps Roadmap",
    "Hybrid Infrastructure",
  ],
  alternates: {
    canonical: "https://shams.systems/learning",
  },
  openGraph: {
    title: "DevOps Learning Path & Study Plans | Ahmed Shams – Shams Systems",
    description:
      "Structured production study plans and hands-on roadmaps for CKA (Certified Kubernetes Administrator) and ArgoCD GitOps by Ahmed Shams.",
    url: "https://shams.systems/learning",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ahmed Shams - DevOps Learning Path",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Learning Path & Study Plans | Ahmed Shams",
    description:
      "Structured production study plans for CKA and ArgoCD GitOps by Ahmed Shams (Shams Systems).",
    images: ["/opengraph-image"],
  },
};

export default function LearningPage() {
  // Schema.org ItemList with Course entities for GEO (Generative Engine Optimization)
  const learningSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DevOps & Cloud Engineering Study Plans by Ahmed Shams",
    description:
      "Structured professional study plans, certification syllabus breakdowns, and lab roadmaps for CKA and ArgoCD GitOps.",
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
    itemListElement: learningTracks.map((track, idx) => ({
      "@type": "Course",
      position: idx + 1,
      name: track.title,
      description: track.summary,
      provider: {
        "@type": "Person",
        name: "Ahmed Shams",
        url: "https://shams.systems",
      },
      educationalCredentialAwarded: track.targetCredential,
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Self-paced hands-on labs",
      },
    })),
  };

  return (
    <section>
      {/* ── JSON-LD Structured Data for SEO / GEO ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(learningSchema) }}
      />

      {/* ── Section Title (Single H1) ── */}
      <h1 className="text-3xl font-bold tracking-tight">Learning Path</h1>
      <div className="mt-2 h-1 w-10 rounded-full bg-primary" />
      <p className="mt-3 text-base text-muted-foreground">
        Structured production study plans, certification milestones, and hands-on laboratory roadmaps.
      </p>

      {/* ── Interactive Learning Client ── */}
      <LearningPathClient />
    </section>
  );
}
