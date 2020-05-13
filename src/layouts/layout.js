import React from "react"
import { useStaticQuery } from "gatsby"

import { rhythm } from "../configs/typography"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ location, title, description, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const style = {
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }

  return (
    <div style={style}>
      <SEO location={location} title={`${data.site.siteMetadata.title} - ${title}`} description={description} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
