const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Blog',
    description: 'Blog pessoal',
    social: {
      githubUrl: 'https://github.com/',
      linkedinUrl: 'https://www.linkedin.com/in/',
    }
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, 'content', 'posts'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: path.join(__dirname, 'src', 'assets'),
      },
    },
  ]
}