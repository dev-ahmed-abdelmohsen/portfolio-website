export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "code"; language: string; text: string }
  | { type: "list"; items: string[] }
  | { type: "ordered-list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | {
      type: "callout";
      variant: "info" | "warning" | "tip" | "danger";
      text: string;
    }
  | { type: "divider" };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-kubernetes",
    title: "Getting Started with Kubernetes: A Practical Guide",
    excerpt:
      "A hands-on walkthrough of deploying your first application on Kubernetes, from pods to services to ingress.",
    date: "2026-02-10",
    tags: ["Kubernetes", "DevOps"],
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "Kubernetes (K8s) has become the de-facto standard for container orchestration in production environments. Whether you're running a single microservice or a fleet of hundreds, Kubernetes provides the primitives to deploy, scale, and manage containerized applications with confidence.",
      },
      {
        type: "callout",
        variant: "info",
        text: "This guide assumes basic familiarity with Docker and containers. If you're new to Docker, I'd recommend getting comfortable with building and running images before diving in.",
      },
      {
        type: "heading",
        text: "Core Concepts You Must Know",
      },
      {
        type: "paragraph",
        text: "Before touching kubectl, let's establish the mental model. Kubernetes introduces several abstractions that map closely to how you think about running applications:",
      },
      {
        type: "list",
        items: [
          "Pod — the smallest deployable unit, wrapping one or more containers that share network and storage",
          "Deployment — declares desired state (how many replicas, which image) and reconciles continuously",
          "Service — gives your pods a stable network identity and load balances traffic between them",
          "Ingress — routes external HTTP/HTTPS traffic to the right Service based on rules",
          "ConfigMap / Secret — externalise configuration and sensitive data away from container images",
          "Namespace — logical isolation between teams, environments, or projects within a single cluster",
        ],
      },
      {
        type: "heading",
        text: "Setting Up a Local Cluster",
      },
      {
        type: "paragraph",
        text: "The fastest way to get a Kubernetes cluster locally is with kind (Kubernetes IN Docker) or minikube. I prefer kind for its simplicity and speed:",
      },
      {
        type: "code",
        language: "bash",
        text: `# Install kind (macOS/Linux)
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.22.0/kind-linux-amd64
chmod +x ./kind && sudo mv ./kind /usr/local/bin/kind

# Create a cluster
kind create cluster --name dev

# Verify it's running
kubectl cluster-info --context kind-dev
kubectl get nodes`,
      },
      {
        type: "heading",
        text: "Your First Deployment",
      },
      {
        type: "paragraph",
        text: "Let's deploy a simple Nginx application. Instead of using imperative commands, we'll write declarative YAML — the Kubernetes way:",
      },
      {
        type: "code",
        language: "yaml",
        text: `# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-app
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.25-alpine
          ports:
            - containerPort: 80
          resources:
            requests:
              cpu: "50m"
              memory: "64Mi"
            limits:
              cpu: "200m"
              memory: "128Mi"`,
      },
      {
        type: "callout",
        variant: "tip",
        text: "Always set resource requests and limits on your containers. Without them, a single noisy pod can starve the entire node of resources.",
      },
      {
        type: "code",
        language: "bash",
        text: `# Apply the manifest
kubectl apply -f deployment.yaml

# Watch pods come up
kubectl get pods -w

# Check rollout status
kubectl rollout status deployment/nginx-app`,
      },
      {
        type: "heading",
        text: "Exposing with a Service",
      },
      {
        type: "paragraph",
        text: "A Deployment on its own is not reachable. We need a Service to assign a stable IP and DNS name, and to load balance traffic across the pods:",
      },
      {
        type: "code",
        language: "yaml",
        text: `# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-svc
spec:
  selector:
    app: nginx        # matches our Deployment's pod labels
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP     # internal only; use LoadBalancer for cloud`,
      },
      {
        type: "heading",
        text: "Adding an Ingress Layer",
      },
      {
        type: "paragraph",
        text: "For HTTP routing, deploy an Ingress controller (nginx-ingress is the most common) and then define routing rules:",
      },
      {
        type: "code",
        language: "yaml",
        text: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
    - host: myapp.local
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: nginx-svc
                port:
                  number: 80`,
      },
      {
        type: "heading",
        text: "Scaling and Self-Healing",
      },
      {
        type: "paragraph",
        text: "One of Kubernetes' superpowers is automatic reconciliation. If a node dies or a pod crashes, the control plane reschedules it. Scaling is a one-liner:",
      },
      {
        type: "code",
        language: "bash",
        text: `# Scale manually
kubectl scale deployment nginx-app --replicas=5

# Enable Horizontal Pod Autoscaler (HPA)
kubectl autoscale deployment nginx-app \\
  --cpu-percent=60 \\
  --min=3 \\
  --max=10`,
      },
      {
        type: "callout",
        variant: "warning",
        text: "HPA requires the metrics-server to be installed in your cluster. Run: kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml",
      },
      {
        type: "heading",
        text: "Next Steps",
      },
      {
        type: "ordered-list",
        items: [
          "Learn Helm for packaging and deploying complex applications",
          "Explore NetworkPolicies to restrict pod-to-pod communication",
          "Set up RBAC to control who can do what in your cluster",
          "Try GitOps workflows with ArgoCD or Flux",
          "Dive into StatefulSets for databases and stateful workloads",
        ],
      },
      {
        type: "quote",
        text: "Kubernetes is not about containers — it's about building reliable, self-healing distributed systems. The containers are just the packaging.",
        author: "Kelsey Hightower",
      },
    ],
  },
  {
    slug: "terraform-aws-infrastructure",
    title: "Infrastructure as Code: Terraform on AWS",
    excerpt:
      "How I use Terraform to provision and manage scalable AWS infrastructure with reusable modules and remote state.",
    date: "2026-01-20",
    tags: ["AWS", "Terraform", "IaC"],
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "Managing cloud infrastructure by clicking around the AWS console works fine at the start. But the moment you need to reproduce an environment, audit a change, or roll back after an incident, you feel the pain immediately. Infrastructure as Code (IaC) with Terraform solves all three.",
      },
      {
        type: "heading",
        text: "Why Terraform Over CloudFormation?",
      },
      {
        type: "paragraph",
        text: "CloudFormation is AWS-native and well-integrated, but Terraform's provider ecosystem spans every major cloud and SaaS. Your team can manage AWS, Cloudflare DNS, GitHub repos, and Datadog monitors all in one unified workflow.",
      },
      {
        type: "list",
        items: [
          "HCL is more readable than JSON/YAML CloudFormation templates",
          "terraform plan shows a diff before applying — no surprises",
          "State management gives you a source of truth for what exists",
          "Modules let you build reusable infrastructure components",
          "Works with AWS, GCP, Azure, Kubernetes, GitHub, and 3,000+ providers",
        ],
      },
      {
        type: "heading",
        text: "Project Structure That Scales",
      },
      {
        type: "paragraph",
        text: "A flat single-file approach breaks down fast. Here's the structure I use across production projects:",
      },
      {
        type: "code",
        language: "bash",
        text: `infra/
├── environments/
│   ├── dev/
│   │   ├── main.tf          # calls modules
│   │   ├── variables.tf
│   │   └── terraform.tfvars
│   └── prod/
│       ├── main.tf
│       └── terraform.tfvars
└── modules/
    ├── vpc/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    ├── eks/
    └── rds/`,
      },
      {
        type: "heading",
        text: "Remote State with S3 + DynamoDB",
      },
      {
        type: "callout",
        variant: "warning",
        text: "Never use local state in a team environment. If two engineers run apply simultaneously without state locking, you will corrupt your infrastructure state.",
      },
      {
        type: "code",
        language: "hcl",
        text: `# backend.tf
terraform {
  backend "s3" {
    bucket         = "my-company-tfstate"
    key            = "prod/network/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-lock"  # state locking
  }
}`,
      },
      {
        type: "code",
        language: "bash",
        text: `# One-time setup: create the S3 bucket and DynamoDB table
aws s3api create-bucket \\
  --bucket my-company-tfstate \\
  --region us-east-1

aws s3api put-bucket-versioning \\
  --bucket my-company-tfstate \\
  --versioning-configuration Status=Enabled

aws dynamodb create-table \\
  --table-name terraform-lock \\
  --attribute-definitions AttributeName=LockID,AttributeType=S \\
  --key-schema AttributeName=LockID,KeyType=HASH \\
  --billing-mode PAY_PER_REQUEST`,
      },
      {
        type: "heading",
        text: "A Reusable VPC Module",
      },
      {
        type: "code",
        language: "hcl",
        text: `# modules/vpc/main.tf
resource "aws_vpc" "main" {
  cidr_block           = var.cidr
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = merge(var.tags, { Name = "\${var.name}-vpc" })
}

resource "aws_subnet" "public" {
  count             = length(var.azs)
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.cidr, 8, count.index)
  availability_zone = var.azs[count.index]
  map_public_ip_on_launch = true

  tags = { Name = "\${var.name}-public-\${var.azs[count.index]}" }
}`,
      },
      {
        type: "heading",
        text: "The Workflow: Plan → Review → Apply",
      },
      {
        type: "ordered-list",
        items: [
          "terraform init — downloads providers and configures backend",
          "terraform fmt -recursive — formats all .tf files consistently",
          "terraform validate — catches syntax and semantic errors",
          "terraform plan -out=tfplan — generates a diff, saves to file",
          "Code review the plan output in your PR",
          "terraform apply tfplan — applies the exact reviewed plan",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "Use terraform plan -out=tfplan and then terraform apply tfplan so the apply executes exactly what was reviewed. A plain terraform apply re-plans, which can introduce drift.",
      },
      {
        type: "quote",
        text: "The highest form of infrastructure management is when your git history is the audit log of every change ever made to your cloud.",
      },
    ],
  },
  {
    slug: "cicd-pipeline-jenkins",
    title: "Building a Production-Grade CI/CD Pipeline with Jenkins",
    excerpt:
      "Step-by-step guide to creating a robust Jenkins pipeline with Docker agents, automated testing, and deployment.",
    date: "2025-12-15",
    tags: ["CI/CD", "Jenkins", "DevOps"],
    readTime: "10 min read",
    content: [
      {
        type: "paragraph",
        text: "A production CI/CD pipeline is not a luxury — it's the backbone of any engineering team that ships with confidence. Jenkins, despite being one of the older players, remains unmatched in flexibility. Combined with Docker agents and declarative pipelines, you can build a system that is reproducible, scalable, and auditable.",
      },
      {
        type: "heading",
        text: "Declarative vs Scripted Pipelines",
      },
      {
        type: "paragraph",
        text: "Jenkins supports two syntaxes. Always prefer Declarative — it's structured, validates at parse time, and is far easier to maintain by the whole team:",
      },
      {
        type: "code",
        language: "groovy",
        text: `// Jenkinsfile (Declarative)
