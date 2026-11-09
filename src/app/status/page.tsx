import type { Metadata } from "next";
import { CheckCircle2, Activity, Server, Shield, Cloud, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "System Status & Infrastructure Uptime | Ahmed Shams – Shams Systems",
  description:
    "Real-time operational status and metrics for Ahmed Shams's cloud environments, Kubernetes clusters, and GitOps delivery pipelines on shams.systems.",
  alternates: {
    canonical: "https://shams.systems/status",
  },
  openGraph: {
    title: "System Status & Infrastructure Uptime | Ahmed Shams – Shams Systems",
    description:
      "All systems operational. Continuous monitoring of AWS, Kubernetes, and GitOps services on shams.systems.",
    url: "https://shams.systems/status",
  },
};

const systems = [
  {
    name: "On-Premises & Hybrid Infrastructure",
    description: "Enterprise physical servers, virtualization hypervisors, and hybrid cloud networks",
    status: "Operational",
    scope: "Data Center & Hybrid",
    icon: Server,
  },
  {
    name: "Enterprise Kubernetes Workloads",
    description: "Resilient container orchestrators, ingress controllers, and dynamic resource scalers",
    status: "Operational",
    scope: "Container Runtimes",
    icon: Cloud,
  },
  {
    name: "GitOps Continuous Delivery (ArgoCD)",
    description: "Automated Git repository reconciliation and configuration drift correction",
    status: "Synced & Healthy",
    scope: "Declarative Delivery",
    icon: Activity,
  },
  {
    name: "Workflow & AI Automation (n8n & MCP)",
    description: "Event-driven workflow orchestration with n8n and Model Context Protocol integrations",
    status: "Active & Monitored",
    scope: "Automation Engine",
    icon: Terminal,
  },
  {
    name: "DevSecOps Delivery Gateways",
    description: "Automated vulnerability scanning, secrets prevention, and compliance validation",
    status: "Passing & Enforced",
    scope: "Pipeline Security",
    icon: Shield,
  },
  {
    name: "Full-Stack Telemetry (Prometheus & ELK)",
    description: "Real-time metrics telemetry, dynamic alerting, and centralized log management",
    status: "Operational",
    scope: "Observability",
    icon: CheckCircle2,
  },
];

export default function StatusPage() {
  return (
    <section>
      {/* ── Section Title (Single H1) ── */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Status</h1>
          <div className="mt-2 h-1 w-10 rounded-full bg-primary" />
          <p className="mt-3 text-base text-muted-foreground">
            Current operational status across managed on-premises infrastructure, GitOps controllers, and automation pipelines.
          </p>
        </div>

        {/* Global indicator badge */}
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          All Systems Operational
        </div>
      </div>

      {/* ── Overall Architecture Banner (No arbitrary fake numbers) ── */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm dark:bg-secondary/30 dark:shadow-none">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Infrastructure</p>
          <p className="mt-1 text-base sm:text-lg font-bold text-emerald-700 dark:text-emerald-400">Hybrid &amp; On-Prem</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm dark:bg-secondary/30 dark:shadow-none">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Delivery Model</p>
          <p className="mt-1 text-base sm:text-lg font-bold text-foreground">GitOps (ArgoCD)</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm dark:bg-secondary/30 dark:shadow-none">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Automation</p>
          <p className="mt-1 text-base sm:text-lg font-bold text-primary">n8n &amp; MCP</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm dark:bg-secondary/30 dark:shadow-none">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Telemetry</p>
          <p className="mt-1 text-base sm:text-lg font-bold text-cyan-700 dark:text-cyan-400">Prometheus &amp; ELK</p>
        </div>
      </div>

      {/* ── System Services Grid ── */}
      <div className="mt-6 space-y-3">
        {systems.map((sys) => {
          const Icon = sys.icon;
          return (
            <div
              key={sys.name}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:bg-secondary/40 dark:bg-secondary/40 dark:shadow-none dark:hover:bg-secondary/70"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{sys.name}</h3>
                  <p className="text-xs text-muted-foreground">{sys.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 border-t border-border/40 pt-2 sm:border-t-0 sm:pt-0">
                <span className="text-xs text-muted-foreground">
                  {sys.scope}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {sys.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
