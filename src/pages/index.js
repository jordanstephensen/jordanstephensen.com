import React from "react"
// import { Link } from "gatsby"

import TextLink from "../components/textLink"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle />
    <name>Jordan Stephensen <br /></name>
    <br />
    <br />
    <br />
    <big>Hello! I'm a graphic designer from Winnipeg, Canada, with a focus on branding, typography, interface design, and user experience.<br /><br />
Currently doing product design at <TextLink >Bold Commerce</TextLink><br /><br />
Taking on work on a limited basis. Work samples are available <TextLink >by request</TextLink></big><br />

  </Layout>
)

export default IndexPage
