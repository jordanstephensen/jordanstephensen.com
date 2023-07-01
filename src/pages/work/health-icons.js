import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Link from "../../components/link/link"

import lineicons from "../../images/health-icons/healthicons-grid-line.svg"
import solidicons from "../../images/health-icons/healthicons-grid-solid.svg"
import group from "../../images/health-icons/healthicons-group.jpg"
import figma from "../../images/health-icons/healthicons-figma.png"
import design from "../../images/health-icons/healthicons-design.png"
import guidelines from "../../images/health-icons/healthicons-guidelines.png"
import web from "../../images/health-icons/healthicons-web.png"
import use from "../../images/health-icons/healthicons-use.png"
import conference from "../../images/health-icons/healthicons-conference.png"

const HealthIcons = () => (
  <Layout title="Health Icons">
    <SEO title="Health Icons" />
    <div className="contents__container">
      <div className="contents__container-column--2">
        <h3>Open-source<br/>
        CC0 License<br/><br/>
          <Link href="https://healthicons.org/" target="_blank">Project Website</Link>
        </h3>
      </div>
      <div className="contents__container-column--2">
        <big>
        Health Icons is a volunteer effort, hosted by public health not-for-profit <Link href="https://resolvetosavelives.org/" target="_blank" >Resolve to Save Lives</Link>. These icons are available in the public domain for use in any type of project.
        <br/><br/></big>
        <p>
          In 2021, myself and a small group of designers and developers, led by <Link href="https://twitter.com/dburka" target="_blank">Daniel Burka</Link>, created the open-source icon library Heath Icons. Originally intended to replace the <Link href="https://dhis2.org/" target="_blank">DHIS2</Link> icon library, we expanded it and published it independantly for the global good for health projects all over the world.<br/>
        </p>
      </div>
    </div>
    <img className="contents__container" src={web} alt="Health Icons' website"/>
    <small className="text--caption"><Link href="https://healthicons.org/" target="_blank">Health Icons website</Link></small>
    <img className="contents__container" src={lineicons} alt="Line variation of Health Icons"/>
    <img className="contents__container" src={solidicons} alt="Solid variation of Health Icons"/>
    <small className="text--caption">A selection of icons I contributed to the project</small>
    <div className="contents__container--text">
      <h3>The Team</h3>
      <p>The team behind Health Icons has grown, but in the early days of the project, there were around 12–15 of us working on the first iteration of the library. We were spread across the world, and worked asynchronously, using Figma to collaboratively design the library, and Slack for communication.</p>
      <p>The first iteration of the library went through several auditing and refinement phases as we worked to define a visual language for the icons to share.</p>
    </div>
    <img className="contents__container" src={group} alt="A Zoom meeting with other members of the Health Icons project"/>
    <small className="text--caption">Myself and other members of the Health Icons project during our first Zoom meet-up</small>
    <img className="contents__container" src={design} alt="Design collaboration in Health Icons' Figma file"/>
    <small className="text--caption">Working asynchronously in Figma required a structured approach when taking icons through several phases including design exploration, review, refinement, and export preperation</small>
    <img className="contents__container" src={guidelines} alt="Defining icon guidelines in Health Icons' Figma file"/>
    <small className="text--caption">Working to define guidelines for icon design and project contribution</small>
    <div className="contents__container--text">
      <h3>Project Launch</h3>
      <p>In June 2021, we launched the library with 630 icons on <Link href="https://www.producthunt.com/products/health-icons" target="_blank">ProductHunt</Link> where it recieved 291 upvotes.</p>
      <p>The same week, <Link href="https://www.fastcompany.com/90647428/these-icons-create-a-universal-language-for-healthcare-from-blood-type-to-sex-work" target="_blank">Fast Company wrote about the project</Link> and the team's goals.</p>
      <h3>Project Evolution</h3>
      <p>Since the launch of the project, active design and development has continued. The size of the library has grown to 1198 icons, with more being added every day. </p>
      <p>In July 2021, Health Icons launched a <Link href="https://www.figma.com/community/plugin/992844281461869440/Health-Icons-Figma-Plugin" target="_blank">Figma plugin</Link> allowing for the search and use of all icons in Figma projects. The Figma plugin was developed by <Link href="https://twitter.com/tkmadeit" target="_blank">Tekeste Kidanu</Link></p>
    </div>
    <img className="contents__container" src={figma} alt="Health Icons Figma Plugin"/>
    <small className="text--caption">The entire Health Icons library is available as a <Link href="https://www.figma.com/community/plugin/992844281461869440/Health-Icons-Figma-Plugin" target="_blank">Figma plugin</Link></small>
    <div className="contents__container">
      <img className="contents__container-column--2" src={use} alt="Health Icons in use on Alloy Health's website"/>
      <img className="contents__container-column--2" src={conference} alt="Health Icons in use in a presentation at the DHIS2 Conference"/>
    </div>
    <small className="text--caption">Icons in use: Health Icons used on <Link href="https://www.alloy.health/healthcareos" target="_blank">Alloy Health's website</Link> and in a presentation at the DHIS2 Conference</small>
  </Layout>
)

export default HealthIcons
