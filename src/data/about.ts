import { Server, Container, ShieldCheck, Workflow } from "lucide-react";

export const focusAreas = [
  {
    icon: Server,
    title: "On-Premises & Hybrid Infrastructure",
    description:
      "Architecting reliable on-premises data centers, virtualization platforms, and hybrid cloud topologies with automated infrastructure provisioning.",
  },
  {
    icon: Container,
    title: "Continuous Delivery & GitOps",
    description:
      "Accelerating release velocity and operational consistency through declarative GitOps synchronization and automated CI/CD pipelines (e.g. ArgoCD).",
  },
  {
    icon: Workflow,
    title: "Workflow & AI Automation (n8n & MCP)",
    description:
      "Orchestrating event-driven workflows with n8n and building Model Context Protocol (MCP) tool integrations to automate engineering tasks.",
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps & Full-Stack Observability",
    description:
      "Embedding shift-left security verification and comprehensive telemetry (metrics & logs) to maintain operational health and compliance.",
  },
] as const;
