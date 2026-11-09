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
];

export const allCategories: LearningCategory[] = [
  "Kubernetes",
  "GitOps & CD",
  "Security",
  "Automation & Architecture",
];
