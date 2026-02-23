"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* ── Desktop: Large square card nav ── */}
      <nav className="hidden flex-col gap-3 md:flex">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group flex flex-col items-center justify-center gap-2 rounded-2xl px-3 py-5 text-[11px] font-bold uppercase tracking-widest transition-all duration-200",
                isActive
                  ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <Icon
                className={cn(
                  "h-7 w-7 transition-transform duration-200 group-hover:scale-110",
                  isActive ? "text-white" : "text-muted-foreground group-hover:text-foreground",
                )}
                strokeWidth={1.5}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* ── Mobile: Fixed bottom bar ── */}
      <nav className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t border-border bg-card/95 px-2 py-1.5 backdrop-blur-md md:hidden">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-lg px-3 py-2 text-[10px] font-medium transition-all",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground active:scale-95 active:text-foreground",
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "drop-shadow-sm")} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
