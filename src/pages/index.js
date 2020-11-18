import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle title=" "/>
    <h1>Jordan Stephensen</h1>
    <br />
    <h3>Hello! I'm a designer from Winnipeg. I'm mainly focused on interface design, design systems, branding, and type design.<br /><br />
Currently doing product design at <a href="https://www.boldcommerce.com" target="_blank" rel="noreferrer">Bold Commerce</a><br /><br />
Taking on work on a limited basis. <a href="mailto:js@jordanstephensen.com" target="_blank" rel="noreferrer">Contact me</a> for work samples or to discuss rates.</h3><br />

  </Layout>
)

export default IndexPage
