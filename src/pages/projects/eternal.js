import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
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
          <a href="https://github.com/jordanstephensen/eternal-mono" target="_blank" rel="noreferrer">Source Files</a>
        </h3>
      </div>
      <div className="contents__text-container--2col">
        <p>
          Just a fun display mono.<br/><br/>
          Limited character set for now. Alphabet, numbers, some symbols. May add to this in the future.<br/><br/>
        </p>
      </div>
    </div>
    <img className="bodyimage" src={cover} alt="Eternal display font"/>
    <img className="bodyimage" src={alphabet} alt="Eternal display font alphabet"/>
    <img className="bodyimage" src={numbers} alt="Eternal display font numbers"/>
    <img className="bodyimage" src={symbols} alt="Eternal display font symbols"/>

  </Layout>
)

export default Eternal
