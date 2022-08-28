/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://theopensource.company',
    generateRobotsTxt: true, 
    outDir: 'out',
}