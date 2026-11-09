export type LearningStatus = "Active / In Progress" | "Production Standard" | "Planned / Upcoming";
export type LearningCategory = "Kubernetes" | "GitOps & CD" | "Security" | "Automation & Architecture";

export interface StudyModule {
  id: string;
  number: number;
  stepNumber: string;
  title: string;
  focusArea: string;
  summary: string;
  objectives: string[];
  labScenario: string;
  keyCommandsOrTools?: string[];
}

export interface LearningTrack {
  id: string;
  slug: string;
  title: string;
  targetCredential: string;
  category: LearningCategory;
  status: LearningStatus;
  level: "Associate" | "Professional" | "Specialist";
  curriculumVersion: string;
  summary: string;
  topicsList: string[];
  coreCompetencies: string[];
  modules: StudyModule[];
  relatedBlogSlug?: string;
  officialReference?: {
    name: string;
    url: string;
  };
}

export const learningTracks: LearningTrack[] = [
  {
    id: "cka-kubernetes-administrator",
    slug: "certified-kubernetes-administrator",
    title: "Certified Kubernetes Administrator (CKA) Production Blueprint",
    targetCredential: "CNCF / Linux Foundation CKA (Curriculum v1.31+)",
    category: "Kubernetes",
    status: "Active / In Progress",
    level: "Professional",
    curriculumVersion: "2025/2026 CNCF Exam & Production Alignment",
    summary:
      "Comprehensive mastery path targeting the Certified Kubernetes Administrator (CKA) domain competencies and production cluster administration. Encompasses cluster installation with kubeadm, etcd backup/restore, zero-trust network policies, advanced scheduling constraints, dynamic storage provisioning, and systematic cluster troubleshooting.",
    topicsList: [
      "Cluster Architecture & etcd Disaster Recovery",
      "Workloads, Pod Placement & Resource Governors",
      "Services, Networking & Zero-Trust Policies",
      "Persistent Storage, Dynamic Volume Lifecycle & CSI",
      "Cluster Diagnostics, Kubelet Logs & Node Maintenance",
    ],
    coreCompetencies: [
      "Multi-Node Cluster Architecture & Control Plane Bootstrap",
      "etcd Quorum Management, Disaster Recovery & Snapshot Restoration",
      "Zero-Trust NetworkPolicies & CNI Subnet Routing",
      "Advanced Workload Scheduling: Affinities, Taints, Tolerations & Topology Spread",
      "StorageClasses, Dynamic PV/PVC Allocation & Volume Lifecycle",
      "Worker Node Diagnostics, Kubelet Systemd Logs & Cluster Version Upgrades",
    ],
    officialReference: {
      name: "Linux Foundation CKA Curriculum",
      url: "https://www.cncf.io/certification/cka/",
    },
    relatedBlogSlug: "getting-started-with-kubernetes",
    modules: [
      {
        id: "cka-mod-1",
        number: 1,
        stepNumber: "Step 01",
        title: "Cluster Architecture, Installation & Configuration",
        focusArea: "25% of Domain Scope · Control Plane Primitives",
        summary:
          "Bootstrap multi-node production clusters with kubeadm, configure control plane high availability, manage certificates, and secure etcd disaster recovery snapshots.",
        objectives: [
          "Bootstrap a production-grade multi-node Kubernetes cluster using kubeadm on Linux instances.",
          "Perform automated and manual etcd snapshots with etcdctl and execute full cluster state restorations.",
          "Configure control plane high availability, TLS certificate rotations (kubeadm certs), and API server admission flags.",
          "Manage RBAC authorization: Roles, ClusterRoles, RoleBindings, and ServiceAccounts.",
        ],
        labScenario:
          "Simulate a catastrophic control plane failure by destroying the etcd data directory on a multi-node cluster, then restore cluster operational state from an encrypted snapshot while verifying pod persistence.",
        keyCommandsOrTools: [
          "kubeadm init / join",
          "etcdctl snapshot save / restore",
          "kubeadm certs check-expiration",
          "kubectl create role / rolebinding",
        ],
      },
      {
        id: "cka-mod-2",
        number: 2,
        stepNumber: "Step 02",
        title: "Workloads & Scheduling Constraints",
        focusArea: "15% of Domain Scope · Placement & Resource Governors",
        summary:
          "Enforce node affinities, pod anti-affinities, taints, tolerations, topology spread constraints, and namespace-level ResourceQuotas.",
        objectives: [
          "Configure node affinity, pod anti-affinity, and pod topology spread constraints across availability zones.",
          "Enforce node taints, tolerations, and nodeSelectors for isolated workloads.",
          "Define resource requests, limits, LimitRanges, and namespace-level ResourceQuotas.",
          "Manage application controllers: Deployments, StatefulSets, DaemonSets, and CronJobs.",
        ],
        labScenario:
          "Schedule a critical stateful workload with strict pod anti-affinity across three worker nodes, configure taints for dedicated GPU workloads, and prevent unreserved pods from being placed on specialized hardware.",
        keyCommandsOrTools: [
          "kubectl taint nodes key=value:NoSchedule",
          "topologySpreadConstraints",
          "ResourceQuota / LimitRange manifests",
          "PriorityClass scheduling",
        ],
      },
      {
        id: "cka-mod-3",
        number: 3,
        stepNumber: "Step 03",
        title: "Services, Networking & Security Policies",
        focusArea: "20% of Domain Scope · CNI, Ingress & Zero-Trust Isolation",
        summary:
          "Configure ClusterIP/NodePort/LoadBalancer services, implement Ingress controllers with TLS, and enforce zero-trust NetworkPolicies across namespaces.",
        objectives: [
          "Understand Kubernetes network model: Pod-to-Pod communication, kube-proxy iptables/IPVS modes, and CNI plugins.",
          "Configure ClusterIP, NodePort, and LoadBalancer services with named target ports and selectors.",
          "Deploy Ingress Controllers (NGINX Ingress) with path-based routing and TLS secret termination.",
          "Implement fine-grained NetworkPolicies isolating frontend, backend, and database namespaces.",
        ],
        labScenario:
          "Enforce a default-deny NetworkPolicy in a production namespace and author granular ingress rules allowing HTTP traffic strictly from a designated frontend service on port 8080.",
        keyCommandsOrTools: [
          "NetworkPolicy (ingress/egress CIDR & podSelector)",
          "CoreDNS ConfigMap & DNS lookup verification",
          "Ingress manifests with cert-manager TLS",
          "kubectl get endpoints / ep",
        ],
      },
      {
        id: "cka-mod-4",
        number: 4,
        stepNumber: "Step 04",
        title: "Storage & Persistence Architecture",
        focusArea: "10% of Domain Scope · PV, PVC & CSI Subsystems",
        summary:
          "Provision dynamic StorageClasses, bind PersistentVolumeClaims, configure volume access modes, and execute zero-downtime volume expansions.",
        objectives: [
          "Provision PersistentVolumes (PV) with specific access modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany.",
          "Configure PersistentVolumeClaims (PVC) with storage capacity requests and selector bindings.",
          "Define dynamic StorageClasses utilizing volume provisioners with reclaim policies (Delete vs. Retain).",
          "Manage volume mounts, subPath expressions, and dynamic volume expansion.",
        ],
        labScenario:
          "Provision a high-availability persistent storage backend with dynamic volume provisioning, attach persistent volumes to a stateful database deployment, and safely expand the storage volume without container downtime.",
        keyCommandsOrTools: [
          "StorageClass (reclaimPolicy, volumeBindingMode)",
          "PersistentVolume / PersistentVolumeClaim",
          "volumeMounts / subPath",
          "kubectl describe pvc",
        ],
      },
      {
        id: "cka-mod-5",
        number: 5,
        stepNumber: "Step 05",
        title: "Cluster Troubleshooting, Upgrades & Maintenance",
        focusArea: "30% of Domain Scope · Systems Engineering Diagnostics",
        summary:
          "Diagnose worker node failure modes with kubelet/journalctl, safely drain/cordon nodes for maintenance, and execute sequential minor version upgrades.",
        objectives: [
          "Diagnose worker node failure modes: Kubelet systemd services, container runtime (containerd) crashes, and disk pressure.",
          "Safely drain, cordon, and uncordon nodes during rolling cluster OS maintenance.",
          "Perform minor version cluster upgrades utilizing kubeadm, kubelet, and kubectl in sequential order.",
          "Extract and analyze container crash logs, liveness/readiness probe failures, and OOMKilled events.",
        ],
        labScenario:
          "Perform a zero-downtime rolling cluster upgrade from v1.30 to v1.31 across control plane and worker nodes, followed by diagnosing and reviving a broken worker node with a corrupted kubelet configuration file.",
        keyCommandsOrTools: [
          "kubectl drain --ignore-daemonsets",
          "journalctl -u kubelet -f",
          "kubeadm upgrade plan / apply",
          "crictl ps / logs",
        ],
      },
    ],
  },
  {
    id: "argocd-gitops-mastery",
    slug: "argocd-declarative-gitops-mastery",
    title: "ArgoCD & Declarative GitOps Mastery Study Plan",
    targetCredential: "CNCF GitOps Principles & Enterprise Multi-Cluster Architecture",
    category: "GitOps & CD",
    status: "Active / In Progress",
    level: "Specialist",
    curriculumVersion: "ArgoCD v2.12+ Production Standard",
    summary:
      "In-depth enterprise curriculum focused on declarative continuous delivery with ArgoCD across hybrid and multi-cluster environments. Covers core GitOps foundations, HA control plane engineering, ApplicationSets automation, progressive delivery via Argo Rollouts, Sealed Secrets integration, and strict RBAC governance.",
    topicsList: [
      "OpenGitOps Foundations & Multi-Environment Repository Topology",
      "High Availability ArgoCD Control Plane Architecture",
      "ApplicationSets & Automated Multi-Cluster Delivery",
      "Enterprise AppProject RBAC & GitOps Secret Management",
      "Progressive Delivery with Argo Rollouts & Canary Analysis",
    ],
    coreCompetencies: [
      "OpenGitOps Core Principles (Declarative, Versioned, Pulled, Reconciled)",
      "High Availability ArgoCD Control Plane Architecture (Redis, Repo Server, Controller)",
      "Matrix, Git Directory & Cluster Generators with ApplicationSets",
      "Progressive Delivery with Argo Rollouts: Blue/Green & Canary Analysis",
      "GitOps Secret Management (Bitnami Sealed Secrets & External Secrets Operator)",
      "Fine-Grained AppProject RBAC, OIDC Single Sign-On & Audit Logging",
    ],
    officialReference: {
      name: "Official ArgoCD Documentation",
      url: "https://argo-cd.readthedocs.io/",
    },
    relatedBlogSlug: "gitops-with-argocd-kubernetes",
    modules: [
      {
        id: "argo-mod-1",
        number: 1,
        stepNumber: "Step 01",
        title: "GitOps Principles & Repository Topology",
        focusArea: "Foundations & Architectural Strategy",
        summary:
          "Master the four OpenGitOps principles, design scalable Monorepo vs. Polyrepo structures, and organize Kubernetes configurations with Kustomize overlays and Helm charts.",
        objectives: [
          "Master the four OpenGitOps principles: Declarative state, Version-controlled truth, Automated pull reconciliation, and Continuous self-healing.",
          "Design scalable Git repository architectures: Monorepo vs. Polyrepo, isolating application source code from deployment configurations.",
          "Structure Kubernetes manifests cleanly using Helm charts and Kustomize environment overlays (base vs. dev, staging, prod).",
          "Evaluate pull-based GitOps vs. traditional push-based CI deployment mechanisms regarding security and credential exposure.",
        ],
        labScenario:
          "Structure a multi-environment production Git repository using Kustomize overlays, separating infrastructure manifests from microservice configs, and commit declarative application definitions.",
        keyCommandsOrTools: [
          "kustomize build overlays/production",
          "helm template ./charts/app",
          "git commit / tag workflow",
          "OpenGitOps declarative validation",
        ],
      },
      {
        id: "argo-mod-2",
        number: 2,
        stepNumber: "Step 02",
        title: "ArgoCD Control Plane Architecture & HA Deployment",
        focusArea: "Control Plane Operations & High Availability",
        summary:
          "Architect internal components (API Server, Repo Server, Application Controller, Redis), deploy in HA mode, and register remote target clusters.",
        objectives: [
          "Understand internal ArgoCD architecture: API Server, Repo Server, Application Controller, and Redis Cache.",
          "Deploy ArgoCD in High Availability (HA) mode with replica redundancy, autoscaling, and dedicated persistent volumes.",
          "Configure CLI access, declarative cluster registration, and target cluster kubeconfig credentials.",
          "Expose ArgoCD Server securely via Ingress with TLS certificates and rate limiting.",
        ],
        labScenario:
          "Install an HA ArgoCD instance using the official Helm chart, configure horizontal pod autoscaling for the repo server, and register a secondary remote Kubernetes cluster via the argocd CLI.",
        keyCommandsOrTools: [
          "argocd cluster add <context>",
          "argocd app create / sync",
          "argocd-repo-server replicas configuration",
          "helm install argo-cd argo/argo-cd --values ha-values.yaml",
        ],
      },
      {
        id: "argo-mod-3",
        number: 3,
        stepNumber: "Step 03",
        title: "ApplicationSets & Multi-Cluster Synchronization",
        focusArea: "Automation at Scale · Cluster Orchestration",
        summary:
          "Automate multi-cluster and multi-tenant applications using Matrix Generators, enforce deployment order with Sync Waves, and trigger automated lifecycle hooks.",
        objectives: [
          "Deploy the ApplicationSet controller to automate multi-tenant and multi-cluster application lifecycle.",
          "Implement Matrix Generators combining Git directory branches with target Kubernetes cluster lists.",
          "Configure Sync Waves and Sync Phases to enforce strict deployment order (e.g., Database migrations before API rollouts).",
          "Utilize PreSync, Sync, and PostSync hooks for automated schema validations and notification dispatches.",
        ],
        labScenario:
          "Create a single Matrix ApplicationSet that automatically discovers 5 microservices across 3 distinct cluster environments (Dev, Staging, Prod) and deploys them sequentially using sync waves.",
        keyCommandsOrTools: [
          "ApplicationSet (matrix generator, git generator)",
          "argocd.argoproj.io/sync-wave annotations",
          "argocd.argoproj.io/hook: PreSync / PostSync",
          "argocd appset get / list",
        ],
      },
      {
        id: "argo-mod-4",
        number: 4,
        stepNumber: "Step 04",
        title: "Enterprise Security, RBAC & Secret Management",
        focusArea: "Zero-Trust Governance & Credential Isolation",
        summary:
          "Configure OIDC Single Sign-On, enforce scoped AppProject RBAC boundaries, and integrate Bitnami Sealed Secrets and External Secrets Operator with HashiCorp Vault.",
        objectives: [
          "Integrate ArgoCD with enterprise Identity Providers (OIDC / Dex / GitHub OAuth).",
          "Design fine-grained AppProject permissions: Restricting allowed destination clusters, target namespaces, and repository sources.",
          "Implement declarative secret management using Bitnami Sealed Secrets with asymmetric RSA encryption.",
          "Integrate External Secrets Operator (ESO) for dynamic secret synchronization from HashiCorp Vault.",
        ],
        labScenario:
          "Author a locked-down AppProject restricting developer groups to read-only views on production namespaces while granting sync permissions in development, combined with deploying sealed secrets.",
        keyCommandsOrTools: [
          "kubeseal --format=yaml < secret.yaml",
          "AppProject (sourceRepos, destinations, roles, JWT)",
          "ExternalSecret / SecretStore manifests",
          "argocd proj create / edit",
        ],
      },
      {
        id: "argo-mod-5",
        number: 5,
        stepNumber: "Step 05",
        title: "Progressive Delivery with Argo Rollouts & Observability",
        focusArea: "Zero-Downtime Releases & Automated Rollbacks",
        summary:
          "Adopt Argo Rollouts for Blue/Green and Canary releases with traffic shaping, and automate instant rollbacks based on Prometheus AnalysisTemplates.",
        objectives: [
          "Replace standard Kubernetes Deployments with Argo Rollouts for progressive application delivery.",
          "Implement Blue/Green deployment strategies with active and preview service switching.",
          "Configure Canary deployments with weighted traffic splitting through Ingress controllers (NGINX / ALB).",
          "Define AnalysisTemplates querying Prometheus metrics to trigger automated rollbacks upon HTTP 5xx spikes or latency degradation.",
          "Monitor ArgoCD operational health via Prometheus service monitors and custom Grafana dashboards.",
        ],
        labScenario:
          "Execute a canary deployment split (20% -> 50% -> 100%) with an automated AnalysisTemplate that queries Prometheus; simulate backend 500 errors and verify that Argo Rollouts aborts and rolls back automatically.",
        keyCommandsOrTools: [
          "kubectl argo rollouts get rollout <name> --watch",
          "AnalysisTemplate (prometheus provider, query, successCondition)",
          "kubectl argo rollouts promote <name>",
          "kubectl argo rollouts abort <name>",
        ],
      },
    ],
  },
  {
    id: "vault-secret-injection",
    slug: "hashicorp-vault-secret-injection",
    title: "HashiCorp Vault & Kubernetes Secret Injection Mastery",
    targetCredential: "HashiCorp Certified: Vault Operations Associate & Production Secret Management",
    category: "Security",
    status: "Active / In Progress",
    level: "Specialist",
    curriculumVersion: "2025/2026 Production Vault & Cloud-Native Security Standard",
    summary:
      "Production-grade study plan for centralized secrets management, dynamic credential generation, and zero-trust secret delivery into Kubernetes workloads. Covers Vault HA clustering on Raft storage, Kubernetes Auth Method, Vault Agent Sidecar Injector, External Secrets Operator (ESO), transit data encryption, and automated PKI / mTLS certificate lifecycle.",
    topicsList: [
      "Vault Architecture, High Availability (Raft) & Seal Governance",
      "Kubernetes Authentication & Mutual Workload Identity",
      "Vault Agent Sidecar Injector & In-Memory Secret Templating",
      "External Secrets Operator (ESO) & GitOps Synchronization",
      "Dynamic Secrets, Database Engines, PKI & Transit Encryption",
    ],
    coreCompetencies: [
      "High Availability Vault Clustering with Integrated Raft Storage & Auto-Unseal (AWS KMS / Transit Vault)",
      "Kubernetes ServiceAccount JWT Validation & Least-Privilege Vault ACL Policies",
      "Zero-Disk Secret Injection using Vault Agent Sidecar Annotations & Consul Template",
      "External Secrets Operator (ESO) ClusterSecretStore Synchronization with GitOps",
      "Short-Lived Dynamic Database Credentials with Automatic Lease Revocation & Rotation",
      "Automated Internal PKI Engine & Mutual TLS (mTLS) Certificate Lifecycle",
    ],
    officialReference: {
      name: "HashiCorp Vault Kubernetes Documentation",
      url: "https://developer.hashicorp.com/vault/docs/platform/k8s",
    },
    relatedBlogSlug: "devsecops-pipeline-security",
    modules: [
      {
        id: "vault-mod-1",
        number: 1,
        stepNumber: "Step 01",
        title: "Vault Architecture, Clustering & Auto-Unseal Governance",
        focusArea: "Control Plane Architecture & Cryptographic Storage",
        summary:
          "Deploy production-grade Vault HA clusters backed by integrated Raft consensus storage, configure automated unsealing via Cloud KMS or Transit Vault, and author granular least-privilege ACL policies.",
        objectives: [
          "Bootstrap a production-grade multi-node Vault cluster utilizing the integrated Raft consensus storage backend.",
          "Implement cloud auto-unseal (AWS KMS / Transit Vault) eliminating Shamir key operational friction during pod restarts.",
          "Author granular, path-based HCL ACL policies enforcing least-privilege access for operators and workloads.",
          "Enable tamper-evident audit logging devices streaming to centralized log collection pipelines.",
        ],
        labScenario:
          "Initialize a 3-node HA Vault Raft cluster with automated KMS unseal; simulate node failure, verify Raft leader election without service downtime, and inspect tamper-evident audit logs.",
        keyCommandsOrTools: [
          "vault operator init / raft list-peers",
          "vault policy write <name> policy.hcl",
          "vault audit enable file file_path=/vault/audit/vault.log",
          "vault status",
        ],
      },
      {
        id: "vault-mod-2",
        number: 2,
        stepNumber: "Step 02",
        title: "Kubernetes Authentication Engine & Workload Identity",
        focusArea: "Zero-Trust Identity & Token Exchange",
        summary:
          "Establish zero-trust authentication between Kubernetes and Vault using the Kubernetes Auth Method, validating Pod ServiceAccount JWT tokens with API Server TokenReview.",
        objectives: [
          "Enable and configure the Vault Kubernetes Auth Method with TokenReview API validation.",
          "Map Kubernetes ServiceAccounts and Namespaces to targeted Vault roles and ACL policies.",
          "Implement short-lived token issuance with strictly bounded TTLs and renewal mechanisms.",
          "Harden communication with TLS verification and cluster CA trust certificates.",
        ],
        labScenario:
          "Configure the Kubernetes Auth Method against a target namespace; configure a microservice ServiceAccount, perform token exchange via CLI, and verify that unauthorized ServiceAccounts receive 403 Forbidden.",
        keyCommandsOrTools: [
          "vault auth enable kubernetes",
          "vault write auth/kubernetes/config ...",
          "vault write auth/kubernetes/role/<role_name> ...",
          "vault login -method=kubernetes role=...",
        ],
      },
      {
        id: "vault-mod-3",
        number: 3,
        stepNumber: "Step 03",
        title: "Vault Agent Sidecar Injector & In-Memory Secrets",
        focusArea: "Sidecar Injection & Zero-Disk Exposure",
        summary:
          "Inject secrets directly into application Pods via mutating admission webhooks, rendering confidential variables into ephemeral shared memory volumes without ever writing to persistent disk.",
        objectives: [
          "Deploy and configure the Vault Helm chart with the Vault Agent Sidecar Injector controller.",
          "Leverage Pod annotations (vault.hashicorp.com/*) to drive automated sidecar and init-container injection.",
          "Render custom application config files and environment variables using Consul Template syntax.",
          "Configure automatic secret reloads upon rotation using signals (vault.hashicorp.com/agent-inject-command).",
          "Enforce in-memory emptyDir: { medium: Memory } mounts to prevent confidential tokens from persisting to node disk.",
        ],
        labScenario:
          "Annotate a production web deployment to inject database credentials directly into /vault/secrets/config.json; update the secret in Vault and verify the sidecar agent automatically fetches the new secret and signals the application container.",
        keyCommandsOrTools: [
          "vault.hashicorp.com/agent-inject: 'true'",
          "vault.hashicorp.com/role: 'api-service'",
          "vault.hashicorp.com/agent-inject-template: '...'",
          "vault.hashicorp.com/agent-inject-command: 'kill -HUP 1'",
        ],
      },
      {
        id: "vault-mod-4",
        number: 4,
        stepNumber: "Step 04",
        title: "External Secrets Operator (ESO) & Declarative GitOps",
        focusArea: "Kubernetes-Native Secrets & GitOps Integration",
        summary:
          "Synchronize confidential values directly into native Kubernetes Secrets using the External Secrets Operator (ESO), enabling safe declarative GitOps workflows with ArgoCD.",
        objectives: [
          "Deploy and manage the External Secrets Operator (ESO) via Helm in a production cluster.",
          "Configure ClusterSecretStore and SecretStore CRDs targeting Vault engines.",
          "Define ExternalSecret CRDs specifying secret mapping, key extraction, and sync intervals.",
          "Integrate with ArgoCD without committing sensitive credentials or raw Secret manifests into Git.",
          "Configure Secret deletion policies and lifecycle reconciliation to eliminate orphaned credentials.",
        ],
        labScenario:
          "Create a ClusterSecretStore authenticated to Vault; declare an ExternalSecret targeting sensitive API tokens, sync via ArgoCD, and verify the resulting native Kubernetes Secret is created and refreshed on rotation.",
        keyCommandsOrTools: [
          "kubectl get clustersecretstore,externalsecret",
          "apiVersion: external-secrets.io/v1beta1",
          "secretStoreRef / remoteRef / refreshInterval",
          "kubectl describe externalsecret <name>",
        ],
      },
      {
        id: "vault-mod-5",
        number: 5,
        stepNumber: "Step 05",
        title: "Dynamic Secrets, Database Rotation, PKI & Transit Encryption",
        focusArea: "Ephemeral Credentials, mTLS & Encryption as a Service",
        summary:
          "Eliminate static, permanent credentials by implementing dynamic on-demand database credentials with automatic lease revocations, automated internal PKI certificate authority, and Transit encryption.",
        objectives: [
          "Configure Vault Database Secrets Engines (PostgreSQL / MySQL) generating unique, short-lived user roles for every workload instance.",
          "Automate lease expiration and proactive credential revocation upon pod termination.",
          "Establish an internal Private Key Infrastructure (PKI) secrets engine issuing on-demand TLS/mTLS certificates with cert-manager.",
          "Utilize the Vault Transit Secrets Engine for Cryptography-as-a-Service (envelope encryption) without exposing raw encryption keys to application developers.",
        ],
        labScenario:
          "Configure the PostgreSQL secrets engine; trigger an application to request temporary DB credentials with a 1-hour lease; verify the dynamic role exists in Postgres, wait for TTL expiry, and verify Vault automatically drops the role.",
        keyCommandsOrTools: [
          "vault secrets enable database",
          "vault write database/config/postgres ...",
          "vault write database/roles/app-role ...",
          "vault read database/creds/app-role",
          "vault secrets enable pki / transit",
        ],
      },
    ],
  },
  {
    id: "devsecops-sast-dast-security-pipelines",
    slug: "devsecops-sast-dast-security-pipelines",
    title: "DevSecOps: Automated SAST, DAST & Pipeline Security Mastery",
    targetCredential: "Certified DevSecOps Professional (CDP) & Cloud-Native Security Standard",
    category: "Security",
    status: "Active / In Progress",
    level: "Specialist",
    curriculumVersion: "2025/2026 Production DevSecOps & OWASP Standards",
    summary:
      "Production-grade study plan for embedding shift-left security verification across the continuous delivery pipeline. Covers automated Static Application Security Testing (SAST with Semgrep), Dynamic Application Security Testing (DAST with OWASP ZAP), pre-commit and pipeline secrets detection (Gitleaks), Software Composition Analysis (SCA with OWASP Dependency-Check & Grype), and admission policy enforcement (Kyverno).",
    topicsList: [
      "Shift-Left Architecture & Pipeline Security Gates",
      "Static Application Security Testing (SAST with Semgrep)",
      "Automated Pre-Commit & In-Pipeline Secrets Detection (Gitleaks)",
      "Dynamic Application Security Testing (DAST with OWASP ZAP)",
      "Software Composition Analysis (SCA) & Container Image Governance",
    ],
    coreCompetencies: [
      "Automated Shift-Left Security Gateways with SARIF Vulnerability Aggregation",
      "Custom SAST Pattern Authoring (Semgrep) for Insecure Code Detection",
      "Zero-Leak Pre-Commit Hooks & History Scanning with Gitleaks",
      "Automated DAST Baseline & Full API Security Scanning with OWASP ZAP",
      "Software Bill of Materials (SBOM) Generation & Dependency Analysis with Grype",
      "Kubernetes Admission Policy Hardening with Kyverno (Preventing Privileged Containers)",
    ],
    officialReference: {
      name: "OWASP DevSecOps Guideline & Top 10",
      url: "https://owasp.org/www-project-devsecops-guideline/",
    },
    relatedBlogSlug: "devsecops-pipeline-security",
    modules: [
      {
        id: "sec-mod-1",
        number: 1,
        stepNumber: "Step 01",
        title: "Shift-Left Security Architecture & Gate Enforcement",
        focusArea: "DevSecOps Culture, Gateways & Break-Build Criteria",
        summary:
          "Design shift-left automated gates across pull requests and deployment stages. Define clear CVSS-based break-build thresholds preventing vulnerable code from advancing to production.",
        objectives: [
          "Define automated security criteria based on CVSS severity thresholds (blocking High/Critical vulnerabilities).",
          "Integrate security scanning stages into multi-stage CI/CD pipelines (GitHub Actions / GitLab CI).",
          "Normalize vulnerability findings using standard SARIF (Static Analysis Results Interchange Format) reports.",
          "Author vulnerability exception policies and time-boxed security waiver lifecycles.",
        ],
        labScenario:
          "Configure a CI/CD pipeline stage that ingests multi-tool SARIF findings and automatically fails the build if any unexempted Critical vulnerability is detected, while publishing actionable PR annotations.",
        keyCommandsOrTools: [
          "sarif-tools / github/codeql-action/upload-sarif",
          "exit-code-on-threshold --severity CRITICAL",
          "security-gate-policy.yaml",
        ],
      },
      {
        id: "sec-mod-2",
        number: 2,
        stepNumber: "Step 02",
        title: "Static Application Security Testing (SAST with Semgrep)",
        focusArea: "Source Code Analysis & Custom Security Rules",
        summary:
          "Deploy lightweight, high-speed SAST using Semgrep. Enforce language-agnostic security rules targeting SQL injection, XSS, SSRF, and custom organizational anti-patterns.",
        objectives: [
          "Integrate Semgrep CLI into continuous integration pipelines targeting pull requests.",
          "Run OWASP Top 10 and CWE Top 25 rulepacks across polyglot codebases (Python, Node.js, Go, Java).",
          "Author custom Semgrep pattern rules to detect internal insecure coding practices and deprecated cryptographic libraries.",
          "Implement differential scanning (semgrep ci) to analyze changed files without slowing pipeline cycle times.",
        ],
        labScenario:
          "Write a custom Semgrep YAML rule that flags unescaped SQL string concatenation and weak HMAC algorithms in a microservice codebase; verify that PRs violating the rule are blocked.",
        keyCommandsOrTools: [
          "semgrep scan --config auto --sarif --output semgrep.sarif",
          "semgrep --config p/owasp-top-ten",
          "semgrep --validate --config custom-rules.yaml",
        ],
      },
      {
        id: "sec-mod-3",
        number: 3,
        stepNumber: "Step 03",
        title: "Pre-Commit & In-Pipeline Secrets Detection (Gitleaks)",
        focusArea: "Zero-Leak Secrets Prevention & Git History Auditing",
        summary:
          "Prevent confidential tokens, private keys, and API credentials from ever reaching Git remotes using pre-commit hooks and automated CI verification with Gitleaks.",
        objectives: [
          "Configure developer workstation pre-commit hooks utilizing Gitleaks to block commits containing sensitive entropy.",
          "Execute in-pipeline secret verification on all commits, pull requests, and merges.",
          "Perform historical Git repository scans to uncover legacy leaked credentials and rotate compromised tokens.",
          "Author custom regex patterns and baseline ignore files (.gitleaksignore) for authorized test stubs.",
        ],
        labScenario:
          "Install a pre-commit hook that intercepts an accidental commit of a cloud API key; simulate a bypass attempt and verify that the remote CI Gitleaks check fails and rejects the push.",
        keyCommandsOrTools: [
          "gitleaks protect --staged --verbose",
          "gitleaks detect --source . --report-path gitleaks.json",
          "gitleaks git --log-opts='--all'",
        ],
      },
      {
        id: "sec-mod-4",
        number: 4,
        stepNumber: "Step 04",
        title: "Dynamic Application Security Testing (DAST with OWASP ZAP)",
        focusArea: "Runtime Penetration Testing & API Vulnerability Scanning",
        summary:
          "Execute automated runtime dynamic analysis against staging applications and RESTful APIs using OWASP ZAP, verifying real-world defenses against OWASP Top 10 attacks.",
        objectives: [
          "Deploy OWASP ZAP in containerized headless mode within staging deployment pipelines.",
          "Configure automated baseline scans checking for security headers, cookie flags, and misconfigurations.",
          "Execute full dynamic API scans utilizing OpenAPI / Swagger specifications to fuzz endpoints.",
          "Tune ZAP context files, authentication session tokens, and alert thresholds to minimize false positives.",
        ],
        labScenario:
          "Spin up an ephemeral staging environment, trigger a containerized OWASP ZAP API scan against its Swagger endpoint, simulate an XSS and missing CSP header, and generate an automated vulnerability summary report.",
        keyCommandsOrTools: [
          "docker run -t zaproxy/zap-stable zap-baseline.py -t https://staging.app",
          "zap-api-scan.py -t openapi.json -f openapi",
          "zap-full-scan.py -t https://staging.app -g gen.conf -r report.html",
        ],
      },
      {
        id: "sec-mod-5",
        number: 5,
        stepNumber: "Step 05",
        title: "Software Composition Analysis (SCA) & Container Image Governance",
        focusArea: "Dependency Vulnerabilities, SBOM & Admission Policies",
        summary:
          "Identify known CVEs in third-party libraries and container base images using OWASP Dependency-Check and Grype, generate SBOMs, and enforce Kyverno admission policies.",
        objectives: [
          "Execute Software Composition Analysis (SCA) with OWASP Dependency-Check to detect CVEs in open-source dependencies.",
          "Generate Software Bill of Materials (SBOM) using Syft and scan container images for operating-system vulnerabilities with Grype.",
          "Enforce Kyverno admission control policies in Kubernetes to block deployment of images with unfixed Critical CVEs or running as root.",
          "Automate continuous dependency upgrade monitoring and patch verification.",
        ],
        labScenario:
          "Scan a Docker image containing an outdated package with Grype; generate its CycloneDX SBOM with Syft; deploy a Kyverno ClusterPolicy that intercepts and denies deployment of any container image with Critical CVEs.",
        keyCommandsOrTools: [
          "grype <image-name> --fail-on high",
          "syft <image-name> -o cyclonedx-json > sbom.json",
          "dependency-check --project 'App' --scan ./",
          "kubectl get clusterpolicy -A",
        ],
      },
    ],
  },
];

export const allCategories: LearningCategory[] = [
  "Kubernetes",
  "GitOps & CD",
  "Security",
  "Automation & Architecture",
];
