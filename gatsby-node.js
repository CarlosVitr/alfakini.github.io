const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const essayTemplate = path.resolve(`./src/templates/essay-template.js`)

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

  const essays = result.data.allMarkdownRemark.edges

  essays.forEach((post, index) => {
    const previous = index === essays.length - 1 ? null : essays[index + 1].node
    const next = index === 0 ? null : essays[index - 1].node

    console.log(`/essays${post.node.fields.slug}`)
    actions.createPage({
      path: `/essays${post.node.fields.slug}`,
      component: essayTemplate,
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

    actions.createNodeField({ name: 'id', node, value: node.id })
    actions.createNodeField({ name: 'type', node, value: node.frontmatter.type || [] })
    actions.createNodeField({ name: 'title', node, value: node.frontmatter.title })
    actions.createNodeField({ name: `slug`, node, value: createFilePath({ node, getNode }) })
    actions.createNodeField({ name: 'description', node, value: node.frontmatter.description })
    actions.createNodeField({ name: 'authors', node, value: node.frontmatter.authors })
    actions.createNodeField({ name: 'date', node, value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '' })
    actions.createNodeField({ name: 'categories', node, value: node.frontmatter.categories })
    actions.createNodeField({ name: 'tags', node, value: node.frontmatter.tags })
    actions.createNodeField({ name: 'cover', node, value: node.frontmatter.cover })
    actions.createNodeField({ name: 'images', node, value: node.frontmatter.images })
    actions.createNodeField({ name: 'published', node, value: node.frontmatter.published ? true : false })
  }
}
