module.exports = {
  siteMetadata: {
    title: `alfakini`,
    author: {
      name: `Alan R. Fachini`,
      summary: `Written by Alan R. Fachini, founder of Magrathea Labs and Fab Lab Joinville.`,
    },
    description: `Written by Alan R. Fachini, founder of Magrathea Labs and Fab Lab Joinville.`,
    siteUrl: `https://alfakini.com`,
    rssUrl: `https://alfakini.com/rss.xml`,
    keywords: "software development,software engineering,software,tecnology,blockchain,bitcoin,ethereum,rust,python,ruby,rails,data science,machine learning,management,entrepreneurship,ntrepreneur",
    socialUsers: {
      twitter: `alfakini`,
      instagram: `alfachini`,
      facebook: `alfakini`,
      facebook_app_id: `2341370742766461`,
      facebook_admins: `100000496399542`,
      github: `alfakini`,
      linkedin: `alfachini`,
      goodreads: `10157034-alan`,
      stackoverflow: `732973/alfakini`,
      discogs: `alfakini`
    },
    socialLinks: {
      twitter: `https://twitter.com/alfakini`,
      instagram: `https://instagram.com/alfachini`,
      github: `https://github.com/alfakini`,
      linkedin: `https://www.linkedin.com/in/alfachini`,
      goodreads: `https://www.goodreads.com/user/show/10157034-alan"`,
      stackoverflow: `https://stackoverflow.com/users/732973/alfakini`,
      discogs: `https://www.discogs.com/user/alfakini`,
    }
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-twitter`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        output: "/rss.xml",
        title: "alfakini blog's RSS Feed",
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.alfakini.com',
        sitemap: 'https://www.alfakini.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/notes`,
        name: 'Notes',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/essays`,
        name: 'Essays',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/books`,
        name: 'Books',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/papers`,
        name: 'Papers',
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
          `gatsby-remark-check-links`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-embedder`,
          `gatsby-remark-external-links`,
          `gatsby-remark-prismjs`,
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
        name: `alfakini blog`,
        short_name: `alfakini`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3E2767`,
        display: `browser`,
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
