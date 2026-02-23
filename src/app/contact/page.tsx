"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section>
      {/* ── Section Title ── */}
      <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
      <div className="mt-2 h-1 w-10 rounded-full bg-primary" />

      {/* ── Availability Badge ── */}
      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-sm font-medium text-emerald-400">
          Open for opportunities: Yes
        </span>
      </div>

      {/* ── Contact Form ── */}
      {submitted ? (
        <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
          <p className="text-sm font-semibold text-emerald-400">
            Message sent! I&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-6 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className={cn(
                  "w-full rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground",
                  "focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                )}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="john@email.com"
                className={cn(
                  "w-full rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground",
                  "focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                )}
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Your message..."
              className={cn(
                "w-full resize-none rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground",
                "focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
              )}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
