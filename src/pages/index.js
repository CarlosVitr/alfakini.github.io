// Gatsby supports TypeScript natively!
import React from "react"
import { Link, graphql } from "gatsby"

import { rhythm } from "../configs/typography"

import Layout from "../layouts/layout"

const PostHeader = ({ data }) => {
  return (
    <article key={data.fields.slug}>
      <header>
        <h4
          style={{
            marginBottom: rhythm(1 / 8),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={`/posts${data.fields.slug}`}>
            {data.frontmatter.title}
          </Link>
        </h4>
        <small>{data.frontmatter.date}</small>
      </header>
    </article>
  )
}

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title="Blog">
      {posts.map(post => <PostHeader data={post.node} />)}
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
