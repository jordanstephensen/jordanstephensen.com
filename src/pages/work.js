import React from "react"
import { Link } from "gatsby"

import Card from "../components/card"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import agoura from '../images/agoura.svg'
// import background from '../images/background2.svg'
import logo from '../images/js-logo.svg'


const Work = () => (
  <Layout title="Work">
    <SEO title="Work" />
    <Card 
      image={logo}
      button=""
      target="_self"
      title="Personal Website"
      year="2020"
    >
      Coming soon<br />
    </Card>
    <Card 
      image={agoura}
      button=""
      target="_self"
      title="Agoura"
      year="2020"
    >
      Coming soon<br />
    </Card>

  </Layout>
)

export default Work
