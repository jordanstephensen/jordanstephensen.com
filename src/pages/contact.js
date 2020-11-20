import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"

const Contact = () => (
  <Layout title="Get in touch">
    <SEO title="Contact" />
    <h3><a href="mailto:js@jordanstephensen.com" target="_blank" rel="noreferrer">js@jordanstephensen.com</a><br />
      +1 204 688 4741
    </h3>
  </Layout>
)

export default Contact
