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
        <h3><Link id="peacelink" to="/">←</Link></h3>
    <div id="innerpeace">
            {/* <div id="ipasscontainer">    */}
                {/* <img class="ipaas" id="ipaas1" src={ipaas1} alt="inner peace" /><br />
                <img class="ipaas" id="ipaas2" src={ipaas2} alt="inner peace" /><br />
                <img class="ipaas" id="ipaas3" src={ipaas3} alt="inner peace" /><br /> */}
            {/* </div> */}
        <div id="peacetext">
        <img class="ipaas" id="ipaas1" src={ipaas1} alt="Inner Peace as a Service" /><br />
            <h3 id="peacetext">Beta{/* <Link to="/">Return</Link> */}</h3>
            <p class="secrets">This page is completely meaningless lol it was just for fun. But while you're here, stop looking at the code and enjoy some nice gradients.</p>
        </div>
        <div id="innerglow"></div>
    </div>
    </peacecontainer>
    )

export default InnerPeace
