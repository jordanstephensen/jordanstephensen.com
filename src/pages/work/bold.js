import React from "react"

import Layout from "../../components/layout/layout"
import Background from "../../components/background/background"
import SEO from "../../components/seo"
import Card from "../../components/card/card"

import boldthumb from '../../images/bold/bold-logo.svg'

const Bold = () => (
  <Layout title="Bold Commerce">
    <SEO title="Bold Commerce Case Studies" />
    <div className="contents__container">
      <div className="contents__container--column">
        <h3>Bold Commerce is a Winnipeg-based ecommerce company focused on providing merchants of all sizes with flexible and powerful checkout solutions.<br/></h3>
      </div>
      <div className="contents__container--column">
        <p>
        I’ve spent the last four years at Bold Commerce specializing in ecommerce software design. During my time there, I saw a number of features through from conceptualization to launch in several Bold products. This included leading user research initiatives, usability testing, UI design and handoff, and front-end code contributions. I also led a redesign of our design system, implemented theming in the system, overhauled our icon library twice, and took part in Bold's mentorship program as a mentor.
        </p>
        <p>
        Below are two case studies from my time at Bold.
        </p>
      </div>
    </div>
    <div className="js-projects__card-container">
      <Card 
        className='js-projects__card-container__card--type'
        image={boldthumb}
        link="/work/bold/bevy-design-system"
        title="Bevy Design System"
        category="UXUI"
        descriptor="Design Systems"
        year="2022–2023"
        >
        <small>
            Beginning in 2022, I led a redesign of Bold's design system, Bevy, in the context of Bold's rebrand.
        </small>
        </Card> 
{/*         
        <Card 
        className='js-projects__card-container__card--type'
        image={boldthumb}
        link="/work/bold/build-with-bold"
        title="Empowering Developers to Build with Bold"
        category="UXUI"
        descriptor="Product Design"
        year="2021–2022"
        >
        <small>
            Simplifying the process for third-party developers to build, publish, and test integrations using Bold's APIs.
        </small>
        </Card>  */}

      </div>
      <Background/>
  </Layout>
)

export default Bold
