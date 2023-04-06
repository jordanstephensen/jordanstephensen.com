import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Background from "../components/background/background"
import Link from "../components/link/link"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 id="name">Jor&shy;dan<br />Step&shy;hen&shy;sen</h1>
    <br />
    <h3>
      Hello! I'm <Link href="/about">Jordan</Link> — a multi-disciplinary designer based in Toronto. I'm mainly focused on interface design, design systems, branding, and type design.<br /><br />
      Currently doing product design at <Link href="https://www.boldcommerce.com" target="_blank">Bold Commerce</Link><br /><br />
      Taking on work on a limited basis. <Link href="mailto:jordanstephensen@gmail.com" target="_blank">Contact me</Link> for work samples or to discuss rates.
    </h3><br />
  <Background />
  </Layout>
)

export default IndexPage
