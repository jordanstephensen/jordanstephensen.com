import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import fullscene from "../../images/bar-eclipse/eclipse-fullscene.png"
import bartop from "../../images/bar-eclipse/eclipse-bartop.png"
import labels from "../../images/bar-eclipse/eclipse-labels.png"
import graff from "../../images/bar-eclipse/eclipse-graff.png"
import signs from "../../images/bar-eclipse/eclipse-signs.png"
import singage from "../../images/bar-eclipse/eclipse-signage.png"

const BarEclipse = () => (
  <Layout title="Bar Eclipse">
    <SEO title="Bar Eclipse" />
    <div className="contents__container">
        <div className="contents__container--column">
            <h4>Year</h4>
            <p>2023</p>
        </div>
        <div className="contents__container--column">
            <h4>Scope</h4>
            <p>
                <li>Scene construction</li>
                <li>Bar logo</li>
                <li>Bar signage</li>
                <li>Graffiti</li>
                <li>Liquor labels</li>
            </p>
        </div>
        <div className="contents__container--column">
            <h4>Tools used</h4>
            <p>
                <li>Blender</li>
                <li>Procreate</li>
                <li>Figma</li>
                <li>Photoshop</li>
            </p>
        </div>
    </div>
    <img className="contents__container" src={bartop} alt="A render of the bartop of Bar Eclipse"/>
    <div className="contents__container--text">
      <h3>Conceptualization</h3>
      <p>Especially inspired by the vivid, atmospheric scenes found in Wong Kar-wai’s films (I had just seen Happy Together for the first time), I wanted to create a scene that felt rich and intriguing.</p>
      <p>Apartment balconies above the bar, back rooms you can only catch a glimpse of, a cigarette left at the bartop — I wanted the scene to feel as if it was full of stories despite being empty.</p>
      <p>This project was also fully an excuse to experiment with a neon-soaked 1980’s dive bar aesthetic. This meant touching on 80’s graffiti styles (specifically referencing graffiti styles from NYC), beer and liquor labels, and various signage for the bar.</p>
    </div>
    <img className="contents__container" src={fullscene} alt="A full-scene render of Bar Eclipse"/>
    <div className="contents__container--text">
      <h3>Bar Logo</h3>
      <p>Inspired by the vintage neon signs of Tokyo and Times Square, I wanted to explore a sci-fi inspired custom type treatment that would work well as a neon sign, and as a vertical box sign.</p>
    </div>
    <img className="contents__container" src={signs} alt="Bar Eclipse signage"/>
    <div className="contents__container--text">
      <h3>Bar Signage</h3>
      <p>Various other signage from within the bar. Here I intentionally created a series of signs that lacked cohesion.</p>
      <p>Using vintage dive bar signage as reference, I really liked how unrefined this signage was, without extreme attention given to design details — stretched fonts, poor kerning, drop-shadows or borders added to type. I wanted to bring some of this charm into my scene as well.</p>
    </div>
    <img className="contents__container" src={singage} alt="Signage designed for within the bar"/>
    <div className="contents__container--text">
      <h3>Graffiti</h3>
      <p>I wanted the graffiti in the scene to feel era-accurate — not the highly refined and polished graffiti we see today from artists who have access to premium paint and a near-unlimited selection of caps.</p>
      <p>I wanted this graffiti to look like it had been done with stock caps on cheap paint stolen from Walmart — faded colours, blown-out lines, lots of drips.</p>
    </div>
    <img className="contents__container" src={graff} alt="Graffiti designed for the scene"/>
    <div className="contents__container--text">
      <h3>Liquor Labels</h3>
      <p>Keeping with the space theme used for the name of the bar, I also created several liquor and beer labels for the bottles present in the scene.</p>
      <p>I took inspiration from the blocky, basic shapes, bold typography, and use of foil accents and badges on 80’s-era labels.</p>
    </div>
    <img className="contents__container" src={labels} alt="Liquor and beer labels used in the bar"/>
  </Layout>
)

export default BarEclipse
