import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

// import portfolio from "../../images/JordanStephensen-Portfolio.pdf"

const Portfolio = () => (
  <Layout title="Branding Portfolio">
    <SEO title="Branding Portfolio" />
    <a href={`/static/JordanStephensen-Portfolio.pdf`} target="_blank" rel="noreferrer" id="email">
        <h3>Portfolio</h3>
    </a>
  </Layout>
)

export default Portfolio
