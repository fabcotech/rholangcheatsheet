module.exports = {
  pathPrefix: "/rholangcheatsheet",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
  siteMetadata: {
    title: `Rholang cheat sheet`,
  },
}