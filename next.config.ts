import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Restore smaller candidate widths — this project renders images inside
    // narrow tiles (mobile collage grids) well under the default minimum.
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384],
    // Cache optimized images for 31 days so Vercel isn't re-optimizing them
    // on every visit (and burning through the image-optimization quota).
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
