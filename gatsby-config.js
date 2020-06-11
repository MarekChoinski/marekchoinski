/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    // {
    //   resolve: `gatsby-plugin-typescript`,
    //   options: {
    //     isTSX: true, // defaults to false
    //     jsxPragma: `jsx`, // defaults to "React"
    //     allExtensions: true, // defaults to false
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/ // See below to configure properly
        }
      }
    }
  ],
}
