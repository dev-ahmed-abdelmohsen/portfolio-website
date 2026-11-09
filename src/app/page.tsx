import Link from "next/link";
import { profile } from "@/data/profile";
import {
  engineeringPillars,
  featuredProductionWork,
  credentialsAndCommunity,
} from "@/data/about";
import {
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Layers,
  Terminal,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* ═══════════════════════════════════════════════
          1. ABOUT — Primary Identity & Executive Bio
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="about-heading">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 id="about-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
              About Me
            </h1>
            <div className="mt-2 h-1 w-10 rounded-full bg-primary" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for Strategic Roles
          </span>
        </div>

        {/* Executive Bio */}
        <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
          {profile.bio.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Quick Facts Strip (Zero arbitrary percentages) */}
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 text-xs">
          <div className="rounded-xl border border-border/70 bg-secondary/30 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Active Role</p>
            <p className="mt-1 font-semibold text-foreground">Fixed Misr (FEDIS)</p>
            <p className="text-[11px] text-muted-foreground">DevOps Engineer</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-secondary/30 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Specialization</p>
            <p className="mt-1 font-semibold text-foreground">On-Premises &amp; Hybrid</p>
            <p className="text-[11px] text-muted-foreground">Private Cloud &amp; Infra</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-secondary/30 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Delivery Model</p>
            <p className="mt-1 font-semibold text-foreground">Declarative GitOps</p>
            <p className="text-[11px] text-muted-foreground">ArgoCD &amp; Kubernetes</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-secondary/30 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Next-Gen Tooling</p>
            <p className="mt-1 font-semibold text-foreground">n8n &amp; MCP</p>
            <p className="text-[11px] text-muted-foreground">Workflow &amp; AI Agents</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. CORE ENGINEERING PILLARS
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="pillars-heading">
        <div className="border-b border-border/60 pb-3">
          <h2 id="pillars-heading" className="text-xl font-bold tracking-tight text-foreground">
            Core Engineering Pillars
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Architectural competencies focused on high availability, operational consistency, and elimination of manual toil.
          </p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {engineeringPillars.map(({ icon: Icon, title, subtitle, description, tags }) => (
            <article
              key={title}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:border-primary/50 hover:bg-secondary/40 dark:bg-secondary/25 dark:shadow-none dark:hover:bg-secondary/40"
            >
              <div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground">{subtitle}</p>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/60 bg-secondary/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. CURRENT PRODUCTION ENVIRONMENT
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="environment-heading">
        <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-card to-secondary/30 p-5 sm:p-6 shadow-sm dark:bg-secondary/20">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Active Production Role</span>
                <h3 id="environment-heading" className="text-base sm:text-lg font-bold text-foreground">
                  DevOps Engineer @ Fixed Misr (FEDIS)
                </h3>
              </div>
            </div>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              2025 – Present · Production Standard
            </span>
          </div>

          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Leading on-premises infrastructure stability, private virtualization clusters, and enterprise release automation. Spearheading the adoption of GitOps pipelines and automated operational workflows across production workloads.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5 dark:bg-card/40">
              <p className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Terminal className="h-4 w-4 text-primary" />
                <span>Systems Engineering</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Enterprise Linux configurations, bare-metal hypervisors, network segmentations, and high-availability clustered services.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5 dark:bg-card/40">
              <p className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Layers className="h-4 w-4 text-primary" />
                <span>Container Platforms</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Multi-node Kubernetes cluster management, containerization standards with Docker, and declarative ArgoCD synchronization.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5 dark:bg-card/40">
              <p className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Automation &amp; Security</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Event-driven n8n workflows, Model Context Protocol (MCP) tool bridges, and centralized secrets governance via HashiCorp Vault.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. FEATURED PRODUCTION CASE STUDIES
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="featured-work-heading">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
          <div>
            <h2 id="featured-work-heading" className="text-xl font-bold tracking-tight text-foreground">
              Featured Architectural Blueprints
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Selected production delivery platforms, open-source cloud tooling, and automation architectures.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            <span>Explore All 9 Projects</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {featuredProductionWork.map((project) => (
            <article
              key={project.slug}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:border-primary/50 hover:bg-secondary/40 hover:shadow-md dark:bg-secondary/25 dark:shadow-none dark:hover:bg-secondary/40 overflow-hidden"
            >
              {/* Top-Right Arrow */}
              <Link
                href={`/portfolio/${project.slug}`}
                aria-label={`Open blueprint for ${project.title}`}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-border/70 bg-secondary/50 text-muted-foreground transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground hover:scale-105"
              >
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <div className="pr-8">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="mt-1 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/portfolio/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 border-t border-border/50 pt-3">
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-secondary/80 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. CREDENTIALS & COMMUNITY
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="credentials-heading">
        <div className="border-b border-border/60 pb-3">
          <h2 id="credentials-heading" className="text-xl font-bold tracking-tight text-foreground">
            Credentials &amp; Community
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Academic foundation, specialized industry tracks, and knowledge sharing.
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {credentialsAndCommunity.map((item) => (
            <article
              key={item.title}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 shadow-sm dark:bg-secondary/25 dark:shadow-none"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    {item.type}
                  </span>
                  <span className="text-xs text-muted-foreground/50">·</span>
                  <span className="text-xs font-semibold text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="mt-1 text-sm sm:text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-primary">
                  {item.issuer}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Link to Learning Paths and Resume */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <div>
              <p className="font-bold text-foreground">Explore Hands-On Study Blueprints</p>
              <p className="text-muted-foreground">Syllabus &amp; production labs for CKA, ArgoCD GitOps, and HashiCorp Vault.</p>
            </div>
          </div>
          <Link
            href="/learning"
            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline shrink-0"
          >
            <span>View Learning Path</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
