import type { Metadata } from "next";
import { PortfolioClient } from "@/components/portfolio/PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio & Engineering Projects | Ahmed Shams – Shams Systems",
  description:
    "Production-grade cloud architecture, Terraform modules, Kubernetes GitOps deployments, and DevSecOps pipelines built by Ahmed Shams (Shams Systems).",
  keywords: [
    "Ahmed Shams",
    "Ahmed Shams Portfolio",
    "Shams Systems",
    "shams.systems",
    "احمد شمس",
    "أحمد شمس",
    "DevOps Portfolio",
    "Cloud Architecture Projects",
    "Kubernetes Projects",
    "Terraform AWS Infrastructure",
    "GitOps ArgoCD Delivery",
    "DevSecOps Projects",
  ],
  alternates: {
    canonical: "https://shams.systems/portfolio",
  },
  openGraph: {
    title: "Portfolio & Engineering Projects | Ahmed Shams – Shams Systems",
    description:
      "Production-grade cloud infrastructure, GitOps systems, and DevOps automation projects by Ahmed Shams.",
    url: "https://shams.systems/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <section>
      {/* ── Section Title (Single H1) ── */}
      <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
      <div className="mt-2 h-1 w-10 rounded-full bg-primary" />
      <p className="mt-3 text-base text-muted-foreground">
        Featured production architectures, automated delivery platforms, and open-source cloud tooling.
      </p>

      {/* ── Interactive Tag Filtering & Cards ── */}
      <PortfolioClient />
    </section>
  );
}
