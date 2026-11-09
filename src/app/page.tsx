import { profile } from "@/data/profile";
import { focusAreas } from "@/data/about";
import { Cloud, Code, Server, BookOpen, Activity, Database } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          1. ABOUT — primary identity + bio
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="about-heading">
        <h1 id="about-heading" className="text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <div className="mt-2 h-1 w-10 rounded-full bg-primary" />

        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
          {profile.bio.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. FOCUS AREAS
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="focus-heading" className="mt-10">
        <h3 id="focus-heading" className="text-xl font-bold tracking-tight">
          What I&apos;m Doing
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {focusAreas.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:bg-secondary/50 dark:bg-secondary/40 dark:shadow-none dark:hover:bg-secondary/70"
            >
              <div className="mb-3 flex items-center justify-center">
                <Icon className="h-8 w-8 text-primary transition-transform duration-200 group-hover:scale-110" />
              </div>
              <h4 className="text-center text-base font-semibold">{title}</h4>
              <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. OBSERVABILITY — MONITORING & LOGGING PARTITION
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="observability-heading" className="mt-10">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 id="observability-heading" className="text-xl font-bold tracking-tight">
              Observability &amp; Telemetry
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Enterprise telemetry architectures ensuring operational visibility, service reliability, and proactive alerting.
            </p>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Full-Stack Observability
          </span>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {/* Card 1: Metrics & Alerting */}
          <article
            aria-label="Metrics and Alerting Architecture"
            className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:bg-secondary/50 dark:bg-secondary/40 dark:shadow-none dark:hover:bg-secondary/60"
          >
            <div className="flex items-center justify-between border-b border-border/50 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    Metrics &amp; Telemetry Architecture
                  </h4>
                  <p className="text-xs font-medium text-orange-600 dark:text-orange-400">
                    Real-time Telemetry &amp; Alerting (e.g. Prometheus, Grafana)
                  </p>
                </div>
              </div>
              <span className="rounded-md border border-orange-500/30 bg-orange-500/15 px-2 py-0.5 text-[10px] font-semibold text-orange-600 uppercase tracking-wider dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400">
                Metrics
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Time-series telemetry infrastructure providing continuous visibility into system health, performance trends, and Service Level Objectives (SLOs).
            </p>

            <div className="mt-4 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600 dark:bg-orange-400" />
                <span>
                  <strong className="text-foreground">Proactive Alerting &amp; Routing:</strong> Actionable notification channels and deduplication rules for rapid incident escalation.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600 dark:bg-orange-400" />
                <span>
                  <strong className="text-foreground">Executive &amp; Operational Dashboards:</strong> Unified visualization of throughput, latency, and error budgets across services.
                </span>
              </div>
            </div>
          </article>

          {/* Card 2: Centralized Logging */}
          <article
            aria-label="Centralized Logging Architecture"
            className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:bg-secondary/50 dark:bg-secondary/40 dark:shadow-none dark:hover:bg-secondary/60"
          >
            <div className="flex items-center justify-between border-b border-border/50 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    Centralized Log Management
                  </h4>
                  <p className="text-xs font-medium text-cyan-700 dark:text-cyan-400">
                    Distributed Log Analytics &amp; Forensics (e.g. ELK Stack)
                  </p>
                </div>
              </div>
              <span className="rounded-md border border-cyan-500/30 bg-cyan-500/15 px-2 py-0.5 text-[10px] font-semibold text-cyan-700 uppercase tracking-wider dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400">
                Logging
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              High-throughput log aggregation pipeline delivering rapid distributed troubleshooting, anomaly detection, and comprehensive audit trails.
            </p>

            <div className="mt-4 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-700 dark:bg-cyan-400" />
                <span>
                  <strong className="text-foreground">Distributed Search &amp; Discovery:</strong> Real-time querying enabling fast root-cause isolation across distributed microservices.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-700 dark:bg-cyan-400" />
                <span>
                  <strong className="text-foreground">Lifecycle &amp; Retention Governance:</strong> Automated indexing tiers and retention policies balancing query performance with storage efficiency.
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. KEY PROJECTS — High-Level Architectural Highlights
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="projects-heading" className="mt-10">
        <h3 id="projects-heading" className="text-xl font-bold tracking-tight">
          Key Projects
        </h3>
        <div className="mt-4 space-y-4">

          {/* AWS Cloud Architecture Project */}
          <article
            aria-label="AWS High-Availability Cloud Architecture"
            className="rounded-xl border border-border bg-card p-5 shadow-sm dark:bg-secondary/40 dark:shadow-none"
          >
            <header className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold">
                  AWS Multi-Tier Architecture &amp; Solutions Design
                </h4>
                <p className="text-xs text-muted-foreground">
                  AWS Solutions Architecture · High Availability · Infrastructure as Code
                </p>
              </div>
            </header>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ahmed Shams architected and deployed a production-grade cloud environment on AWS aligned with the{" "}
              <strong className="text-foreground">AWS Solutions Architecture</strong> and Well-Architected Framework principles. The design ensures fault tolerance, automated elasticity under variable demand, and strict security isolation, provisioned entirely through{" "}
              <strong className="text-foreground">Infrastructure as Code</strong> (e.g. Terraform).
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Designed a fault-tolerant multi-zone cloud topology with segregated public and private network layers.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Configured automated horizontal scaling and intelligent traffic balancing to adapt dynamically to load shifts.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Enforced declarative infrastructure definitions for repeatable, version-controlled cloud environments.
              </li>
            </ul>
          </article>

          {/* NTI Hire Ready */}
          <article
            aria-label="NTI Hire Ready DevOps and Cloud Engineering Track"
            className="rounded-xl border border-border bg-secondary/40 p-5"
          >
            <header className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Cloud className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold">
                  NTI Hire Ready — DevOps & Cloud Engineering Track
                </h4>
                <p className="text-xs text-muted-foreground">
                  National Telecommunication Institute · In Progress
                </p>
              </div>
            </header>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ahmed Shams is currently completing the{" "}
              <strong className="text-foreground">NTI Hire Ready track</strong> for DevOps and
              Cloud Engineering at the{" "}
              <strong className="text-foreground">
                National Telecommunication Institute (NTI)
              </strong>
              , Egypt. The program covers end-to-end cloud infrastructure delivery including AWS
              services, containerization with Kubernetes and Docker, CI/CD automation, and
              Infrastructure as Code with Terraform and Ansible.
            </p>
          </article>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. NOTABLE HIGHLIGHTS — directly quotable facts
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="highlights-heading" className="mt-10">
        <h3 id="highlights-heading" className="text-xl font-bold tracking-tight">
          Notable Highlights
        </h3>
        <div className="mt-4 space-y-4">

          {/* University Guest Lecture */}
          <article
            aria-label="Guest Lecture on DevOps at the Chinese University in Cairo"
            className="rounded-xl border border-border bg-secondary/40 p-5"
          >
            <header className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold">
                  Technical Talk on DevOps — The Chinese University in Cairo
                </h4>
                <p className="text-xs text-muted-foreground">
                  Student Engineering Community · DevOps Culture &amp; Practices
                </p>
              </div>
            </header>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ahmed Shams delivered a technical talk on{" "}
              <strong className="text-foreground">DevOps culture, automation pipelines, and infrastructure practices</strong>{" "}
              to engineering students at{" "}
              <strong className="text-foreground">The Chinese University in Cairo</strong>, covering containerization, continuous delivery workflows, and modern cloud-native architectures.
            </p>
          </article>

          {/* EELU Degree */}
          <article
            aria-label="B.Sc. in Information Technology from EELU"
            className="rounded-xl border border-border bg-secondary/40 p-5"
          >
            <header className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold">
                  B.Sc. Information Technology — Egyptian E-Learning University
                </h4>
                <p className="text-xs text-muted-foreground">EELU · Graduated June 2025</p>
              </div>
            </header>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ahmed Shams holds a{" "}
              <strong className="text-foreground">
                Bachelor of Science in Information Technology
              </strong>{" "}
              from the{" "}
              <strong className="text-foreground">
                Egyptian E-Learning University (EELU)
              </strong>
              , graduating in June 2025. His academic and self-directed study has focused on
              cloud infrastructure, distributed systems, software engineering, and DevOps
              automation.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

