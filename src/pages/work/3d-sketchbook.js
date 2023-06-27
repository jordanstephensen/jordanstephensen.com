import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import sculpture from "../../images/3d-sketchbook/3d-sculpture.png"
import flowers from "../../images/3d-sketchbook/3d-flowers.png"
import abstract from "../../images/3d-sketchbook/3d-abstract.png"

const Agoura = () => (
  <Layout title="3D Sketchbook">
    <SEO title="3D Sketchbook" />
    <div className="contents__text-container">
      <div className="contents__text-container--column">
        <h3>2021–Present<br/></h3>
      </div>
      <div className="contents__text-container--column">
        <p>A selection of personal work. Relatively undeveloped sketches done in Nomad Sculpt. Procreate and Figma also used for some elements.</p>
      </div>
    </div>
    <img className="image--body" src={sculpture} alt="Agoura display font"/>
    <img className="image--body" src={flowers} alt="Agoura display font"/>
    <img className="image--body" src={abstract} alt="Agoura display font"/>
  </Layout>
)

export default Agoura
