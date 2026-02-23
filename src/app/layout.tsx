import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ProfileCard } from "@/components/layout/ProfileCard";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatusFooter } from "@/components/layout/StatusFooter";
import { PageTransition } from "@/components/layout/PageTransition";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ── Structured data: Schema.org Person ──────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ahmed-abd-elmohsen.tech/#person",
  name: "Ahmed Abd El-Mohsen",
  alternateName: "Hamuchak",
  url: "https://ahmed-abd-elmohsen.tech",
  jobTitle: "DevOps & Cloud Engineer",
  description:
    "DevOps and Cloud Infrastructure Engineer specializing in AWS, Kubernetes, Terraform, Docker, and CI/CD pipelines. Alumnus of the Egyptian E-Learning University (EELU) and NTI Hire Ready DevOps & Cloud Engineering track.",
  image: "https://ahmed-abd-elmohsen.tech/og-image.png",
  email: "mailto:ahmed@ahmed-abd-elmohsen.tech",
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
    "AWS",
    "Amazon Web Services",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Ansible",
    "Linux",
    "Java",
    "Jenkins",
    "CI/CD Pipelines",
    "DevOps",
    "Site Reliability Engineering",
    "Cloud Infrastructure",
    "Infrastructure as Code",
    "Grafana",
    "Prometheus",
    "ELK Stack",
    "GitOps",
    "Auto Scaling",
    "Load Balancing",
    "VPC",
    "EC2",
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
    "https://github.com/ahmed",
    "https://linkedin.com/in/ahmed",
  ],
};

// ── Next.js Metadata API ─────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://ahmed-abd-elmohsen.tech"),
  title: {
    default: "Ahmed (Hamuchak) | DevOps & Cloud Engineer",
    template: "%s | Ahmed – DevOps & Cloud Engineer",
  },
  description:
    "Ahmed (Hamuchak) is a DevOps & Cloud Engineer building high-availability AWS infrastructure, Kubernetes clusters, and CI/CD pipelines. B.Sc. IT from EELU · NTI Hire Ready alumnus.",
  keywords: [
    "Ahmed DevOps Engineer",
    "Hamuchak",
    "DevOps Engineer Egypt",
    "Cloud Engineer",
    "AWS Engineer",
    "Kubernetes Engineer",
    "Terraform",
    "Docker",
    "CI/CD",
    "NTI Hire Ready DevOps",
    "EELU IT Graduate",
    "PetClinic AWS Infrastructure",
    "ahmed-abd-elmohsen.tech",
  ],
  authors: [{ name: "Ahmed Abd El-Mohsen", url: "https://ahmed-abd-elmohsen.tech" }],
  creator: "Ahmed Abd El-Mohsen",
  publisher: "Ahmed Abd El-Mohsen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmed-abd-elmohsen.tech",
    siteName: "Ahmed – DevOps & Cloud Engineer",
    title: "Ahmed (Hamuchak) | DevOps & Cloud Engineer",
    description:
      "DevOps & Cloud Engineer • AWS • Kubernetes • Terraform • Docker • CI/CD. NTI Hire Ready alumnus. B.Sc. IT from EELU.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed – DevOps & Cloud Engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed (Hamuchak) | DevOps & Cloud Engineer",
    description:
      "DevOps & Cloud Engineer | AWS · Kubernetes · Terraform · Docker · CI/CD pipelines",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ahmed-abd-elmohsen.tech",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-3 py-4 pb-24 sm:px-4 sm:py-5 md:px-8 md:py-6 md:pb-10 lg:px-12">
          {/* ── Top Profile Header (persists across navigations) ── */}
          <header className="mb-4 flex flex-col gap-4 md:mb-6 md:flex-row">
            {/* Left spacer aligned to sidebar width on desktop */}
            <div className="hidden shrink-0 md:block md:w-[120px]" />
            {/* Profile card stretches across the main area */}
            <div className="flex-1">
              <ProfileCard />
            </div>
          </header>

          {/* ── Body: Sidebar + Dynamic Content ── */}
          <div className="flex flex-1 gap-5 md:flex-row">
            {/* Sidebar — desktop only (mobile uses fixed bottom bar inside Sidebar component) */}
            <aside className="hidden shrink-0 md:block md:w-[120px]">
              <div className="sticky top-6">
                <Sidebar />
              </div>
            </aside>

            {/* Dynamic main content container */}
            <main className="min-w-0 flex-1">
              <div className="min-h-[60vh] rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-10">
                <PageTransition>{children}</PageTransition>
              </div>

              {/* ── Desktop Footer — inside content flow ── */}
              <div className="hidden md:block">
                <StatusFooter />
              </div>
            </main>
          </div>
        </div>

        {/* ── Mobile: fixed bottom bar (single instance) ── */}
        <div className="md:hidden">
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
