exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
        }
      }
      allWpPage {
        nodes {
          id
          uri
        }
      }
      allWpEvent {
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

  const { allWpPage } = result.data

  const pageTemplate = require.resolve(`./src/templates/wpPage.tsx`)

  if (allWpPage.nodes.length) {
    allWpPage.nodes.map(page => {
      actions.createPage({
        path: page.uri,
        component: pageTemplate,
        context: page,
      })
    })
  }

  const { allWpEvent } = result.data

  const eventTemplate = require.resolve(`./src/templates/wpEvent.tsx`)

  if (allWpEvent.nodes.length) {
    allWpEvent.nodes.map(event => {
      actions.createPage({
        path: event.uri,
        component: eventTemplate,
        context: event,
      })
    })
  }
}
