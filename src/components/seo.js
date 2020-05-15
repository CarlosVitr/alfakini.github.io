/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ description, lang, meta, title, location }) => {
  const { shareImage, site } = useStaticQuery(
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
        shareImage: file(relativePath: { eq: "share4.png" }) {
          childImageSharp {
            fixed(width: 1200, height: 630) {
              src
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const metaUrl = `${site.siteMetadata.siteUrl}${location.pathname}`

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
          content: metaUrl,
        },
        {
          property: `og:updated_time`,
          content: Date.now(),
        },
        {
          property: `og:image`,
          content: shareImage.childImageSharp.fixed.src,
        },
        {
          property: `og:image:width`,
          content: "1200",
        },
        {
          property: `og:image:height`,
          content: "630",
        },
        {
          property: `og:image:alt`,
          content: metaTitle,
        },
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
        {
          name: `twitter:image`,
          content: shareImage.childImageSharp.fixed.src,
        },
        {
          name: `twitter:site`,
          content: "@alfakini",
        },
        {
          name: `twitter:url`,
          content: metaUrl,
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
