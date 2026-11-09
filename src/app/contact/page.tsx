import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Collaboration | Ahmed Shams – Shams Systems",
  description:
    "Get in touch with Ahmed Shams (ashams3719262@gmail.com) for DevOps engineering, AWS cloud architecture, Kubernetes consulting, or GitOps/DevSecOps advisory on shams.systems.",
  keywords: [
    "Ahmed Shams",
    "Contact Ahmed Shams",
    "Shams Systems",
    "shams.systems",
    "ashams3719262@gmail.com",
    "احمد شمس",
    "أحمد شمس",
    "Hire DevOps Engineer",
    "AWS Consulting Egypt",
    "Kubernetes Contractor",
    "DevSecOps Consultant",
  ],
  alternates: {
    canonical: "https://shams.systems/contact",
  },
  openGraph: {
    title: "Contact & Collaboration | Ahmed Shams – Shams Systems",
    description:
      "Get in touch with Ahmed Shams for DevOps, Cloud, and SRE opportunities.",
    url: "https://shams.systems/contact",
  },
};

export default function ContactPage() {
  return (
    <section>
      {/* ── Section Title (Single H1) ── */}
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <div className="mt-2 h-1 w-10 rounded-full bg-primary" />
      <p className="mt-3 text-base text-muted-foreground">
        Have a project in mind, an infrastructure challenge, or an opportunity? Reach out directly.
      </p>

      {/* ── Contact Form Component ── */}
      <ContactForm />
    </section>
  );
}
