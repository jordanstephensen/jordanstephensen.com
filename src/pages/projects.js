import React from "react"

import Card from "../components/card"
import Layout from "../components/layout"
import Pill from "../components/pill"
import SEO from "../components/seo"
import eternalthumb from '../images/eternal/eternal-thumbnail.svg'
import agourathumb from '../images/agoura/agoura-thumbnail.svg'
import logo from '../images/js-logo.svg'


const Work = () => (
  <Layout title="Projects">
    <SEO title="Projects" />
    <Card 
      image={logo}
      button="https://github.com/jordanstephensen/jordanstephensen.com"
      target="_blank"
      title="Personal site"
      year="2020"
    >
      <Pill label="Web design" /><Pill label="React" /><Pill label="JSX" /><Pill label="CSS" /><br /><Pill label="Meta" /><Pill label="Open-source" />
    </Card>

    <h3>More coming soon</h3>

    {/* <Card 
      image={eternalthumb}
      button="/projects/eternal"
      target="_self"
      title="Eternal"
      year="2020"
    >
      <Pill label="Typeface" /><Pill label="Display" /><Pill label="Open-source" /><br />
    </Card>

    <Card 
      image={agourathumb}
      button="/projects/agoura"
      target="_self"
      title="Agoura"
      year="2020"
    >
      <Pill label="Typeface" /><Pill label="Display" /><Pill label="Serif" /><br />
    </Card> */}

  </Layout>
)

export default Work
