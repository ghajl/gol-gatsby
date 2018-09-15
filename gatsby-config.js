module.exports = {
  siteMetadata: {
    title: 'gol',
  },
  pathPrefix: '/gol-gatsby',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'about-page',
      },
    },
  ],
};
