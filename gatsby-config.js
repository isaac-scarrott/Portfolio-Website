const siteMetadata = {
  title: `Isaac Scarrott`,
  siteUrl: `https://www.isaacscarrott.co.uk`,
  description: `A website and blog of a software developer named Isaac Scarrott`,
  image: 'default-site-image.png',
  siteLanguage: 'en-GB',
  siteLocale: 'en_gb',
  authorName: 'Isaac Scarrott',
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 800 },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/BlogPosts`,
        name: 'BlogPosts',
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `skills`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/skills/`,
      },
    },
  ],
};
