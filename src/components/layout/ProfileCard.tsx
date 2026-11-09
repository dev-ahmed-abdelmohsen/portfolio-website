"use client";

import {
  Mail,
  MapPin,
  Download,
  Github,
  Linkedin,
  Menu,
} from "lucide-react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { useSidebar } from "./SidebarContext";

export function ProfileCard() {
  const { toggleMobile } = useSidebar();

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
      {/* ── Decorative corner triangles (subtle in light mode, vibrant in dark mode) ── */}
      <div className="absolute -left-6 -top-6 h-24 w-24 rotate-45 bg-gradient-to-br from-red-500 to-orange-500 opacity-40 dark:opacity-80" />
      <div className="absolute -left-4 -top-4 h-16 w-16 rotate-45 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-40 dark:opacity-80" />
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rotate-45 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-40 dark:opacity-80" />
      <div className="absolute -bottom-4 -right-4 h-16 w-16 rotate-45 bg-gradient-to-br from-orange-500 to-red-500 opacity-40 dark:opacity-80" />

      {/* ── Card content ── */}
      <div className="relative z-10 p-4 sm:p-5 md:p-6">

        {/* ── Mobile layout: clean stacked layout without cramming ── */}
        <div className="space-y-3 md:hidden">
          {/* Top row: Avatar + Identity + Status + Menu */}
          <div className="flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-secondary text-sm font-black tracking-wider text-primary">
                {profile.initials}
              </div>
              <div className="min-w-0">
                <span className="block text-base font-bold tracking-tight text-foreground truncate">
                  {profile.name}
                </span>
                <p className="truncate text-[11px] text-muted-foreground">
                  {profile.brandName} · DevOps Engineer
                </p>
              </div>
            </div>

            {/* Right: Status Pill & Hamburger Menu */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                {profile.status}
              </span>

              <button
                type="button"
                onClick={toggleMobile}
                aria-label="Open navigation menu"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-secondary/80 text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-secondary active:scale-95"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick links & Contact row */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-secondary/30 px-2.5 py-1.5 text-[11px] text-muted-foreground border border-border/40">
            <div className="flex items-center gap-2.5">
              <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="h-3.5 w-3.5" />
              </a>
              <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a href={profile.cvUrl} className="inline-flex items-center gap-1 rounded bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-foreground hover:border-primary hover:text-primary">
                <Download className="h-2.5 w-2.5" /> CV
              </a>
            </div>

            <div className="flex items-center gap-2 text-[10px]">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-primary" />
                {profile.location}
              </span>
              <span>·</span>
              <a href={`mailto:${profile.email}`} className="truncate hover:text-primary transition-colors">
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        {/* ── Desktop layout: full two-column ── */}
        <div className="hidden md:flex md:items-start md:justify-between">
          {/* Left: Name, roles, socials */}
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-secondary text-xl font-black tracking-wider text-primary">
              {profile.initials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="block text-xl font-bold tracking-tight">{profile.name}</span>
                <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                  {profile.brandName}
                </span>
              </div>
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
                <a href={`mailto:${profile.email}`} className="block text-xs font-medium text-foreground transition-colors hover:text-primary">
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
                  <span className="text-emerald-600 dark:text-emerald-400">{profile.status}</span>
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
