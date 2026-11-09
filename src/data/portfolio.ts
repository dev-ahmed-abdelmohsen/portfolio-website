export type ProjectTag =
  | "AWS"
  | "DevOps"
  | "Kubernetes"
  | "GitOps"
  | "DevSecOps"
  | "MLOps"
  | "Full-Stack"
  | "Community"
  | "Healthcare";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: ProjectTag[];
  deploymentModel: string;
  overview: string;
  architectureHighlights: string[];
  keyCapabilities: string[];
  techStack: string[];
  link?: string;
  relatedBlogSlug?: string;
}

export const projects: Project[] = [
  {
    slug: "aws-multi-tier-cloud-architecture",
    title: "AWS Multi-Tier Cloud Architecture & Solutions",
    subtitle: "High-availability multi-tier cloud environment aligned with the AWS Well-Architected Framework.",
    description:
      "Architected a high-availability multi-tier cloud environment on AWS aligned with Well-Architected Framework standards, fully automated using Infrastructure as Code (e.g. Terraform).",
    tags: ["AWS", "DevOps", "Kubernetes"],
    deploymentModel: "AWS Multi-AZ Cloud Architecture",
    overview:
      "Designed and deployed a resilient multi-tier cloud infrastructure following the AWS Well-Architected Framework. The system segments traffic across dedicated public, private, and database subnets across multiple Availability Zones, ensuring zero single-point-of-failure and strict network isolation.",
    architectureHighlights: [
      "Multi-AZ Amazon VPC topology with isolated public, private application, and isolated database subnets.",
      "Application Load Balancer (ALB) distributing incoming traffic to auto-scaling application compute instances.",
      "Managed Amazon RDS Multi-AZ relational database deployment with automated failover and encryption at rest.",
      "Strict least-privilege IAM policies, Security Groups, and VPC Network ACL boundaries.",
      "Modular Infrastructure as Code (Terraform) managing the full environment lifecycle with remote state locking.",
    ],
    keyCapabilities: [
      "Immutable infrastructure provisioning managed via version-controlled Terraform modules.",
      "Automated scaling policies adjusting compute capacity based on operational traffic patterns.",
      "Centralized Amazon CloudWatch telemetry and log aggregation for proactive system diagnostics.",
      "Network perimeter hardening with AWS WAF integration and automated egress filtering.",
    ],
    techStack: [
      "AWS",
      "Terraform",
      "Amazon VPC",
      "EC2 Auto Scaling",
      "Application Load Balancer",
      "Amazon RDS Multi-AZ",
      "IAM",
      "CloudWatch",
    ],
    link: "https://github.com/dev-ahmed-abdelmohsen",
    relatedBlogSlug: "terraform-aws-infrastructure",
  },
  {
    slug: "declarative-gitops-delivery-platform",
    title: "Declarative GitOps Delivery Platform",
    subtitle: "Multi-cluster continuous delivery and automated configuration reconciliation powered by GitOps.",
    description:
      "Engineered automated continuous delivery and multi-cluster synchronization on Kubernetes with automated drift detection and self-healing (e.g. ArgoCD).",
    tags: ["GitOps", "Kubernetes", "DevOps"],
    deploymentModel: "Multi-Cluster Kubernetes / Hybrid Cloud",
    overview:
      "Engineered an enterprise GitOps delivery workflow where version-controlled Git repositories serve as the definitive single source of truth for all Kubernetes cluster states. Leveraging declarative controllers, the platform continuously verifies cluster health, enforces policy synchronization, and reconciles state drifts automatically.",
    architectureHighlights: [
      "Declarative application definitions managed via structured Helm charts and Kustomize overlays.",
      "Continuous synchronization controller (ArgoCD) tracking application manifests across development, staging, and production clusters.",
      "Automated drift detection reconciling out-of-band cluster modifications back to declared Git state.",
      "Zero-downtime progressive deployment strategies utilizing blue/green and canary rollouts.",
      "Encrypted secrets management utilizing Sealed Secrets and external vault synchronization.",
    ],
    keyCapabilities: [
      "Automated pull-based reconciliation eliminating the need for long-lived CI cluster credentials.",
      "Audit trail compliance where every infrastructure and deployment mutation is tracked via Git commits.",
      "Instant rollbacks to known stable states by reverting Git commits.",
      "Standardized multi-tenant cluster onboarding with shared governance standards.",
    ],
    techStack: [
      "Kubernetes",
      "ArgoCD",
      "Helm",
      "Kustomize",
      "GitHub Actions",
      "Docker",
      "Sealed Secrets",
    ],
    link: "https://github.com/dev-ahmed-abdelmohsen",
    relatedBlogSlug: "gitops-with-argocd-kubernetes",
  },
  {
    slug: "automated-devsecops-security-gateways",
    title: "Automated DevSecOps Security Gateways",
    subtitle: "Shift-left continuous security verification integrated directly into automated delivery pipelines.",
    description:
      "Integrated shift-left security verification into deployment pipelines, covering static analysis, secrets prevention, and container vulnerability scanning.",
    tags: ["DevSecOps", "DevOps", "Kubernetes"],
    deploymentModel: "CI/CD Pipeline & Container Gateways",
    overview:
      "Embedded proactive security gates directly into CI/CD pipelines to detect and mitigate vulnerabilities early in the software development lifecycle. By combining automated static code analysis, pre-commit secret leak prevention, and container image inspection, the platform enforces compliance policies before artifacts reach staging or production environments.",
    architectureHighlights: [
      "Automated pre-commit hooks and pipeline linters preventing accidental credential leaks and secrets exposure (e.g. Gitleaks).",
      "Static Application Security Testing (SAST) scanning source repositories on pull requests (e.g. Semgrep).",
      "Infrastructure as Code compliance scanning validating Terraform configurations against security benchmarks (e.g. Checkov).",
      "Container baseline hardening minimizing attack surfaces with non-root user execution and minimal base images.",
      "Automated policy enforcement halting pipeline execution when severe vulnerabilities are detected.",
    ],
    keyCapabilities: [
      "Shift-left vulnerability identification prior to container registry publishing and cluster deployment.",
      "Centralized vulnerability reporting and security posture visibility for engineering teams.",
      "Compliance policy enforcement codified as executable pipeline steps.",
      "Hardened container runtime configurations adhering to industry container security benchmarks.",
    ],
    techStack: [
      "GitHub Actions",
      "Semgrep",
      "Gitleaks",
      "Checkov",
      "Docker",
      "Kubernetes",
      "Linux Security",
    ],
    link: "https://github.com/dev-ahmed-abdelmohsen",
    relatedBlogSlug: "devsecops-pipeline-security",
  },
  {
    slug: "enterprise-observability-telemetry",
    title: "Enterprise Observability & Centralized Telemetry",
    subtitle: "Full-stack metrics aggregation, dynamic dashboards, and centralized log analytics across hybrid workloads.",
    description:
      "Architected full-stack operational visibility combining real-time metrics, dynamic alerting, and centralized log analytics across distributed container workloads.",
    tags: ["DevOps", "Kubernetes", "AWS"],
    deploymentModel: "Hybrid Infrastructure & On-Premises",
    overview:
      "Designed and deployed a comprehensive operational observability platform providing unified visibility across Kubernetes clusters, virtual machines, and physical network infrastructure. The architecture combines real-time time-series telemetry with distributed log indexing and intelligent alert routing.",
    architectureHighlights: [
      "Time-series metrics collection utilizing Prometheus with service discovery across dynamic container workloads.",
      "Centralized visualization dashboards built with Grafana for cluster health, node utilization, and network traffic.",
      "Distributed log pipeline utilizing Elasticsearch and Kibana with structured log collectors (Logstash / Fluentd).",
      "Alertmanager routing notifications with tiered severity routing to team on-call channels.",
      "Operational log retention and lifecycle management optimizing indexing performance on enterprise storage.",
    ],
    keyCapabilities: [
      "Rapid root-cause analysis through correlated metrics and synchronized log timestamps.",
      "Preemptive threshold alerting warning engineering teams ahead of storage or memory exhaustion.",
      "Centralized log search and analytics across multi-server on-premises and cloud topologies.",
      "Role-based access control safeguarding sensitive application telemetry.",
    ],
    techStack: [
      "Prometheus",
      "Grafana",
      "Elasticsearch",
      "Kibana",
      "Alertmanager",
      "Fluentd",
      "Linux",
      "Kubernetes",
    ],
    link: "https://github.com/dev-ahmed-abdelmohsen",
    relatedBlogSlug: "monitoring-with-grafana",
  },
  {
    slug: "cloud-native-mlops-platform",
    title: "Cloud-Native MLOps & Model Serving Platform",
    subtitle: "Distributed model inference, GPU compute orchestration, and automated model tracking on Kubernetes.",
    description:
      "Configured distributed model inference and auto-scaling GPU compute nodes on Kubernetes with model registry management and telemetry.",
    tags: ["MLOps", "Kubernetes", "AWS"],
    deploymentModel: "Kubernetes GPU Cluster / Cloud",
    overview:
      "Engineered an automated MLOps serving platform on Kubernetes designed to bridge the gap between machine learning models and production deployment. The architecture manages model versioning, automated containerized serving endpoints, and GPU-aware horizontal pod autoscaling.",
    architectureHighlights: [
      "Kubernetes cluster configuration with specialized GPU node groups and NVIDIA device plugins.",
      "Model tracking and artifact registry integration managing model versions and metadata (e.g. MLflow).",
      "Containerized inference endpoints utilizing optimized runtimes for low-latency request processing.",
      "Horizontal Pod Autoscaling (HPA) responding dynamically to request queuing and inference load.",
      "Observability integration exporting inference latency, throughput, and GPU utilization metrics.",
    ],
    keyCapabilities: [
      "Standardized deployment workflow transitioning trained model weights into reproducible container services.",
      "Dynamic allocation of GPU hardware resources optimizing compute efficiency.",
      "Rolling updates for model endpoints enabling seamless zero-downtime model version promotions.",
      "Continuous monitoring of endpoint latency and resource saturation.",
    ],
    techStack: [
      "Kubernetes",
      "MLOps",
      "MLflow",
      "Docker",
      "Python",
      "TorchServe",
      "Prometheus",
      "NVIDIA GPU Drivers",
    ],
    link: "https://github.com/dev-ahmed-abdelmohsen",
    relatedBlogSlug: "mlops-infrastructure-kubernetes",
  },
  {
    slug: "ai-assisted-diagnostic-platform",
    title: "AI-Assisted Diagnostic Platform (Graduation Project - Grade A+)",
    subtitle: "Clinical AI-assisted medical diagnostic web platform awarded Grade A+ distinction from EELU.",
    description:
      "Engineered an AI-integrated full-stack solution for automated early medical diagnosis and clinical workflows, earning an A+ distinction from EELU.",
    tags: ["Full-Stack", "Healthcare", "AWS"],
    deploymentModel: "Containerized Cloud Platform",
    overview:
      "Developed an end-to-end medical diagnostic platform as a capstone graduation project for the Egyptian E-Learning University (EELU), receiving an A+ distinction. The system combines deep learning diagnostic models with an intuitive clinical web interface, enabling healthcare professionals to upload diagnostic imagery and receive structured analysis reports.",
    architectureHighlights: [
      "Decoupled microservice architecture with Python/FastAPI backend and modern React frontend.",
      "Integrated deep learning model inference pipeline preprocessing medical image data securely.",
      "Relational data model on PostgreSQL storing patient records, audit logs, and diagnostic history.",
      "Containerized service packaging using Docker and multi-stage builds for minimal production images.",
      "Role-based access control (RBAC) ensuring strict separation between physicians, technicians, and administrators.",
    ],
    keyCapabilities: [
      "Automated diagnostic inference pipeline providing doctors with structured diagnostic support.",
      "Secure patient profile and diagnostic document management with end-to-end encrypted storage.",
      "Audit trail tracking diagnostic submissions, review statuses, and clinician validations.",
      "Awarded highest honors (Grade A+) by the university academic and technical evaluation board.",
    ],
    techStack: [
      "Python",
      "PyTorch",
      "FastAPI",
      "React",
      "Docker",
      "PostgreSQL",
      "Nginx",
      "AWS",
    ],
    link: "https://github.com/dev-ahmed-abdelmohsen",
  },
  {
    slug: "healthcare-digital-services-platform",
    title: "Healthcare Digital Services Platform",
    subtitle: "High-reliability cloud-native platform connecting healthcare providers, clinic schedules, and patient services.",
    description:
      "Built a secure cloud-native web platform connecting healthcare providers with patients, featuring real-time scheduling and role-based access control.",
    tags: ["Full-Stack", "Healthcare", "AWS"],
    deploymentModel: "Cloud-Native Container Infrastructure",
    overview:
      "Engineered a production-ready healthcare management platform designed for clinics and healthcare networks. The system streamlines patient appointment scheduling, digital medical records management, and real-time practitioner availability tracking within a secure, high-availability architecture.",
    architectureHighlights: [
      "Full-stack architecture built with Next.js and robust backend REST APIs.",
      "High-performance caching layer with Redis for real-time doctor availability and scheduling locks.",
      "PostgreSQL database cluster with automated snapshotting and data integrity constraints.",
      "Containerized deployment behind Nginx reverse proxy with TLS 1.3 termination and rate limiting.",
      "Comprehensive role-based authorization safeguarding sensitive patient health records.",
    ],
    keyCapabilities: [
      "Conflict-free appointment reservation engine with real-time slot locking.",
      "Encrypted patient health records management accessible strictly to authorized clinical personnel.",
      "Automated email and notification triggers for appointment confirmations and schedule modifications.",
      "Containerized environment designed for rapid scaling and continuous delivery.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Nginx",
      "Tailwind CSS",
    ],
    link: "https://github.com/dev-ahmed-abdelmohsen",
  },
  {
    slug: "event-driven-workflow-ai-automation",
    title: "Event-Driven Workflow & AI Automation Platform",
    subtitle: "Autonomous workflow orchestration with n8n and Model Context Protocol (MCP) integrations.",
    description:
      "Automated complex operational workflows using n8n and implemented Model Context Protocol (MCP) tool integrations for intelligent infrastructure operations.",
    tags: ["DevOps", "Full-Stack"],
    deploymentModel: "Self-Hosted Orchestration & MCP Integration",
    overview:
      "Architected an event-driven automation framework utilizing self-hosted n8n workflows and Model Context Protocol (MCP) servers. The platform connects infrastructure monitoring, operational tooling, and AI model contexts to automate incident triage, log diagnostics, and repetitive DevOps tasks with high reliability.",
    architectureHighlights: [
      "Self-hosted n8n automation engine orchestrating multi-step operational runbooks upon webhook triggers.",
      "Custom Model Context Protocol (MCP) tools exposing real-time infrastructure queries and log inspections to AI models safely.",
      "Bi-directional integrations bridging Prometheus/Alertmanager, ticketing systems, and messaging channels.",
      "Automated remediation workflows performing sanitized system diagnostics upon infrastructure alerts.",
      "Containerized deployment with persistent storage, automated database backups, and secure credential vaults.",
    ],
    keyCapabilities: [
      "Zero-overhead event-driven orchestration replacing manual operational intervention for standard incident responses.",
      "Structured Model Context Protocol (MCP) server endpoints enabling AI systems to interact safely with operational tools.",
      "Self-healing workflows triggered automatically upon predefined infrastructure failure signals.",
      "Audit logs capturing all automation executions, payload responses, and error traces.",
    ],
    techStack: [
      "n8n",
      "Model Context Protocol (MCP)",
      "Docker",
      "Node.js",
      "Python",
      "REST APIs",
      "Webhooks",
      "Linux",
    ],
    link: "https://github.com/dev-ahmed-abdelmohsen",
  },
  {
    slug: "intro-to-devops-cloud-culture",
    title: '"Intro to DevOps & Cloud Culture" – University Talk',
    subtitle: "Technical seminar and workshop on modern DevOps culture and cloud engineering at The Chinese University in Cairo.",
    description:
      "Delivered a technical session on DevOps culture, CI/CD automation, and cloud-native practices to engineering students at The Chinese University in Cairo.",
    tags: ["Community", "DevOps"],
    deploymentModel: "Community & Academic Engagement",
    overview:
      "Delivered an interactive, in-depth technical seminar for engineering and computer science students at The Chinese University in Cairo. The talk focused on bridging the gap between theoretical software development and production operations, sharing practical insights on modern DevOps methodologies, GitOps workflows, and career progression in hybrid infrastructure engineering.",
    architectureHighlights: [
      "The evolution of software delivery: from monolithic deployments to containerized cloud architectures.",
      "Core principles of DevOps culture: continuous feedback, shared ownership, and automation.",
      "Practical demonstration of CI/CD pipeline automation and infrastructure as code concepts.",
      "Real-world operational challenges in hybrid cloud and on-premises enterprise environments.",
      "Interactive Q&A session advising aspiring engineers on cloud certifications, portfolio building, and hands-on tooling.",
    ],
    keyCapabilities: [
      "Mentored undergraduate engineering students on industry-relevant skills and practical engineering tools.",
      "Provided practical frameworks for breaking down complex infrastructure challenges into automated workflows.",
      "Fostered community engagement and technology adoption among aspiring Egyptian software and cloud engineers.",
    ],
    techStack: [
      "DevOps Culture",
      "CI/CD Automation",
      "Cloud Infrastructure",
      "GitOps",
      "Mentorship",
      "Technical Speaking",
    ],
    link: "https://github.com/dev-ahmed-abdelmohsen",
  },
];

export const allTags: ProjectTag[] = [
  "AWS",
  "DevOps",
  "Kubernetes",
  "GitOps",
  "DevSecOps",
  "MLOps",
  "Full-Stack",
  "Community",
];

