/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    navbar: {
      items: [
        ['About Us', '/about'],
        ['FOSS', '/foss'],
        ['Mentorship', '/mentorship'],
        ['Contact', '/contact']
      ]
    }
  },
  plugins: [
    "gatsby-plugin-testing"
  ],
}
