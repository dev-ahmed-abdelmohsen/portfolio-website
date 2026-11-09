import { Server, Container, Workflow, ShieldCheck } from "lucide-react";

export const engineeringPillars = [
  {
    icon: Server,
    title: "On-Premises & Hybrid Infrastructure",
    subtitle: "Enterprise Virtualization & Bare-Metal Platforms",
    description:
      "Architecting reliable on-premises infrastructure, private cloud platforms, and hybrid connectivity. Enforcing high availability, Linux systems hardening, and bare-metal hypervisor governance.",
    tags: ["On-Premises", "Linux Systems", "Virtualization", "Private Cloud"],
  },
  {
    icon: Container,
    title: "Declarative GitOps & Kubernetes",
    subtitle: "Continuous Delivery & Drift Reconciliation",
    description:
      "Operating containerized workloads on Kubernetes with declarative GitOps via ArgoCD. Implementing progressive canary rollouts, Helm standards, and automated drift self-healing.",
    tags: ["Kubernetes", "ArgoCD", "GitOps", "Helm", "Rollouts"],
  },
  {
    icon: Workflow,
    title: "Event-Driven & AI Automation",
    subtitle: "n8n Workflows & Model Context Protocol (MCP)",
    description:
      "Engineering resilient workflow pipelines with n8n and developing Model Context Protocol (MCP) tool interfaces to connect AI agents with infrastructure APIs, eliminating repetitive operational toil.",
    tags: ["n8n", "MCP", "AI Tooling", "Webhooks", "API Integration"],
  },
  {
    icon: ShieldCheck,
    title: "Infrastructure as Code & Security",
    subtitle: "Terraform, Ansible & Vault Secrets Governance",
    description:
      "Managing infrastructure lifecycles declaratively with Terraform and Ansible. Enforcing zero-trust secret injection via HashiCorp Vault, container security, and end-to-end telemetry with Prometheus and ELK.",
    tags: ["Terraform", "Ansible", "HashiCorp Vault", "Observability"],
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
    slug: "event-driven-workflow-ai-automation",
    title: "Event-Driven Workflow & AI Automation Platform",
    category: "Automation & AI",
    description:
      "Automated operational pipelines integrating n8n event triggers with Model Context Protocol (MCP) tool servers for intelligent infrastructure management and incident routing.",
    stack: ["n8n", "MCP", "REST APIs", "Docker"],
  },
  {
    slug: "aws-multi-tier-cloud-architecture",
    title: "AWS Multi-Tier Cloud Architecture & Solutions Design",
    category: "Cloud Architecture",
    description:
      "Fault-tolerant, multi-zone cloud topology designed under the AWS Well-Architected Framework, provisioned entirely through declarative Terraform Infrastructure as Code.",
    stack: ["AWS", "Terraform", "VPC Topology", "High Availability"],
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
