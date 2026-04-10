import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["mighty-barely-snail.ngrok-free.app"],
  transpilePackages: ["@repo/ui"],
};

export default nextConfig;
