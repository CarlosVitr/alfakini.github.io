import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import { useLogo } from "../hooks/site-logo"
import { useShareImages } from "../hooks/site-share-images"
import { useSiteMetadata } from "../hooks/site-metadata"

const SEO = ({ description, lang, meta, title, location }) => {
  const logoImage = useLogo()
  const shareImage = useShareImages()
  const siteMetadata = useSiteMetadata()

  const metaAuthor = siteMetadata.author.name
  const metaDescription = description || siteMetadata.description
  const metaKeywords = siteMetadata.keywords
  const metaTitle = title || siteMetadata.title
  const metaUrl = `${siteMetadata.siteUrl}${location.pathname}`

  return (
    <Helmet
      charSet="utf-8"
      htmlAttributes={{lang}}
      title={metaTitle}
      titleTemplate={metaTitle}
      meta={[
        {
          name: `author`,
          content: metaAuthor,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `image`,
          content: shareImage.src,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:site_name`,
          content: metaTitle,
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
          content: shareImage.src,
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
          content: siteMetadata.socialUsers.facebook_app_id,
        },
        {
          property: `fb:admins`,
          content: siteMetadata.socialUsers.facebook_admins,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.socialUsers.twitter,
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
          content: shareImage.src,
        },
        {
          name: `twitter:site`,
          content: `@${siteMetadata.socialUsers.twitter}`,
        },
        {
          name: `twitter:url`,
          content: metaUrl,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(
        [
          {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            url: metaUrl,
            name: metaTitle,
            alternateName: metaTitle,
            headline: metaTitle,
            image: {
              '@type': 'ImageObject',
              url: shareImage.src,
            },
            description: metaDescription,
            author: {
              '@type': 'Person',
              name: metaAuthor,
            },
            publisher: {
              '@type': 'Organization',
              url: siteMetadata.siteUrl,
              logo: logoImage,
              name: metaAuthor,
            },
          },
        ]
      )}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
  title: ``,
  location: `/`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
}

export default SEO
