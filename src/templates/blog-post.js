import React from "react"
import { graphql } from "gatsby"

import { rhythm, scale } from "../configs/typography"

import Bio from "../components/bio"
import Layout from "../layouts/layout"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { _previous, _next } = pageContext

  return (
    <Layout location={location} title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt}>
      <article>
        <header>
          <h2
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1 / 8),
            }}
          >
            {post.frontmatter.title}
          </h2>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
