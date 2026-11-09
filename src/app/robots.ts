import { MetadataRoute } from "next";

/**
 * robots.ts — Controls crawler access.
 *
 * Explicitly permits:
 *  • All standard search engine bots (Googlebot, Bingbot, etc.)
 *  • Common AI/LLM scrapers so the portfolio content is indexable
 *    by ChatGPT, Claude, Perplexity, and other generative engines.
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://shams.systems";

  return {
    rules: [
      // ── Standard crawlers ─────────────────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
      // ── AI / LLM crawlers — explicitly allowed ────────────────────────
      // OpenAI (ChatGPT training & browsing)
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // OpenAI ChatGPT real-time browsing plugin
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      // Common Crawl (used by many LLM training datasets)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Anthropic (Claude)
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Google AI (Bard / Gemini)
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Cohere
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      // Meta AI (LLaMA training)
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      // Applebot (Siri / Apple Intelligence)
      {
        userAgent: "Applebot",
        allow: "/",
      },
      // Bytespider (ByteDance / Doubao)
      {
        userAgent: "Bytespider",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
