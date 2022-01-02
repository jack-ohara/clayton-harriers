require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Clayton-Le-Moors Harriers`,
    description: `Welcome to Clayton-Le-Moors Harriers! Find all the latest news and info and get in touch if you're interested in joining!`,
    author: `Jack O'Hara`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clayton-Le-Moors Harriers`,
        short_name: `Clayton Harriers`,
        start_url: `/`,
        background_color: `#212020eb`,
        theme_color: `#212020eb`,
        display: `minimal-ui`,
        icon: `src/images/whole-banner-square.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.GATSBY_WP_SITE_URL ? `${process.env.GATSBY_WP_SITE_URL}/graphql` : `https://wp.claytonlemoors.org.uk/graphql`,
        schema: {
          timeout: 600000,
          requestConcurrency: 10,
        },
        develop: {
          hardCacheMediaFiles: true,
          hardCacheData: true,
        },
        production: {
          hardCacheMediaFiles: true,
        },
        type: {
          MediaItem: {
            localFile: {
              excludeByMimeTypes: [
                `application/pdf`,
                `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
                `application/vnd.ms-excel`,
              ],
            },
          },
        },
        html: {
          imageMaxWidth: 1200,
          generateWebpImages: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Rubik\:400`, `Open Sans\:300`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://www.claytonlemoors.org.uk/",
        sitemap: "https://www.claytonlemoors.org.uk/wp-sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
