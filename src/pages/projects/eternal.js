import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Link from "../../components/link/link"

import cover from "../../images/eternal/eternal-cover-2.png"
import alphabet from "../../images/eternal/eternal-alphabet.svg"
import numbers from "../../images/eternal/eternal-numbers.svg"
import symbols from "../../images/eternal/eternal-symbols.svg"

const Eternal = () => (
  <Layout title="Eternal Mono">
    <SEO title="Eternal Monospace Display Font" />
    <div className="contents__text-container">
      <div className="contents__text-container--2col">
        <h3>Open-source<br/>
          SIL Open Font License 1.1<br/><br/>
          <Link href="https://github.com/jordanstephensen/eternal-mono" target="_blank">Source Files</Link>
        </h3>
      </div>
      <div className="contents__text-container--2col">
        <p>
          Just a fun display mono.<br/><br/>
          Limited character set for now. Alphabet, numbers, some symbols. May add to this in the future.<br/><br/>
        </p>
      </div>
    </div>
    <img className="image--body" src={cover} alt="Eternal display font"/>
    <img className="image--body" src={alphabet} alt="Eternal display font alphabet"/>
    <img className="image--body" src={numbers} alt="Eternal display font numbers"/>
    <img className="image--body" src={symbols} alt="Eternal display font symbols"/>
    <Link href="https://github.com/jordanstephensen/eternal-mono" target="_blank">Source Files</Link>
  </Layout>
)

export default Eternal
