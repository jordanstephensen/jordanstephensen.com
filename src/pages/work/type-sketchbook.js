import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import coin from "../../images/type-sketchbook/type-coin.png"
import ekos1 from "../../images/type-sketchbook/type-ekos1.png"
import maan from "../../images/type-sketchbook/type-maan.png"
import nevermind from "../../images/type-sketchbook/type-nevermind.png"
import ekos2 from "../../images/type-sketchbook/type-ekos2.png"
import ekos3 from "../../images/type-sketchbook/type-ekos3.png"
import player from "../../images/type-sketchbook/type-player.png"
import positive from "../../images/type-sketchbook/type-positive.png"
import razor from "../../images/type-sketchbook/type-razor.png"
import refresh from "../../images/type-sketchbook/type-refresh.png"
import singularity from "../../images/type-sketchbook/type-singularity.png"
import traits from "../../images/type-sketchbook/type-traits.png"

const TypeSketchbook = () => (
  <Layout title="Type Sketch&shy;book">
    <SEO title="Type Sketchbook" />
    <div className="contents__container">
      <div className="contents__column--2">
        <h3>Ongoing<br/></h3>
      </div>
      <div className="contents__column--2">
        <p>Various custom type explorations.</p> 
        <p>Some of these have evolved into full fonts, some were explorations for branding projects, some were just for fun.</p>
      </div>
    </div>
    <div className="contents__container" >
        <img className="contents__column--2" src={coin} alt="Typography exploration"/>
        <img className="contents__column--2" src={ekos1} alt="Typography exploration"/>
    </div>
    <div className="contents__container" >
        <img className="contents__column--2" src={maan} alt="Typography exploration"/>
        <img className="contents__column--2" src={nevermind} alt="Typography exploration"/>
    </div>
    <div className="contents__container" >
        <img className="contents__column--2" src={ekos2} alt="Typography exploration"/>
        <img className="contents__column--2" src={traits} alt="Typography exploration"/>
    </div>
    <div className="contents__container" >
        <img className="contents__column--2" src={ekos3} alt="Typography exploration"/>
        <img className="contents__column--2" src={positive} alt="Typography exploration"/>
    </div>
    <div className="contents__container" >
        <img className="contents__column--2" src={razor} alt="Typography exploration"/>
        <img className="contents__column--2" src={refresh} alt="Typography exploration"/>
    </div>
    <div className="contents__container" >
        <img className="contents__column--2" src={singularity} alt="Typography exploration"/>
        <img className="contents__column--2" src={player} alt="Typography exploration"/>
    </div>
  </Layout>
)

export default TypeSketchbook
