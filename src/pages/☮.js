import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const InnerPeace = () => (
    <div><SEO title="Inner Peace" />
        <Link className="peacelink" to="/">‹</Link>
        <div className="inner-peace__glow--outer">
        <div className="inner-peace__glow--inner" />
            <h3 className="inner-peace__text">Take a minute</h3>
        </div>
        <iframe title="background-audio" className="secrets" width="560" height="315" src="https://www.youtube.com/embed/3De7YzwkbpI?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    )

export default InnerPeace
