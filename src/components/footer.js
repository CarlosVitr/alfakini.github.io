import React from "react"
import { Link } from "gatsby"

import { useSiteMetadata } from "../hooks/site-metadata"

const Footer = () => {
  const { title, siteUrl, rssUrl, socialLinks } = useSiteMetadata()

  return (
    <footer className="sans" style={{ textAlign: `center`, margin: `100px 0` }}>
      <Link to={siteUrl}>{title}</Link>{` · `}

      <Link to="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</Link>
      <br />

      {Object.entries(socialLinks).map(([key, value]) =>
        <React.Fragment>
          <Link to={value}>{key}</Link>{` · `}
        </React.Fragment>
      )}

      <Link to={rssUrl}>rss</Link>
    </footer>
  )
}

export default Footer
