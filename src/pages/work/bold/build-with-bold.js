import React from "react"

import Layout from "../../../components/layout/layout"
import SEO from "../../../components/seo"

import bevycover from "../../../images/bold/bevy/Bevy-Cover.png"

const Agoura = () => (
  <Layout title="Empowering Developers to Build with Bold">
    <SEO title="Empowering Developers to Build with Bold" />
    <img className="image--body" src={bevycover} alt="Agoura display font"/>
    <div className="contents__text-container">
    <h3>Begining in 2021 I led an initiative to help simplify the process for third-party developers to build, publish, and test integrations built with Bold's APIs.<br/></h3>
    </div>
    <div className="contents__text-container">
        <div className="contents__text-container--column">
            <h4>Timeline</h4>
            <p>November 2021 – March 2022<br/></p>
        </div>
        <div className="contents__text-container--column">
            <h4>My role</h4>
            <p>I was the sole designer working on this feature, and handled the entire design process, including wire-framing, usability testing, high fidelity design, and developer handoff on my own.<br/></p>
        </div>
        <div className="contents__text-container--column">
            <h4>Other contributors</h4>
            <p>I collaborated with other product designers on early developer personas and journey mapping, as well as developer interviewing and affinity mapping. These designers are credited where collaborative work is shown.
On the Account Center team, there were six Developers, a Product Manager, and Quality Assurance.<br/></p>
        </div>
    </div>
    <div className="contents__text-container--column">
        <h3>The Project</h3>
        <p>In November 2022, Bold Commerce launched their rebrand. As the company had grown from a start-up to a more mature ecommerce business with enterprise merchant as it’s focus, they felt it was time to overhaul their visual identity, voice, and messaging.
To accompany the rebrand, the product design team felt it was time to also reconsider Bold’s design system, Bevy.
Bevy was a React library born out of necessity in Bold’s early start-up days as they strove to create a shared design language across the various apps begin built. Bevy did the job but was far from perfect — lacking the flexibility needed to build the more complex solutions now present in Bold’s suite of apps. It was also beginning to feel pretty dated and out of touch with current design trends.</p>
    </div>
    <img className="image--body" src={bevycover} alt="Agoura display font"/>
    </Layout>
)

export default Agoura