pipeline {
  agent {
    docker {
      image 'node:20-alpine'
      args '-v /tmp:/tmp'
    }
  }

  environment {
    APP_ENV   = 'production'
    REGISTRY  = 'registry.mycompany.com'
    IMAGE_TAG = "\${env.GIT_COMMIT[0..7]}"
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm ci --prefer-offline'
      }
    }

    stage('Lint & Test') {
      parallel {
        stage('Lint') {
          steps { sh 'npm run lint' }
        }
        stage('Unit Tests') {
          steps {
            sh 'npm test -- --coverage'
            junit 'coverage/junit.xml'
          }
        }
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }

    stage('Docker Build & Push') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'registry-creds',
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'DOCKER_PASS'
        )]) {
          sh '''
            echo "$DOCKER_PASS" | docker login $REGISTRY -u "$DOCKER_USER" --password-stdin
            docker build -t $REGISTRY/myapp:$IMAGE_TAG .
            docker push $REGISTRY/myapp:$IMAGE_TAG
          '''
        }
      }
    }

    stage('Deploy to Staging') {
      steps {
        sh 'kubectl set image deployment/myapp myapp=$REGISTRY/myapp:$IMAGE_TAG -n staging'
        sh 'kubectl rollout status deployment/myapp -n staging --timeout=120s'
      }
    }

    stage('Smoke Tests') {
      steps {
        sh 'npm run test:smoke -- --env staging'
      }
    }

    stage('Deploy to Production') {
      when { branch 'main' }
      input { message "Deploy to production?"; ok "Ship it!" }
      steps {
        sh 'kubectl set image deployment/myapp myapp=$REGISTRY/myapp:$IMAGE_TAG -n production'
        sh 'kubectl rollout status deployment/myapp -n production --timeout=300s'
      }
    }
  }

  post {
    success { slackSend color: 'good', message: "✅ Pipeline passed: \${env.JOB_NAME} [\${env.BUILD_NUMBER}]" }
    failure { slackSend color: 'danger', message: "❌ Pipeline failed: \${env.JOB_NAME} [\${env.BUILD_NUMBER}]" }
    always  { cleanWs() }
  }
}`,
      },
      {
        type: "heading",
        text: "Docker Agents: Why They Matter",
      },
      {
        type: "paragraph",
        text: "Running builds directly on the Jenkins host is a recipe for dependency conflicts and security issues. Docker agents give each build a clean, isolated environment:",
      },
      {
        type: "list",
        items: [
          "Every build starts from a known-good image — no snowflake agents",
          "Different pipelines can use different language runtimes simultaneously",
          "The build environment is version-controlled alongside the code",
          "Agents are ephemeral — no leftover state between builds",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "Build your own base agent images with your company's security tools, certificates, and CLI tools pre-installed. Store them in your internal registry to avoid slow pulls from Docker Hub.",
      },
      {
        type: "heading",
        text: "Credential Management",
      },
      {
        type: "callout",
        variant: "danger",
        text: "Never hardcode credentials, tokens, or secrets in your Jenkinsfile. Use Jenkins' built-in Credentials Store or integrate with HashiCorp Vault.",
      },
      {
        type: "code",
        language: "groovy",
        text: `// Fetching secrets from HashiCorp Vault
