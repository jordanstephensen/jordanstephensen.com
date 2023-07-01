import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import characters from "../../images/agoura/agoura-characters.svg"

const Agoura = () => (
  <Layout title="Agoura Display">
    <SEO title="Agoura Display Font" />
    <div className="contents__container">
      <div className="contents__container-column--2">
        <h3>Not yet released<br/></h3>
      </div>
      <div className="contents__container-column--2">
        <p>
        A display serif inspired by the high-contrast type of the 60’s and 70’s. Work in progress.
        </p>
      </div>
    </div>
    <img className="contents__container" src={characters} alt="Agoura display font"/>
  </Layout>
)

export default Agoura
