import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import cover from "../../images/keys/keys-cover.png"
import alphabet from "../../images/keys/keys-alphabet.svg"
import numbers from "../../images/keys/keys-numbers.svg"
import symbols from "../../images/keys/keys-symbols.svg"
import diacritics1 from "../../images/keys/keys-diacritics-1.svg"
import diacritics2 from "../../images/keys/keys-diacritics-2.svg"
import text from "../../images/keys/keys-text.svg"

const Keys = () => (
  <Layout title="Keys Stencil">
    <SEO title="Keys Stencil Display Font" />
    <h3><br/>Open-source<br/>
      SIL Open Font License 1.1<br/><br/>
      <a href=""> Source Files</a><br/><br/>
    </h3>
    {/* <img class="bodyimage" src={cover} alt="Eternal display font"/> */}
    <img class="bodyimage" src={alphabet} alt="Keys stencil font alphabet"/>
    <img class="bodyimage" src={numbers} alt="Keys stencil font numbers"/>
    <img class="bodyimage" src={symbols} alt="Keys stencil font symbols"/>
    <img class="bodyimage" src={diacritics1} alt="Keys stencil font diacritics"/>
    <img class="bodyimage" src={diacritics2} alt="Keys stencil font diacritics"/>
    <img class="bodyimage" src={text} alt="Keys stencil font text samples"/>

  </Layout>
)

export default Keys
