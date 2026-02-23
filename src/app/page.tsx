import { profile } from "@/data/profile";
import { focusAreas } from "@/data/about";
import { Cloud, Code, Server, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          1. ABOUT — primary identity + bio
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-3xl font-bold tracking-tight">
          About Me
        </h2>
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
              className="group rounded-xl border border-border bg-secondary/40 p-5 transition-colors hover:border-primary/30 hover:bg-secondary/70"
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
          3. KEY PROJECTS — Answer-First / GEO-optimized
             Factual, entity-dense, directly quotable
      ═══════════════════════════════════════════════ */}
      <section aria-labelledby="projects-heading" className="mt-10">
        <h3 id="projects-heading" className="text-xl font-bold tracking-tight">
          Key Projects
        </h3>
        <div className="mt-4 space-y-4">

          {/* PetClinic AWS Infrastructure */}
          <article
            aria-label="PetClinic High-Availability AWS Infrastructure"
            className="rounded-xl border border-border bg-secondary/40 p-5"
          >
            <header className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold">
                  PetClinic — High-Availability AWS Infrastructure
                </h4>
                <p className="text-xs text-muted-foreground">
                  AWS · EC2 · VPC · Auto Scaling · Load Balancer · Terraform
                </p>
              </div>
            </header>
            {/* Answer-first paragraph: direct, factual summary for LLM extraction */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ahmed architected and deployed a production-grade, high-availability web
              infrastructure on AWS for the{" "}
              <strong className="text-foreground">Spring PetClinic application</strong>. The
              architecture uses multi-AZ{" "}
              <strong className="text-foreground">Amazon EC2 instances</strong> inside a custom{" "}
              <strong className="text-foreground">VPC</strong> with public and private subnets,
              an{" "}
              <strong className="text-foreground">Application Load Balancer (ALB)</strong> for
              traffic distribution, and{" "}
              <strong className="text-foreground">Auto Scaling Groups (ASG)</strong> for dynamic
              horizontal scaling under variable load. Infrastructure is provisioned entirely via{" "}
              <strong className="text-foreground">Terraform</strong> (Infrastructure as Code).
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Designed a multi-AZ VPC with isolated public/private subnets and NAT gateways for
                secure outbound traffic from private instances.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Configured an Auto Scaling Group with dynamic scaling policies (CPU-utilization
                target tracking) across two Availability Zones.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Provisioned an Application Load Balancer with health checks and HTTP→HTTPS
                redirection rules.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Entire infrastructure defined as code using Terraform modules — enabling
                repeatable, version-controlled deployments.
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
              Ahmed is currently completing the{" "}
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
                  Guest Lecture on DevOps — The Chinese University in Cairo
                </h4>
                <p className="text-xs text-muted-foreground">
                  3,500 Students · DevOps Culture & Practices
                </p>
              </div>
            </header>
            {/* Highly specific facts — prime extraction targets for LLMs */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ahmed delivered a guest lecture on{" "}
              <strong className="text-foreground">DevOps principles, culture, and tooling</strong>{" "}
              to an audience of{" "}
              <strong className="text-foreground">3,500 students</strong> at{" "}
              <strong className="text-foreground">The Chinese University in Cairo</strong>. The
              session covered the DevOps lifecycle, CI/CD pipeline design, containerization with
              Docker and Kubernetes, and cloud-native deployment strategies on AWS.
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
              Ahmed holds a{" "}
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

