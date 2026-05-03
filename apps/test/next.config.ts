import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["mighty-barely-snail.ngrok-free.app"],
  transpilePackages: ["@repo/ui", "@repo/validation", "@repo/transactional"],
};

export default nextConfig;