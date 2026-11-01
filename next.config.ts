import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* It's my LAN ip. (Testing on phone) */
  allowedDevOrigins: ['192.168.1.159'],
  /* config options here */
  reactCompiler: true,
  turbopack: {
    ignoreIssue: [
      {
        path: '**/.next/dev/**',
        title: 'Slow filesystem detected',
      },
    ],
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },

    },
  },
};

export default nextConfig;
