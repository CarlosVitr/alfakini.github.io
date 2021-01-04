import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../layouts/layout"

const EssayTemplate = ({ data, _pageContext, location }) => {
  const post = data.markdownRemark
  // const { _previous, _next } = pageContext

  return (
    <Layout location={location} title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt}>
      <article>
        <header>
          <h1 style={{ textAlign: `center`, marginBottom: 0 }}>
            {post.frontmatter.title}
          </h1>
          <p className="sans" style={{ display: `block`, textAlign: `center`, fontSize: 20 }}>
            {post.frontmatter.date}
          </p>
        </header>
       
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        
        <div>
          <hr style={{ margin: `30px 0` }} />
          <Bio />
        </div>
      </article>
    </Layout>
  )
}

export default EssayTemplate

export const pageQuery = graphql`
  query EssayBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
