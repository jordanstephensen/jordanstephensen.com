import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Link from "../../components/link/link"

import alphabet from "../../images/keys/keys-alphabet.svg"
import numbers from "../../images/keys/keys-numbers.svg"
import symbols from "../../images/keys/keys-symbols.svg"
import diacritics1 from "../../images/keys/keys-diacritics-1.svg"
import diacritics2 from "../../images/keys/keys-diacritics-2.svg"
import text from "../../images/keys/keys-text.svg"

const Keys = () => (
  <Layout title="Keys Stencil">
    <SEO title="Keys Stencil Display Font" />
    <div className="contents__container">
      <div className="contents__column--2">
        <h3>Open-source<br/>
          SIL Open Font License 1.1<br/><br/>
          <Link href="https://github.com/jordanstephensen/keys-stencil" target="_blank"> Source Files</Link>
        </h3>
      </div>
      <div className="contents__column--2">
        <p>
          A blocky, geometric stencil display font. Looks best at large scale.<br/><br/>
          357 Characters.<br/><br/>
          Includes Letters, Numbers, Punctuation, Separators, Symbols, Marks and Latic Diacritics.
        </p>
      </div>
    </div>
    <img className="contents__container" src={alphabet} alt="Keys stencil font alphabet"/>
    <img className="contents__container" src={numbers} alt="Keys stencil font numbers"/>
    <img className="contents__container" src={symbols} alt="Keys stencil font symbols"/>
    <img className="contents__container" src={diacritics1} alt="Keys stencil font diacritics"/>
    <img className="contents__container" src={diacritics2} alt="Keys stencil font diacritics"/>
    <img className="contents__container" src={text} alt="Keys stencil font text samples"/>
    <h3>
      <Link href="https://github.com/jordanstephensen/keys-stencil" target="_blank"> Source Files</Link>
    </h3>
  </Layout>
)

export default Keys
