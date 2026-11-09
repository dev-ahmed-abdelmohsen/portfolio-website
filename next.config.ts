import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/learning",
        destination: "https://sandbox.shams.systems",
        permanent: true,
      },
      {
        source: "/learning/:slug*",
        destination: "https://sandbox.shams.systems/learning/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
