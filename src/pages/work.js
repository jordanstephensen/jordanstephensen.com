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
      image={agoura}
      button="https://jordanstephensen.netlify.app/"
      target="_blank"
      title="Agoura"
      year="2020"
    >
      children
    </Card>
    <Card 
      image={logo}
      button="https://jordanstephensen.netlify.app/"
      target="_blank"
      title="Agoura"
      year="2020"
    >
      children
    </Card>

  </Layout>
)

export default Work
