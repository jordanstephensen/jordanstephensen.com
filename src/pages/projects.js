import React from "react"

import Card from "../components/card/card"
import Layout from "../components/layout/layout"
import Background from "../components/background/background"
import SEO from "../components/seo"

import eternalthumb from '../images/eternal/eternal-thumbnail.svg'
import keysthumb from '../images/keys/keys-thumbnail.svg'
import agourathumb from '../images/agoura/agoura-thumbnail.svg'
import mspthumb from '../images/msp/msp-thumbnail.svg'
import logo from '../images/js-logo.svg'


const Work = () => (
  <Layout title="Projects">
    <SEO title="Projects" />
    <div className="js-projects__card-container">
      <Card 
        image={logo}
        link="https://github.com/jordanstephensen/jordanstephensen.com"
        target="_blank"
        title="Personal site"
        category="UX/UI"
        descriptor="Website"
        year="2020"
      >
        <small>
          My personal website. Built using Gatsby and hosted on Netlify.
        </small>
      </Card>

      <Card 
        image={eternalthumb}
        link="/projects/eternal"
        title="Eternal"
        category="Type design"
        descriptor="Display Mono"
        year="2020"
      >
        <small>
          A fun dotted display mono. Limited character set.
        </small>
      </Card>

      <Card 
        image={keysthumb}
        link="/projects/keys"
        title="Keys"
        category="Type design"
        descriptor="Stencil"
        year="2018"
      >
        <small>
          A blocky, geometric stencil display font.
        </small>
      </Card>

      <Card 
        image={agourathumb}
        link="/projects/agoura"
        title="Agoura"
        category="Type design"
        descriptor="Display Serif"
        year="2020"
      >
        <small>
          A display serif. Not yet finished.
        </small>
      </Card>

      <Card 
        image={mspthumb}
        link="https://www.behance.net/gallery/78359409/Mercury-Specialty-Products"
        target="_blank"
        title="MSP"
        category="Branding"
        descriptor="Logo & Identity"
        year="2019"
      >
        <small>
          Mercury Specialty Projects, a metal fabrication company.
        </small>
      </Card>
    </div>
    <Background />
  </Layout>
)

export default Work
