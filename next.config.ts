import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Chỉ rõ file config để next-intl có thể tìm thấy trên Next 16
const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "fwngzbbefxshqyiqrnjt.supabase.co",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
