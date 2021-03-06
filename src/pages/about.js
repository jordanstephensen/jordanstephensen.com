import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Background from "../components/background"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <big>
      <h3>Hello, I'm Jordan.<br /><br /></h3>
      I'm a designer from Winnipeg.  In 2013, I graduated from the University of Manitoba with a Bachelor of Fine Arts Honours. Areas of study while there included graphic design, illustration, and art history.<br /><br />
      From 2015–2019 I worked at <a href="https://www.relishbranding.ca" target="_blank" rel="noreferrer">Relish Branding</a> as a graphic designer, mainly focusing on branding, advertising, and UX/UI.<br /><br />
      From 2019 to the present, I have been working at <a href="https://www.boldcommerce.com" target="_blank" rel="noreferrer">Bold Commerce</a> as a product designer, focusing on UI design and design systems work.<br /><br />
      Outside of work, I dabble in type design and illustration. Try to ride my bike pretty often and play tennis once in a while. Also love my dog <Link to="/mase">Mase</Link> very much.
    </big>  
    <Background />
  </Layout>
)

export default About
