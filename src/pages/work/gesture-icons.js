import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Link from "../../components/link/link"

import icons from "../../images/gesture-icons/gesture-icons.png"
import animation from "../../images/gesture-icons/gesture-animation.gif"

const GestureIcons = () => (
  <Layout title="Gesture Icons">
    <SEO title="Gesture Icons" />
    <div className="contents__container">
      <div className="contents__container-column--2">
        <h3>Open-source<br/>
        CC BY 4.0 License<br/><br/>
          <Link href="https://www.figma.com/community/file/809271168141873252" target="_blank">Figma Community File</Link>
        </h3>
      </div>
      <div className="contents__container-column--2">
        <p>A set of open source gesture icons, designed on a 48px grid, intended as a UX design resource to allow for visual interaction annotation in user flows. <br/></p>
      </div>
    </div>
    <img className="contents__container" src={icons} alt="48px gesture icon set"/>
    <small className="text--caption">Use or remix the icons by duplicating the <Link href="https://www.figma.com/community/file/809271168141873252" target="_blank">Figma Community file</Link></small>
    <div className="contents__container">
        <div className="contents__container-column--2">
        <p>The set was published to Figma Community in 2020, and has since been used by 11.7k designers.</p>
            <p>In 2021, the icon set was animated by <Link href="https://twitter.com/willbergerking" target="_blank">Will Berger</Link><br/></p>
            <p>The animated set is also available to use or remix via <br/> <Link href="https://www.figma.com/community/file/978366985758747158" target="_blank">Figma Community</Link> <br/></p>
        </div>
        <div className="contents__container-column--2">
            <img className="contents__container-column--2" src={animation} alt="Gesture icons animated by Will Berger"/>
            <small className="text--caption">Gesture icons animated by Will Berger</small>
        </div>
    </div>
  </Layout>
)

export default GestureIcons
