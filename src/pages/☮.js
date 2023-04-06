import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const InnerPeace = () => (
    <peacecontainer><SEO title="Inner Peace" />
    <Link id="peacelink" to="/">‹</Link>
    <div id="outerglow">
    <div id="innerglow" />
            <iframe class="secrets" width="560" height="315" src="https://www.youtube.com/embed/3De7YzwkbpI?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p class="secrets">A little break room, just enjoy the gradients</p>
            <h3>Take a minute to breathe</h3>
    </div>
    </peacecontainer>
    )

export default InnerPeace
