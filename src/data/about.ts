import { Cloud, Container, Activity, Code } from "lucide-react";

export const focusAreas = [
  {
    icon: Container,
    title: "DevOps",
    description:
      "I enjoy to improve the speed and quality of delivery, automate and achieve CI/CD pipelines with modern tooling.",
  },
  {
    icon: Cloud,
    title: "Cloud Engineer",
    description:
      "I enjoy design, secure and maintenance of an organization's cloud-based infrastructure and application on AWS.",
  },
  {
    icon: Activity,
    title: "SRE",
    description:
      "I curious the processes and tools that ensure the scalability, reliability and availability of software systems.",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "I enjoy learning software development either for personal or specific purposes — Back-end & Full-stack Java.",
  },
] as const;
