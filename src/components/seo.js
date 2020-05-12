/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              summary
            }
            description
            siteUrl
            social {
              facebook
              github
              goodreads
              linkedin
              stackoverflow
              twitter
            }
            title
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{lang}}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      charSet="utf-8"
      meta={[
        {
          name: `author`,
          content: site.siteMetadata.author.name,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },

// <meta property="og:image" content="http://alfakini.com/img/share1.png">

// <meta property="og:image" content="http://alfakini.com/img/share2.png">

// <meta property="og:image" content="http://alfakini.com/img/share3.png">

// <meta property="og:image" content="http://alfakini.com/img/share4.png">
/* <meta property="og:updated_time" content="2019-07-02T00:01:25-03:00"></meta> */
        // {
        //   property: `og:image`,
        //   content: metaDescription,
        // },
        // {
        //   property: `og:image:width`,
        //   content: "1200",
        // },
        // {
        //   property: `og:image:height`,
        //   content: "630",
        // },
        {
          property: `fb:app_id`,
          content: "2341370742766461",
        },
        {
          property: `fb:admins`,
          content: "100000496399542",
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // {
        //   name: `twitter:image`,
        //   content: "http://alfakini.com/img/share1.png",
        // },
        {
          name: `twitter:site`,
          content: "@alfakini",
        },
        {
          name: `twitter:url`,
          content: site.siteMetadata.siteUrl,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
