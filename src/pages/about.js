import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Link from "../components/link/link"
import me from '../images/JordanStephensen.png'

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="contents__text-container">
      <div className="contents__text-container--column">
        <h3>Hello, I'm Jordan.<br /></h3> 
        <p>
          I'm a designer in Toronto. Originally from Winnipeg, In 2013 I graduated from the University of Manitoba with a Bachelor of Fine Arts Honours. Areas of study while there included graphic design, illustration, and art history.<br /><br />
          From 2015–2019 I worked at <Link href="https://www.relishbranding.ca" target="_blank">Relish Branding</Link> as a graphic designer, mainly focusing on branding, advertising, and UX/UI.<br /><br />
          From 2019 to the present, I have been working at Winnipeg-based <Link href="https://www.boldcommerce.com" target="_blank">Bold Commerce</Link> as a product designer, focusing on UI design and design systems work.<br /><br />
          Outside of work, I dabble in type design and illustration, and am currently learning 3D and game design in Blender and Unity respecively. I love running and yoga and spending time outdoors with my dog Mase.
        </p>  
      </div>
      <div className="contents__text-container--column">
        <img class="image--column image--about-photo" src={me} alt="Myself" />
      </div>
    </div>
  </Layout>
)

export default About
