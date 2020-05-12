import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../configs/typography"

import Layout from "../layouts/layout"

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location} title="404 Not Found">
      <div style={{ textAlign: "center", marginTop: rhythm(3) }}>
        <h1>404 Not Found</h1>

        <p style={{ marginBottom: rhythm(2) }}>
          The time is so little, the time belongs to us <br />
          Why is everybody in such a fucking rush?
        </p>

        <Image fixed={data.file.childImageSharp.fixed} alt="404 Not Found" />
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "sheeps.png" }) {
      childImageSharp {
        fixed(width: 660) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
