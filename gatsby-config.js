module.exports = {
  siteMetadata: {
    title: `Merry Christmas`,
    description: ``,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/logos/ashley.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: "AIzaSyDJthz2JEFdtBoE9fGtjVQr_CtdSyw5m6g",
          authDomain: "jhashley-df612.firebaseapp.com",
          databaseURL: "https://jhashley-df612.firebaseio.com/",
          projectId: "jhashley-df612",
          storageBucket: "jhashley-df612.appspot.com",
          messagingSenderId: "691293805891",
          appId: "1:691293805891:web:aea2798f53eee7a53de3f6",
          measurementId: "G-CDT4J2KMNF",
        },
      },
    },
  ],
};
