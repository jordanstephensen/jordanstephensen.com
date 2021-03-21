import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import cover from "../../images/eternal/eternal-cover.png"
import alphabet from "../../images/eternal/eternal-alphabet.svg"
import numbers from "../../images/eternal/eternal-numbers.svg"
import symbols from "../../images/eternal/eternal-symbols.svg"

const Eternal = () => (
  <Layout title="Eternal Mono">
    <SEO title="Eternal Monospace Display Font" />
    <h3><br/>Open-source<br/>
      SIL Open Font License 1.1<br/><br/>
      <a href=""> Source Files</a><br/><br/>
    </h3>
    {/* <img class="bodyimage" src={cover} alt="Eternal display font"/> */}
    <img src={alphabet} alt="Eternal display font alphabet"/>
    <img src={numbers} alt="Eternal display font numbers"/>
    <img src={symbols} alt="Eternal display font symbols"/>

  </Layout>
)

export default Eternal
