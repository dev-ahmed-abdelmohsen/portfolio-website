import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { projects } from "@/data/portfolio";
import { learningTracks } from "@/data/learning";

const BASE_URL = "https://shams.systems";

/**
 * sitemap.ts — Generates /sitemap.xml for all static routes.
 *
 * All blog articles, portfolio topics, and learning study plans are statically
 * generated with dedicated deep-dive pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static routes ─────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/learning`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/status`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },
  ];

  // ── Dynamic blog article routes ────────────────────────────────────────
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Dynamic portfolio detail routes ────────────────────────────────────
  const portfolioRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Dynamic learning study plan routes ─────────────────────────────────
  const learningRoutes: MetadataRoute.Sitemap = learningTracks.map((track) => ({
    url: `${BASE_URL}/learning/${track.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...portfolioRoutes, ...learningRoutes];
}


