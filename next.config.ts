import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lokipetpal.com"], // Додайте домени, з яких можна завантажувати зображення
  },
  webpack: (config, {}) => {
    config.cache = false; // Вимикаємо кешування (тимчасово)
    return config;
  },
};

export default nextConfig;
