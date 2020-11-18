import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <PageTitle title="Get in touch"/>
    <h3><a href="mailto:jordanstephensen@gmail.com">js@jordanstephensen.com</a><br />
      +1 204 688 4741
    </h3>
  </Layout>
)

export default Contact
