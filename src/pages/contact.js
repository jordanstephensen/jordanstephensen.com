import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Background from "../components/background"
import SEO from "../components/seo"

const Contact = () => (
  <Layout title="Get in touch">
    <SEO title="Contact" />
    <big><a href="mailto:js@jordanstephensen.com" target="_blank" rel="noreferrer">js@jordanstephensen.com</a><br/><br/>
      +1 204 688 4741
    </big>
    <Background />
  </Layout>
)

export default Contact
