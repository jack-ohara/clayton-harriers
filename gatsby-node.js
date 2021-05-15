exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
        }
      }
      rollOfHonourPages: allWpPage(
        filter: { uri: { regex: "/^/roll-of-honour/.+$/" } }
      ) {
        nodes {
          uri
          title
          content
          id
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { allWpPost } = result.data

  // Define the template to use
  const postTemplate = require.resolve(`./src/templates/wpPost.js`)

  if (allWpPost.nodes.length) {
    allWpPost.nodes.map(post => {
      actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: post.uri,
        component: postTemplate,
        context: post,
      })
    })
  }

  const { rollOfHonourPages } = result.data

  const pageTemplate = require.resolve(`./src/templates/wpPage.js`)

  if (rollOfHonourPages.nodes.length) {
    rollOfHonourPages.nodes.map(page => {
      actions.createPage({
        path: page.uri,
        component: pageTemplate,
        context: page,
      })
    })
  }
}
