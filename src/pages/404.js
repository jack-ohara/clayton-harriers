import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>
      It looks like that page doesn't exist. If you think this is an error,
      please contact the site administrator
    </p>
  </Layout>
)

export default NotFoundPage
