import type { MetadataRoute } from "next";

const siteUrl = "https://www.clickwheel.shop";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/shop",
    "/shop/the-studio",
    "/shop/the-collector",
    "/shop/the-heritage",
    "/shop/the-signature",
    "/build",
    "/request-build",
    "/accessories",
    "/services",
    "/guides",
    "/guides/music",
    "/guides/rockbox",
    "/guides/storage",
    "/guides/battery",
    "/guides/thin-vs-thick",
    "/guides/care",
    "/guides/troubleshooting",
    "/support",
    "/ro",
    "/ro/shop",
    "/ro/shop/the-studio",
    "/ro/shop/the-collector",
    "/ro/shop/the-heritage",
    "/ro/shop/the-signature",
    "/ro/build",
    "/ro/request-build",
    "/ro/accessories",
    "/ro/services",
    "/ro/guides",
    "/ro/guides/music",
    "/ro/guides/rockbox",
    "/ro/guides/storage",
    "/ro/guides/battery",
    "/ro/guides/thin-vs-thick",
    "/ro/guides/care",
    "/ro/guides/troubleshooting",
    "/ro/support",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      route === "" || route === "/ro"
        ? 1
        : route === "/shop" || route === "/ro/shop"
          ? 0.9
          : route.includes("/shop/")
            ? 0.8
            : 0.7,
  }));
}