stage('Deploy') {
  steps {
    withVault(configuration: [vaultUrl: 'https://vault.internal'],
              vaultSecrets: [[path: 'secret/prod/db', secretValues: [
                [envVar: 'DB_PASSWORD', vaultKey: 'password']
              ]]]) {
      sh 'deploy.sh'
    }
  }
}`,
      },
      {
        type: "heading",
        text: "Parallel Testing for Speed",
      },
      {
        type: "paragraph",
        text: "The single biggest win in any CI pipeline is parallelism. Lint, unit tests, security scans — run them all at the same time. The pipeline duration equals the slowest job, not the sum of all jobs:",
      },
      {
        type: "code",
        language: "groovy",
        text: `stage('Validate') {
  parallel {
    stage('Unit Tests')    { steps { sh 'make test-unit' } }
    stage('Lint')          { steps { sh 'make lint' } }
    stage('SAST Scan')     { steps { sh 'make snyk-test' } }
    stage('License Check') { steps { sh 'make license-check' } }
  }
}`,
      },
      {
        type: "quote",
        text: "A CI pipeline exists not to catch bugs — that's a nice side effect. It exists to protect your main branch so that any revision in history is always deployable.",
      },
    ],
  },
  {
    slug: "monitoring-with-grafana",
    title: "Observability Stack: Grafana, Prometheus & Loki",
    excerpt:
      "Setting up a complete monitoring and logging stack for your Kubernetes cluster using the Grafana ecosystem.",
    date: "2025-11-28",
    tags: ["Monitoring", "Grafana", "Kubernetes"],
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "Deploying to Kubernetes without observability is flying blind. When something breaks at 3 AM, the difference between a 5-minute and a 5-hour incident is having the right metrics, logs, and traces at your fingertips. The Grafana stack — Prometheus, Loki, and Grafana itself — is the most widely adopted open-source observability solution for Kubernetes.",
      },
      {
        type: "heading",
        text: "The Three Pillars of Observability",
      },
      {
        type: "list",
        items: [
          "Metrics (Prometheus) — numeric time-series data: CPU, memory, request rate, error rate, latency",
          "Logs (Loki) — structured event streams from your applications and infrastructure",
          "Traces (Tempo) — distributed request tracing across microservices",
        ],
      },
      {
        type: "heading",
        text: "Installing the Stack with Helm",
      },
      {
        type: "paragraph",
        text: "The kube-prometheus-stack Helm chart installs everything — Prometheus, Alertmanager, Grafana, and a set of pre-built dashboards — in one command:",
      },
      {
        type: "code",
        language: "bash",
        text: `# Add the Helm repo
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

