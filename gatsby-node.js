const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const postTemplate = path.resolve(`./src/templates/blog-post.js`)

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    console.log(`/posts${post.node.fields.slug}`)
    actions.createPage({
      path: `/posts${post.node.fields.slug}`,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    actions.createNodeField({ name: `slug`, node, value })
  }
}
