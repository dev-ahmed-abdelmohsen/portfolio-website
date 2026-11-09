import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ── Structured data: Schema.org Person & WebSite ──────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://shams.systems/#person",
  name: "Ahmed Shams",
  alternateName: [
    "أحمد شمس",
    "احمد شمس",
    "Shams Systems",
    "Ahmed Shams DevOps",
    "Hamuchak",
  ],
  url: "https://shams.systems",
  jobTitle: "DevOps & Hybrid Infrastructure Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Shams Systems",
    url: "https://shams.systems",
  },
  description:
    "Ahmed Shams (أحمد شمس) is a DevOps & Hybrid Infrastructure Engineer, founder of Shams Systems (shams.systems), specializing in on-premises infrastructure, private cloud platforms, GitOps, and workflow automation with n8n and MCP.",
  image: "https://shams.systems/og-image.png",
  email: "mailto:ashams3719262@gmail.com",
  nationality: "Egyptian",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Egyptian E-Learning University",
      alternateName: "EELU",
      url: "https://www.eelu.edu.eg",
    },
    {
      "@type": "EducationalOrganization",
      name: "National Telecommunication Institute",
      alternateName: "NTI",
      description: "NTI Hire Ready Track – DevOps & Cloud Engineering",
    },
  ],
  knowsAbout: [
    "Ahmed Shams",
    "أحمد شمس",
    "احمد شمس",
    "Shams Systems",
    "shams.systems",
    "On-Premises Infrastructure",
    "Hybrid Cloud",
    "Bare-Metal Virtualization",
    "Workflow Automation",
    "n8n",
    "Model Context Protocol",
    "MCP",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Ansible",
    "GitOps",
    "ArgoCD",
    "DevSecOps",
    "AWS Solutions Architecture",
    "Grype",
    "Falco",
    "Linux Systems Engineering",
    "Jenkins",
    "CI/CD Pipelines",
    "Site Reliability Engineering",
    "Grafana",
    "Prometheus",
    "ELK Stack",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "B.Sc. in Information Technology",
    credentialCategory: "degree",
    recognizedBy: {
      "@type": "CollegeOrUniversity",
      name: "Egyptian E-Learning University",
    },
  },
  sameAs: [
    "https://github.com/dev-ahmed-abdelmohsen",
    "https://www.linkedin.com/in/dev-ahmed-abdelmohsen",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://shams.systems/#website",
  url: "https://shams.systems",
  name: "Shams Systems | Ahmed Shams",
  alternateName: [
    "Shams Systems",
    "shams.systems",
    "Ahmed Shams",
    "أحمد شمس",
    "احمد شمس",
  ],
  description:
    "Official website, portfolio, and technical documentation of Ahmed Shams (أحمد شمس) – DevOps & Hybrid Infrastructure Engineer.",
  publisher: {
    "@id": "https://shams.systems/#person",
  },
  inLanguage: ["en", "ar"],
};

// ── Next.js Metadata API ─────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://shams.systems"),
  title: {
    default: "Ahmed Shams (Shams Systems) | DevOps & Hybrid Infrastructure Engineer",
    template: "%s | Ahmed Shams – Shams Systems",
  },
  description:
    "Ahmed Shams (أحمد شمس) – Shams Systems (shams.systems). DevOps & Hybrid Infrastructure Engineer specializing in on-premises infrastructure, private cloud platforms, GitOps, and workflow automation with n8n and MCP.",
  keywords: [
    "Ahmed Shams",
    "ahmed shams",
    "AHMED SHAMS",
    "احمد شمس",
    "أحمد شمس",
    "Shams Systems",
    "shams systems",
    "SHAMS SYSTEMS",
    "shams.systems",
    "https://shams.systems",
    "Ahmed Shams DevOps",
    "DevOps Hybrid Infrastructure",
    "On-Premises DevOps",
    "n8n Automation",
    "Model Context Protocol",
    "MCP Automation",
    "مهندس احمد شمس",
    "احمد شمس ديف اوبس",
    "GitOps Engineer",
    "DevSecOps Specialist",
    "ArgoCD Kubernetes",
    "Terraform",
    "Ansible",
    "CI/CD",
  ],
  authors: [{ name: "Ahmed Shams", url: "https://shams.systems" }],
  creator: "Ahmed Shams",
  publisher: "Ahmed Shams (Shams Systems)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shams.systems",
    siteName: "Shams Systems | Ahmed Shams",
    title: "Ahmed Shams (Shams Systems) | DevOps & Hybrid Infrastructure Engineer",
    description:
      "Ahmed Shams (أحمد شمس) – Shams Systems. DevOps & Hybrid Infrastructure Engineer specializing in on-premises systems, GitOps, and workflow automation with n8n & MCP.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Shams – Shams Systems portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Shams (Shams Systems) | DevOps & Hybrid Infrastructure Engineer",
    description:
      "Ahmed Shams | Shams Systems | DevOps & Hybrid Infrastructure Engineer | On-Premises · GitOps · n8n · MCP · shams.systems",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://shams.systems",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");}else{document.documentElement.classList.remove("light");document.documentElement.classList.add("dark");}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