# Install kube-prometheus-stack
helm upgrade --install monitoring prometheus-community/kube-prometheus-stack \\
  --namespace monitoring \\
  --create-namespace \\
  --values monitoring-values.yaml \\
  --wait`,
      },
      {
        type: "code",
        language: "yaml",
        text: `# monitoring-values.yaml
grafana:
  adminPassword: "changeme-in-vault"
  ingress:
    enabled: true
    hosts: ["grafana.internal.mycompany.com"]
  persistence:
    enabled: true
    size: 10Gi

prometheus:
  prometheusSpec:
    retention: 30d
    storageSpec:
      volumeClaimTemplate:
        spec:
          resources:
            requests:
              storage: 100Gi

alertmanager:
  config:
    route:
      receiver: slack-notifications
    receivers:
      - name: slack-notifications
        slack_configs:
          - api_url: "https://hooks.slack.com/services/..."
            channel: "#alerts"`,
      },
      {
        type: "heading",
        text: "Adding Loki for Log Aggregation",
      },
      {
        type: "paragraph",
        text: "Loki is Prometheus for logs — it indexes only metadata (labels) rather than full text, making it incredibly storage-efficient:",
      },
      {
        type: "code",
        language: "bash",
        text: `helm repo add grafana https://grafana.github.io/helm-charts

