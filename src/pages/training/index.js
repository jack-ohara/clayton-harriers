import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const TrainingPage = () => {
  return (
    <Layout>
      <SEO title="Training" />

      <h1>Training</h1>

      <Link to="/training/senior">Senior</Link>
      <Link to="/training/junior">Junior</Link>
    </Layout>
  )
}

export default TrainingPage
