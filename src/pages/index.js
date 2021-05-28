import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Background from "../components/background/background"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 id="name">Jor&shy;dan<br />Step&shy;hen&shy;sen</h1>
    <br />
    <h3>
      Hello! I'm a designer from Winnipeg. I'm mainly focused on interface design, design systems, branding, and type design.<br /><br />
      Currently doing product design at <a href="https://www.boldcommerce.com" target="_blank" rel="noreferrer">Bold Commerce</a><br /><br />
      Taking on work on a limited basis. <a href="mailto:jordanstephensen@gmail.com" target="_blank" rel="noreferrer">Contact me</a> for work samples or to discuss rates.
    </h3><br />
  <Background />
  </Layout>
)

export default IndexPage