# Install Loki stack (Loki + Promtail log collector)
helm upgrade --install loki grafana/loki-stack \\
  --namespace monitoring \\
  --set loki.persistence.enabled=true \\
  --set loki.persistence.size=50Gi \\
  --set promtail.enabled=true`,
      },
      {
        type: "heading",
        text: "Writing Effective PromQL Queries",
      },
      {
        type: "paragraph",
        text: "PromQL is the query language for Prometheus. Here are the queries I use in every production dashboard:",
      },
      {
        type: "code",
        language: "promql",
        text: `# Request rate per second (5m rolling window)
sum(rate(http_requests_total{job="my-service"}[5m])) by (status_code)

# 99th percentile latency
histogram_quantile(0.99,
  sum(rate(http_request_duration_seconds_bucket{job="my-service"}[5m])) by (le)
)

# Error rate as a percentage
100 * sum(rate(http_requests_total{status_code=~"5.."}[5m]))
  /
sum(rate(http_requests_total[5m]))

# Memory usage vs limit
container_memory_working_set_bytes{namespace="production"}
  /
container_spec_memory_limit_bytes{namespace="production"}`,
      },
      {
        type: "callout",
        variant: "tip",
        text: "Use the RED method for service dashboards: Rate (requests/sec), Errors (error %), Duration (latency percentiles). These three metrics surface 90% of production issues.",
      },
      {
        type: "heading",
        text: "Alerting That Doesn't Cry Wolf",
      },
      {
        type: "paragraph",
        text: "Alert fatigue kills on-call effectiveness. Each alert should be actionable and map to a customer-impacting condition:",
      },
      {
        type: "code",
        language: "yaml",
        text: `# alerting-rules.yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: service-alerts
  namespace: monitoring
spec:
  groups:
    - name: service.rules
      rules:
        - alert: HighErrorRate
          expr: |
            (
              sum(rate(http_requests_total{status=~"5.."}[5m]))
              /
              sum(rate(http_requests_total[5m]))
            ) > 0.05
          for: 5m
          labels:
            severity: critical
          annotations:
            summary: "Error rate above 5% for 5 minutes"
            runbook: "https://runbooks.internal/high-error-rate"`,
      },
      {
        type: "quote",
        text: "If your on-call engineer is getting paged more than once a night on average, your alerting is broken — not your system.",
        author: "Google SRE Book",
      },
    ],
  },
];

