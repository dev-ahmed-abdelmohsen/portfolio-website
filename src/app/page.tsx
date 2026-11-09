import Link from "next/link";
import { profile } from "@/data/profile";
import {
  engineeringPillars,
  featuredProductionWork,
  credentialsAndCommunity,
} from "@/data/about";
import {
  ArrowUpRight,
  GraduationCap,
  Layers,
  Terminal,
  ShieldCheck,
  Cpu,
  Workflow,
  GitBranch,
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
            Available for Strategic Roles &amp; Consultations
          </span>
        </div>

        {/* Executive Bio */}
        <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
          {profile.bio.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Quick Scope Strip */}
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 text-xs">
          <div className="rounded-xl border border-border/70 bg-secondary/30 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Delivery Scope</p>
            <p className="mt-1 font-semibold text-foreground">Full DevOps Lifecycle</p>
            <p className="text-[11px] text-muted-foreground">Plan → Deploy → Operate</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-secondary/30 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Security Focus</p>
            <p className="mt-1 font-semibold text-foreground">DevSecOps &amp; Compliance</p>
            <p className="text-[11px] text-muted-foreground">SAST · DAST · Vault</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-secondary/30 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Automation Focus</p>
            <p className="mt-1 font-semibold text-foreground">Event-Driven &amp; AI</p>
            <p className="text-[11px] text-muted-foreground">n8n · Model Context Protocol</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-secondary/30 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Environments</p>
            <p className="mt-1 font-semibold text-foreground">Startups &amp; Enterprise</p>
            <p className="text-[11px] text-muted-foreground">Cloud &amp; On-Premises</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. CORE ENGINEERING PILLARS
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="pillars-heading">
        <div className="border-b border-border/60 pb-3">
          <h2 id="pillars-heading" className="text-xl font-bold tracking-tight text-foreground">
            Core Technical Disciplines
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Specialized engineering capabilities across the entire development lifecycle, security automation, and operational infrastructure.
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
          3. LIFECYCLE EXECUTION (Plan -> Secure -> Operate)
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="lifecycle-heading">
        <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-card to-secondary/30 p-5 sm:p-6 shadow-sm dark:bg-secondary/20">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Execution Standard</span>
              <h3 id="lifecycle-heading" className="text-base sm:text-lg font-bold text-foreground">
                End-to-End DevOps Lifecycle Execution
              </h3>
            </div>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              Startups &amp; Enterprise Platforms
            </span>
          </div>

          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Whether architecting scalable platforms for international startups or hardening physical infrastructure in enterprise settings, I maintain rigorous standards across all phases of delivery:
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5 dark:bg-card/40">
              <p className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <GitBranch className="h-4 w-4 text-primary" />
                <span>1. Plan &amp; Provision</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Infrastructure as Code via Terraform and Ansible. Designing multi-region cloud topologies and on-premises virtualization.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5 dark:bg-card/40">
              <p className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>2. Secure &amp; Deliver</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Shift-left DevSecOps with automated SAST and DAST gates, HashiCorp Vault secrets injection, and declarative GitOps pipelines with ArgoCD.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/60 p-3.5 dark:bg-card/40">
              <p className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Workflow className="h-4 w-4 text-primary" />
                <span>3. Automate &amp; Operate</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Multi-cluster Kubernetes operations, full-stack observability (Prometheus/ELK), and event-driven automation with n8n and MCP.
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
              Featured Case Studies
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Specialized production delivery platforms, security gateways, and automated architectures.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            <span>View All Projects</span>
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
            Academic degree, specialized industry tracks, and engineering community contributions.
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

        {/* Link to Shams Systems Sandbox */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <p className="font-bold text-foreground">
                Shams Systems Sandbox <span className="font-mono text-primary font-normal">· sandbox.shams.systems</span>
              </p>
              <p className="text-muted-foreground">
                Dedicated technical playground: production study blueprints, interactive lab scenarios, and experimental architectures.
              </p>
            </div>
          </div>
          <a
            href="https://sandbox.shams.systems"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline shrink-0"
          >
            <span>Launch Sandbox</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
