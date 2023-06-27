import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Link from "../../components/link/link"

import lineicons from "../../images/healthicons/healthicons-grid-line.svg"
import solidicons from "../../images/healthicons/healthicons-grid-solid.svg"

const Eternal = () => (
  <Layout title="Health Icons">
    <SEO title="Health Icons" />
    <div className="contents__text-container">
      <div className="contents__text-container--column">
        <h3>Open-source<br/>
        CC0 License<br/><br/>
          <Link href="https://healthicons.org/" target="_blank">Project Website</Link>
        </h3>
      </div>
      <div className="contents__text-container--column">
        <big>
        Health Icons is a volunteer effort, hosted by public health not-for-profit <Link href="https://resolvetosavelives.org/" target="_blank" >Resolve to Save Lives</Link>. These icons are available in the public domain for use in any type of project.
        <br/><br/></big>
        <p>
          In 2021, myself and a small group of designers and developers, led by <Link href="https://twitter.com/dburka" target="_blank">Daniel Burka</Link>, created the open-source icon library Heath Icons. Originally intended to replace the <Link href="https://dhis2.org/" target="_blank">DHIS2</Link> icon library, we expanded it and published it independantly for the global good for health projects all over the world.<br/><br/>
          Below are a selection of icons I worked on for the project.<br/>
        </p>
      </div>
    </div>
    <img className="image--body" src={lineicons} alt="Line variation of Health Icons"/>
    <img className="image--body" src={solidicons} alt="Solid variation of Health Icons"/>
    <h3>
      <Link href="https://healthicons.org/" target="_blank">Project Website</Link>
    </h3>
  </Layout>
)

export default Eternal
