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
    <div className="contents__container">
      <div className="contents__column--2">
        <h3>Open-source<br/>
          SIL Open Font License 1.1<br/><br/>
          <Link href="https://github.com/jordanstephensen/eternal-mono" target="_blank">Source Files</Link>
        </h3>
      </div>
      <div className="contents__column--2">
        <p>
          Just a fun display mono.<br/><br/>
          Limited character set for now. Alphabet, numbers, some symbols. May add to this in the future.<br/><br/>
        </p>
      </div>
    </div>
    <img className="contents__container" src={cover} alt="Eternal display font"/>
    <img className="contents__container" src={alphabet} alt="Eternal display font alphabet"/>
    <img className="contents__container" src={numbers} alt="Eternal display font numbers"/>
    <img className="contents__container" src={symbols} alt="Eternal display font symbols"/>
    <h3>
      <Link href="https://github.com/jordanstephensen/eternal-mono" target="_blank">Source Files</Link>
    </h3>
  </Layout>
)

export default Eternal
