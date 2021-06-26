import React from "react"
import Layout, { PageHeader } from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageHeader>404: Not Found</PageHeader>
    <p>
      It looks like that page doesn't exist. If you think this is an error,
      please contact the site administrator
    </p>
  </Layout>
)

export default NotFoundPage
