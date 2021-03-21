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
    <div className="contents__text-container">
      <div className="contents__text-container--2col">
        <h3>Open-source<br/>
          SIL Open Font License 1.1<br/><br/>
          <a href="https://github.com/jordanstephensen/keys-stencil" target="_blank"> Source Files</a><br/><br/>
        </h3>
      </div>
      <div className="contents__text-container--2col">
        <p>
          A blocky, geometric stencil display font. Looks best at large scale.
          357 Characters
          Includes Letters, Numbers, Punctuation, Separators, Symbols, Marks and Latic Diacritics.
        </p>
      </div>
    </div>
    <img className="bodyimage" src={alphabet} alt="Keys stencil font alphabet"/>
    <img className="bodyimage" src={numbers} alt="Keys stencil font numbers"/>
    <img className="bodyimage" src={symbols} alt="Keys stencil font symbols"/>
    <img className="bodyimage" src={diacritics1} alt="Keys stencil font diacritics"/>
    <img className="bodyimage" src={diacritics2} alt="Keys stencil font diacritics"/>
    <img className="bodyimage" src={text} alt="Keys stencil font text samples"/>

  </Layout>
)

export default Keys
