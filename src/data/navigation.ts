import { User, FileText, Briefcase, BookOpen, Mail } from "lucide-react";

export const navLinks = [
  { href: "/", label: "About", icon: User },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/portfolio", label: "Portfolio", icon: Briefcase },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
] as const;
