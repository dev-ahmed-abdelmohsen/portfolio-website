"use client";

import React from "react";
import { SidebarProvider, useSidebar } from "./SidebarContext";
import { ProfileCard } from "./ProfileCard";
import { Sidebar } from "./Sidebar";
import { StatusFooter } from "./StatusFooter";
import { PageTransition } from "./PageTransition";
import { cn } from "@/lib/utils";

function AppShellInner({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-3 py-4 pb-24 sm:px-4 sm:py-5 md:px-8 md:py-6 md:pb-10 lg:px-12">
      {/* ── Top Profile Header ── */}
      <header className="mb-4 flex flex-col gap-4 md:mb-6 md:flex-row">
        {/* Left spacer aligned to sidebar width on desktop with smooth width transition */}
        <div
          className={cn(
            "hidden shrink-0 transition-[width] duration-300 ease-in-out md:block",
            isCollapsed ? "md:w-[64px]" : "md:w-[120px]"
          )}
        />
        {/* Profile card stretches across the main area */}
        <div className="flex-1 min-w-0">
          <ProfileCard />
        </div>
      </header>

      {/* ── Body: Sidebar + Dynamic Content ── */}
      <div className="flex flex-1 gap-5 md:flex-row min-w-0 w-full">
        {/* Sidebar — desktop only */}
        <aside
          className={cn(
            "hidden shrink-0 transition-[width] duration-300 ease-in-out md:block",
            isCollapsed ? "md:w-[64px]" : "md:w-[120px]"
          )}
        >
          <div className="sticky top-6">
            <Sidebar />
          </div>
        </aside>

        {/* Dynamic main content container */}
        <main className="min-w-0 flex-1 w-full max-w-full">
          <div className="min-h-[60vh] w-full min-w-0 max-w-full rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-10 shadow-sm dark:shadow-none overflow-hidden">
            <PageTransition>{children}</PageTransition>
          </div>

          {/* ── Status Footer ── */}
          <div className="mt-2">
            <StatusFooter />
          </div>
        </main>
      </div>

      {/* ── Mobile: Bottom Navigation Bar & Drawer ── */}
      <div className="md:hidden">
        <Sidebar />
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppShellInner>{children}</AppShellInner>
    </SidebarProvider>
  );
}
