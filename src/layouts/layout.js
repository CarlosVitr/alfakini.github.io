import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import { useSiteMetadata } from "../hooks/site-metadata"

const Layout = ({ location, title, description, children }) => {
  const siteMetadata = useSiteMetadata()

  const styleMain = {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: 840,
    padding: `0 26px`,
  }

  return (
    <React.Fragment>
      <SEO location={location} title={`${siteMetadata.title} - ${title}`} description={description} />
      <div>
        <Header />
        <main style={styleMain}>
          {children}
        </main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
