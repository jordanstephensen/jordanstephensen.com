import React from "react"

import Card from "../components/card/card"
import Layout from "../components/layout/layout"
import Pill from "../components/pill/pill"
import Background from "../components/background/background"
import SEO from "../components/seo"

import eternalthumb from '../images/eternal/eternal-thumbnail.svg'
import keysthumb from '../images/keys/keys-thumbnail.svg'
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
      <Pill label="Web design" /><Pill label="React" /><Pill label="JSX" /><Pill label="SCSS" /><br /><Pill label="Meta" /><Pill label="Open-source" />
    </Card>

    <Card 
      image={eternalthumb}
      button="/projects/eternal"
      target="_self"
      title="Eternal"
      year="2020"
    >
      <Pill label="Typeface" /><Pill label="Display" /><Pill label="Open-source" /><br />
    </Card>

    <Card 
      image={keysthumb}
      button="/projects/keys"
      target="_self"
      title="Keys"
      year="2018"
    >
      <Pill label="Typeface" /><Pill label="Display" /><Pill label="Stencil" /><Pill label="Open-source" /><br />
    </Card>

    <Card 
      image={agourathumb}
      button="/projects/agoura"
      target="_self"
      title="Agoura"
      year="2020"
    >
      <Pill label="Typeface" /><Pill label="Display" /><Pill label="Serif" /><br />
    </Card>
    <Background />
  </Layout>
)

export default Work
