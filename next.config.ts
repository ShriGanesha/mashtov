import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "standalone",
  experimental: {
    serverActions: {
      bodySizeLimit: Number.MAX_SAFE_INTEGER,
    },
  },
};

export default nextConfig;
