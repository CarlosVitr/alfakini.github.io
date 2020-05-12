// Gatsby supports TypeScript natively!
import React from "react"

import Layout from "../layouts/layout"
import Bio from "../components/bio"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location} title="About">
      <Bio />
    </Layout>
  )
}

export default AboutPage
