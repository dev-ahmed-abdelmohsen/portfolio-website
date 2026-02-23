export type ProjectTag =
  | "AWS"
  | "DevOps"
  | "Kubernetes"
  | "Full-Stack"
  | "Community"
  | "Healthcare";

export interface Project {
  title: string;
  description: string;
  tags: ProjectTag[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Scalable 3-Tier Web Architecture on AWS",
    description:
      "Designed and deployed a highly available 3-tier web application on AWS using EC2, ALB, RDS, and Auto Scaling Groups with infrastructure as code via Terraform.",
    tags: ["AWS", "DevOps", "Kubernetes"],
    link: "#",
  },
  {
    title: "Healthcare Startup Platform",
    description:
      "Built a full-stack platform connecting nurses with patients, featuring real-time scheduling, secure messaging, and role-based access control.",
    tags: ["Full-Stack", "Healthcare", "AWS"],
    link: "#",
  },
  {
    title: '"Intro to DevOps" – Talk at Chinese University in Cairo',
    description:
      "Delivered a presentation on DevOps fundamentals, CI/CD, and cloud culture to an audience of 3,500 students (Feb 2026).",
    tags: ["Community", "DevOps"],
  },
] as const;

export const allTags: ProjectTag[] = [
  "AWS",
  "DevOps",
  "Kubernetes",
  "Full-Stack",
  "Community",
  "Healthcare",
];
