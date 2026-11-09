import { GitBranch, ShieldCheck, Workflow, Server } from "lucide-react";

export const engineeringPillars = [
  {
    icon: GitBranch,
    title: "Full DevOps Lifecycle (Plan → Operate)",
    subtitle: "Architecture, CI/CD & Production Kubernetes",
    description:
      "Engineering end-to-end delivery pipelines from system architecture and environment planning to automated multi-stage CI/CD, container orchestration, and high-availability operations.",
    tags: ["DevOps Lifecycle", "CI/CD", "Kubernetes", "GitOps", "ArgoCD", "Linux"],
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps & Shift-Left Security",
    subtitle: "Automated SAST, DAST & Secrets Governance",
    description:
      "Embedding automated security verification directly into pipelines. Enforcing Static & Dynamic Application Security Testing (SAST/DAST), container image scanning, and zero-trust secrets injection with HashiCorp Vault.",
    tags: ["SAST", "DAST", "DevSecOps", "HashiCorp Vault", "Grype", "Compliance"],
  },
  {
    icon: Workflow,
    title: "Advanced Workflow & AI Automation",
    subtitle: "Event-Driven n8n & Model Context Protocol (MCP)",
    description:
      "Designing complex event-driven operational workflows with n8n and building Model Context Protocol (MCP) server tooling to bridge AI agents with infrastructure APIs, eliminating operational toil.",
    tags: ["n8n", "MCP", "AI Tooling", "Webhooks", "API Orchestration"],
  },
  {
    icon: Server,
    title: "Cloud & Hybrid Infrastructure",
    subtitle: "AWS Platforms & On-Premises Engineering",
    description:
      "Provisioning resilient infrastructure via Terraform and Ansible across AWS cloud environments and enterprise on-premises platforms (Fixed Misr), ensuring high availability and fault isolation.",
    tags: ["AWS", "On-Premises", "Terraform", "Ansible", "High Availability"],
  },
] as const;

export const featuredProductionWork = [
  {
    slug: "declarative-gitops-delivery-platform",
    title: "Declarative GitOps Delivery Platform",
    category: "GitOps & CD",
    description:
      "Production-grade continuous delivery architecture using ArgoCD and Kubernetes. Features multi-cluster synchronization, automated drift correction, and zero-downtime rollouts.",
    stack: ["ArgoCD", "Kubernetes", "Helm", "GitOps"],
  },
  {
    slug: "automated-devsecops-security-gateways",
    title: "Automated DevSecOps Security Gateways",
    category: "Security & Compliance",
    description:
      "Shift-left security pipeline with automated SAST and DAST gates, container vulnerability scanning, and centralized HashiCorp Vault secrets injection.",
    stack: ["SAST/DAST", "DevSecOps", "Vault", "Grype"],
  },
  {
    slug: "event-driven-workflow-ai-automation",
    title: "Event-Driven Workflow & AI Automation Platform",
    category: "Automation & AI",
    description:
      "Automated operational pipelines integrating n8n event triggers with Model Context Protocol (MCP) tool servers for intelligent infrastructure management and incident routing.",
    stack: ["n8n", "MCP", "REST APIs", "Docker"],
  },
] as const;

export const credentialsAndCommunity = [
  {
    title: "B.Sc. in Information Technology",
    issuer: "Egyptian E-Learning University (EELU)",
    date: "Graduated June 2025",
    type: "Academic Degree",
    description:
      "Four-year academic foundation in distributed computing, operating systems, networking architectures, database systems, and software engineering.",
  },
  {
    title: "DevOps & Cloud Engineering Track",
    issuer: "National Telecommunication Institute (NTI)",
    date: "Hire Ready Track",
    type: "Technical Specialization",
    description:
      "Hands-on engineering program covering cloud platforms, container orchestration, Linux systems administration, CI/CD pipelines, and Infrastructure as Code.",
  },
  {
    title: "Technical Speaker — DevOps Practices & Culture",
    issuer: "The Chinese University in Cairo",
    date: "Student Engineering Community",
    type: "Community & Speaking",
    description:
      "Delivered a technical session on containerization, continuous delivery pipelines, Infrastructure as Code, and real-world operational engineering practices.",
  },
] as const;
