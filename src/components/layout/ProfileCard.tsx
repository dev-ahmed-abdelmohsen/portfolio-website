import {
  Mail,
  MapPin,
  Download,
  Activity,
  Github,
  Linkedin,
} from "lucide-react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

export function ProfileCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
      {/* ── Decorative corner triangles (like target) ── */}
      <div className="absolute -left-6 -top-6 h-24 w-24 rotate-45 bg-gradient-to-br from-red-500 to-orange-500 opacity-80" />
      <div className="absolute -left-4 -top-4 h-16 w-16 rotate-45 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-80" />
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rotate-45 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-80" />
      <div className="absolute -bottom-4 -right-4 h-16 w-16 rotate-45 bg-gradient-to-br from-orange-500 to-red-500 opacity-80" />

      {/* ── Card content ── */}
      <div className="relative z-10 p-4 sm:p-5 md:p-6">

        {/* ── Mobile layout: compact single row ── */}
        <div className="flex items-center justify-between md:hidden">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-secondary text-lg font-bold text-primary">
              {profile.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <h1 className="text-base font-bold tracking-tight">{profile.name}</h1>
              <p className="truncate text-[10px] text-muted-foreground">
                {profile.roles[0]} · {profile.roles[1]}
              </p>
              <div className="mt-1 flex items-center gap-2">
                <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="GitHub">
                  <Github className="h-3.5 w-3.5" />
                </a>
                <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
          {/* Mobile quick stats — right side */}
          <div className="flex shrink-0 flex-col items-end gap-1.5 text-right">
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <MapPin className="h-3 w-3 text-primary" />
              {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="max-w-[130px] truncate text-[10px] text-muted-foreground hover:text-primary">
              {profile.email}
            </a>
            <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {profile.status}
            </span>
          </div>
        </div>

        {/* ── Desktop layout: full two-column ── */}
        <div className="hidden md:flex md:items-start md:justify-between">
          {/* Left: Name, roles, socials */}
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-secondary text-2xl font-bold text-primary">
              {profile.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">{profile.name}</h1>
              <p className="mt-0.5 text-xs text-muted-foreground">{profile.roles.join(" | ")}</p>
              <div className="mt-2 flex items-center gap-2">
                <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
                <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Quick details grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-right">
            <div className="flex flex-row-reverse items-center gap-2">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Email</p>
                <a href={`mailto:${profile.email}`} className="block max-w-[150px] truncate text-xs font-medium text-foreground transition-colors hover:text-primary">
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center gap-2">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">CV</p>
                <a href={profile.cvUrl} className="inline-flex items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-primary">
                  Download <Download className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center gap-2">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Location</p>
                <p className="flex items-center justify-end gap-1 text-xs font-medium">
                  <MapPin className="h-3 w-3 text-primary" />
                  {profile.location}
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center gap-2">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Status</p>
                <p className="flex items-center justify-end gap-1.5 text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {profile.status}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Theme toggle — centered, always visible ── */}
        <div className="mt-3 flex justify-center border-t border-border/40 pt-3">
          <ThemeToggle />
        </div>

      </div>
    </div>
  );
}
