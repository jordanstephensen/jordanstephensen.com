import React from "react"
import { Link } from "gatsby"
import ipaas1 from '../images/iPaaS-chrome-btmp.png'
// import ipaas2 from '../images/iPaaS-chrome-2-btmp.png'
// import ipaas3 from '../images/iPaaS-chrome-3-btmp.png'


import SEO from "../components/seo"

// window.addEventListener("DOMContentLoaded", event => {
//     const audio = document.querySelector("audio");
//     audio.volume = 0.2;
//     audio.play();
//   });

const InnerPeace = () => (
    <peacecontainer><SEO title="Inner Peace" />
    <Link id="peacelink" to="/">‹</Link>
    <div id="innerpeace">
            {/* <div id="ipasscontainer">    */}
                {/* <img class="ipaas" id="ipaas1" src={ipaas1} alt="inner peace" /><br />
                <img class="ipaas" id="ipaas2" src={ipaas2} alt="inner peace" /><br />
                <img class="ipaas" id="ipaas3" src={ipaas3} alt="inner peace" /><br /> */}
            {/* </div> */}
        <div id="peacetext">
            {/* <img class="ipaas" id="ipaas1" src={ipaas1} alt="Inner Peace as a Service" /><br />
            <h3 >Beta</h3> */}
            <iframe class="secrets" width="560" height="315" src="https://www.youtube.com/embed/3De7YzwkbpI?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p class="secrets">A little break room, just enjoy the gradients</p>
        </div>
        <div id="innerglow"></div>
    </div>
    </peacecontainer>
    )

export default InnerPeace
