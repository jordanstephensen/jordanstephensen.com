import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import cover from "../../images/eternal/eternal-cover.png"
import alphabet from "../../images/eternal/eternal-alphabet.svg"
import symbols from "../../images/eternal/eternal-symbols.svg"

const Eternal = () => (
  <Layout title="Eternal Mono">
    <SEO title="Eternal Monospace Display Font" />
    <img class="bodyimage" src={cover} alt="Eternal display font"/>
    <img class="bodyimage" src={alphabet} alt="Eternal display font alphabet"/>
    <img class="bodyimage" src={symbols} alt="Eternal display font symbols"/>
    <h3><br/>Open-source<br/>
      MIT License<br/>
      Download coming soon<br/>
    </h3>

  </Layout>
)

export default Eternal
