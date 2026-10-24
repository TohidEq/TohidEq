import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
