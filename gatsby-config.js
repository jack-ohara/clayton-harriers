module.exports = {
  siteMetadata: {
    title: `Clayton-Le-Moors Harriers`,
    description: `Welcome to Clayton-Le-Moors Harriers! Find all the latest news and info and get in touch if you're interested in joining!`,
    author: `Jack O'Hara`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FF8D00`,
        theme_color: `#FF8D00`,
        display: `minimal-ui`,
        icon: `src/images/whole-banner-square.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://www.claytonlemoors.org.uk/graphql`,
        schema: {
          timeout: 600000,
          requestConcurrency: 10,
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
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
