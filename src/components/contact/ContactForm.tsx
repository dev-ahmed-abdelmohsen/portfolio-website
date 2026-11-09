"use client";

import { useState } from "react";
import { Send, CheckCircle2, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div>
      {/* ── Availability Badge ── */}
      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400">
          Open for opportunities &amp; consulting: Yes
        </span>
      </div>

      {/* ── Contact Form or Success State ── */}
      {submitted ? (
        <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center shadow-sm dark:shadow-none">
          <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-3" />
          <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
            Thank you, {formData.name || "there"}!
          </h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            Your message has been recorded. For urgent inquiries, feel free to drop a direct email as well.
          </p>
          <a
            href={`mailto:${profile.email}?subject=Contact%20from%20Shams%20Systems&body=Hi%20Ahmed%20Shams,%0D%0A%0D%0A`}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs sm:text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" /> Open Email Client ({profile.email})
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs sm:text-sm font-medium text-muted-foreground"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="e.g. Alex Smith"
                className={cn(
                  "w-full rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground",
                  "focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                )}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs sm:text-sm font-medium text-muted-foreground"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="alex@company.com"
                className={cn(
                  "w-full rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground",
                  "focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                )}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-xs sm:text-sm font-medium text-muted-foreground"
            >
              Project or Message Details
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell me about your infrastructure, cloud architecture, or hiring needs..."
              className={cn(
                "w-full resize-none rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground",
                "focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
              )}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
