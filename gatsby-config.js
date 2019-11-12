module.exports = {
  siteMetadata: {
    title: 'UI Library Documentation',
    description: 'A basic documentation for the design system using Gatsby',
    // sidebar: {
    //   pages: [
    //     {
    //       slug: '/',
    //       title: 'Home',
    //     },
    //   ],
    // },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: './design-system',
      },
    },
    'gatsby-transformer-react-docgen',
    'gatsby-plugin-styled-components',
  ],
};
