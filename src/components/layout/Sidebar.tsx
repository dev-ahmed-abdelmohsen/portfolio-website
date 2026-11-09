"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PanelLeftClose,
  PanelLeftOpen,
  X,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useSidebar } from "./SidebarContext";
import { ThemeToggle } from "./ThemeToggle";

export function Sidebar() {
  const pathname = usePathname();
  const { isCollapsed, toggleCollapse, isMobileOpen, closeMobile } =
    useSidebar();

  return (
    <>
      {/* ── Desktop: Collapsible Nav Rail ── */}
      <nav
        className="hidden flex-col gap-2 md:flex"
        aria-label="Desktop primary navigation"
      >
        {/* Toggle Collapse Button */}
        <button
          type="button"
          onClick={toggleCollapse}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={cn(
            "flex items-center justify-center rounded-xl border border-border/70 bg-secondary/50 text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:bg-secondary hover:text-foreground active:scale-95",
            isCollapsed
              ? "h-10 w-10 mx-auto"
              : "w-full py-2 px-2 text-[10px] font-semibold tracking-wide gap-1.5 uppercase"
          )}
        >
          {isCollapsed ? (
            <PanelLeftOpen className="h-4 w-4 text-primary" />
          ) : (
            <>
              <PanelLeftClose className="h-3.5 w-3.5" />
              <span>Collapse</span>
            </>
          )}
        </button>

        {/* Navigation Items */}
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          if (isCollapsed) {
            // Collapsed: sleek centered square icon with hover tooltip
            return (
              <Link
                key={href}
                href={href}
                aria-label={label}
                className={cn(
                  "group relative flex h-11 w-11 mx-auto items-center justify-center rounded-xl border transition-all duration-200",
                  isActive
                    ? "border-primary bg-gradient-to-br from-primary to-blue-600 text-primary-foreground shadow-md shadow-primary/25"
                    : "border-border/60 bg-secondary/60 text-muted-foreground hover:border-primary/40 hover:bg-secondary hover:text-foreground dark:shadow-none"
                )}
              >
                <Icon
                  className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                  strokeWidth={isActive ? 2 : 1.75}
                />
                {/* Tooltip flyout on hover */}
                <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-md border border-border bg-popover px-2.5 py-1 text-xs font-semibold text-popover-foreground shadow-lg group-hover:block z-50">
                  {label}
                </span>
              </Link>
            );
          }

          // Expanded: full card nav
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group flex flex-col items-center justify-center gap-1.5 rounded-2xl px-2.5 py-4 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 border",
                isActive
                  ? "border-primary bg-gradient-to-br from-primary to-blue-600 text-primary-foreground shadow-lg shadow-primary/25"
                  : "border-border/60 bg-secondary/60 text-muted-foreground shadow-sm hover:border-primary/40 hover:bg-secondary hover:text-foreground dark:shadow-none"
              )}
            >
              <Icon
                className={cn(
                  "h-6 w-6 transition-transform duration-200 group-hover:scale-110",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                )}
                strokeWidth={1.5}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* ── Mobile: Fixed bottom bar ── */}
      <nav
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-border bg-card/95 px-1 py-1.5 backdrop-blur-md shadow-lg md:hidden"
        aria-label="Mobile quick navigation"
      >
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-1 flex-col items-center gap-0.5 rounded-lg px-1 py-1 text-[9px] sm:text-[10px] font-medium transition-all text-center",
                isActive
                  ? "bg-primary/15 text-primary font-semibold"
                  : "text-muted-foreground active:scale-95 active:text-foreground hover:text-foreground"
              )}
            >
              <Icon
                className={cn(
                  "h-4 w-4 sm:h-5 sm:w-5",
                  isActive && "drop-shadow-sm"
                )}
              />
              <span className="truncate max-w-[54px]">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* ── Mobile: Slide-in Drawer Backdrop ── */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ── Mobile: Slide-in Drawer Content ── */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[280px] max-w-[85vw] flex-col border-r border-border bg-card/95 p-5 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out md:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation drawer"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border/60">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary bg-primary/10 text-xs font-black text-primary">
              {profile.initials}
            </div>
            <div>
              <span className="font-bold text-sm text-foreground block">
                {profile.name}
              </span>
              <span className="text-[10px] text-muted-foreground block font-mono">
                {profile.brandName}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={closeMobile}
            aria-label="Close navigation menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav
          className="flex-1 overflow-y-auto py-5 space-y-1.5"
          aria-label="Mobile drawer navigation"
        >
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                onClick={closeMobile}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Icon
                  className="h-5 w-5 shrink-0"
                  strokeWidth={isActive ? 2 : 1.75}
                />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer with Appearance, Socials & CV */}
        <div className="pt-4 border-t border-border/60 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-medium">Appearance</span>
            <ThemeToggle />
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
            <div className="flex items-center gap-3">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            <a
              href={profile.cvUrl}
              className="inline-flex items-center gap-1 rounded bg-secondary px-2.5 py-1 text-[11px] font-medium text-foreground hover:border-primary hover:text-primary transition-colors border border-border"
            >
              <Download className="h-3 w-3" /> CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
