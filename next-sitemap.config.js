/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://criptocompara.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
  transform: async (config, path) => {
    // Higher priority for homepage and main pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path === "/comparar" || path === "/promociones") {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.startsWith("/exchanges/") && path !== "/exchanges") {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/guias/")) {
      priority = 0.7;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
