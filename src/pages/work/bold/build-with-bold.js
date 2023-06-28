import React from "react"

import Layout from "../../../components/layout/layout"
import SEO from "../../../components/seo"

import bevycover from "../../../images/bold/bevy/bevy-cover.png"

const Agoura = () => (
  <Layout title="Empowering Developers to Build with Bold">
    <SEO title="Empowering Developers to Build with Bold" />
    <img className="contents__container" src={bevycover} alt="An overview of Bevy's component library"/>
    </Layout>
)

export default Agoura
