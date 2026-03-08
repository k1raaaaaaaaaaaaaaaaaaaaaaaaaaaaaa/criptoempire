/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://criptoempire.com",
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
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/" || path === "/ru") {
      priority = 1.0;
      changefreq = "daily";
    } else if (
      path === "/comparar" ||
      path === "/promociones" ||
      path === "/exchanges" ||
      path === "/ru/birzhi" ||
      path === "/ru/sravnit"
    ) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.match(/^\/exchanges\/[^/]+\/[^/]+$/)) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.match(/^\/comparar\/[^/]+-vs-[^/]+$/)) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.match(/^\/ru\/sravnit\/[^/]+-vs-[^/]+$/)) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/exchanges/") && path !== "/exchanges") {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/ru/birzhi/") && path !== "/ru/birzhi") {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/ru/strany/")) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/guias/")) {
      priority = 0.7;
      changefreq = "monthly";
    } else if (path.startsWith("/ru/gajdy/")) {
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
