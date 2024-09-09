/** @type {import('next-sitemap').IConfig} */

const SITE_URL = "https://kod1nghub.vercel.app"

export default {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 1,
    exclude: [], // excluding url
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',     // allow all agents
                allow: '/',         // allow all urls
                disallow: []        // no uncrowable url
            },
        ]
    }
}