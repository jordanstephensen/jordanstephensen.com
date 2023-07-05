import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import crabapple from "../../images/logo-portfolio/logo-crabapple.svg"
import charles from "../../images/logo-portfolio/logo-charles.svg"
import mitchell from "../../images/logo-portfolio/logo-mitchell-block.svg"
import landf from "../../images/logo-portfolio/logo-lost-found.svg"
import ov from "../../images/logo-portfolio/logo-ov.svg"
import albert from "../../images/logo-portfolio/logo-albertst.svg"
import ysl from "../../images/logo-portfolio/logo-ysl.svg"
import endive from "../../images/logo-portfolio/logo-endive.svg"
import truflo from "../../images/logo-portfolio/logo-truflo.svg"
import soi from "../../images/logo-portfolio/logo-soi.svg"
import msp from "../../images/logo-portfolio/logo-msp.svg"
import wayhii from "../../images/logo-portfolio/logo-wayhii.svg"
import nomad from "../../images/logo-portfolio/logo-nomad.svg"
import sneath from "../../images/logo-portfolio/logo-sneath.svg"
import sv from "../../images/logo-portfolio/logo-sv.svg"
import sebastian from "../../images/logo-portfolio/logo-stsebastian.svg"


const LogoPortfolio = () => (
  <Layout title="Logo Portfolio">
    <SEO title="Logo Portfolio" />
    <div className="contents__container">
      <div className="contents__column--2">
        <h3>Ongoing<br/></h3>
      </div>
      <div className="contents__column--2">
        <p>A selection of logos from between 2015–2022</p> 
      </div>
    </div>
    <div className="contents__container" >
        <img className="contents__column--3" src={crabapple} alt="The Crabapple Tree logo"/>
        <img className="contents__column--3" src={charles} alt="The Charles Condo logo"/>
        <img className="contents__column--3" src={mitchell} alt="The Mitchell Block logo"/>
        <img className="contents__column--3" src={landf} alt="Lost and Found logo"/>
        <img className="contents__column--3" src={ov} alt="OV Club logo"/>
        <img className="contents__column--3" src={albert} alt="Albert Street Cocktail Company logo"/>
        <img className="contents__column--3" src={ysl} alt="Y$L logo"/>
        <img className="contents__column--3" src={endive} alt="Endive logo"/>
        <img className="contents__column--3" src={truflo} alt="TruFlo logo"/>
        <img className="contents__column--3" src={soi} alt="So Over It logo"/>
        <img className="contents__column--3" src={msp} alt="MSP logo"/>
        <img className="contents__column--3" src={wayhii} alt="WayHii logo"/>
        <img className="contents__column--3" src={nomad} alt="Nomad logo"/>
        <img className="contents__column--3" src={sneath} alt="Sneath logo"/>
        <img className="contents__column--3" src={sv} alt="SV logo"/>
    </div>
  </Layout>
)

export default LogoPortfolio
