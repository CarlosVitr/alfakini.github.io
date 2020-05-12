module.exports = {
  siteMetadata: {
    title: `alf. blog`,
    author: {
      name: `Alan R. Fachini`,
      summary: `building stuff at Magrathea Labs and Fab Lab Joinville.`,
    },
    description: `alf. blog`,
    siteUrl: `https://alfakini.com`,
    keywords: "software development,software engineering,software,python,ruby,rails,data science,machine learning,manager,music,bycicle,entrepreneur",
    social: {
      facebook: `alfakini`,
      github: `alfakini`,
      goodreads: `https://www.goodreads.com/user/show/10157034-alan`,
      linkedin: `alfachini`,
      stackoverflow: `https://stackoverflow.com/users/732973/alfakini`,
      twitter: `alfakini`,
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        output: "/rss.xml",
        title: "alf blog's RSS Feed",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: 'alfakini',
              includeDefaultCss: true
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-9281876-3`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alf. blog`,
        short_name: `alf.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3E2767`,
        display: `alf.`,
        icon: `assets/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/configs/typography`,
      },
    },
  ],
}
