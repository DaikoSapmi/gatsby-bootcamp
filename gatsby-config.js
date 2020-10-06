module.exports = {
  siteMetadata: {
    title: 'Mahkalahke!',
    author: 'Rune Sverre Fjellheim'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
