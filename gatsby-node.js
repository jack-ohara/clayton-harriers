exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { allWpPost } = result.data

  // Define the template to use
  const template = require.resolve(`./src/templates/wpPost.js`)

  if (allWpPost.nodes.length) {
    allWpPost.nodes.map(post => {
      actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: post.uri,
        component: template,
        context: post,
      })
    })
  }
}
