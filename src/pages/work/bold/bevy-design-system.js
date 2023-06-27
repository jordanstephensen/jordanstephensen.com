import React from "react"

import Layout from "../../../components/layout/layout"
import SEO from "../../../components/seo"

import bevycover from "../../../images/bold/bevy/Bevy-Cover.png"

const Agoura = () => (
  <Layout title="Bevy Design System">
    <SEO title="Bevy Design System" />
    <img className="image--body" src={bevycover} alt="Agoura display font"/>
    <div className="contents__text-container">
      <h3>Bevy is Bold's design system, a closed-source React library. Beginning in 2022, I led a redesign of Bevy in the context of Bold's rebrand.<br/></h3>
    </div>
    <div className="contents__text-container">
      <div className="contents__text-container--column">
        <h4>Timeline</h4>
        <p>June 2022—April 2023<br/></p>
      </div>
      <div className="contents__text-container--column">
        <h4>My role</h4>
        <p>I led this project through several phases, including design, development, documentation, and implementation of the system in Bold’s three main Checkout Suite apps.<br/></p>
      </div>
      <div className="contents__text-container--column">
        <h4>Other contributors</h4>
        <p>Bold’s entire product design team participated in a workshop around the system redesign at the project’s inception. They also aided with continued component design following the workshop.
A developer at Bold, David, assisted with the development of the system, specifically refactoring the system to TypeScript. He also helped support the rollout and implementation of the system.<br/></p>
      </div>
    </div>
    <div className="contents__text-container--column">
      <h3>The Project</h3>
      <p>In November 2022, Bold Commerce launched their rebrand. As the company had grown from a start-up to a more mature ecommerce business with enterprise merchant as it’s focus, they felt it was time to overhaul their visual identity, voice, and messaging.
To accompany the rebrand, the product design team felt it was time to also reconsider Bold’s design system, Bevy.
Bevy was a React library born out of necessity in Bold’s early start-up days as they strove to create a shared design language across the various apps begin built. Bevy did the job but was far from perfect — lacking the flexibility needed to build the more complex solutions now present in Bold’s suite of apps. It was also beginning to feel pretty dated and out of touch with current design trends.</p>
    </div>
    <img className="image--body" src={bevycover} alt="Agoura display font"/>
    <small className="text--caption">Note, I had no involvement in Bold’s original brand design, or the rebrand. The rebrand was done by an external agency, Matchstic. Brand assets provided here are only for context.
I did however work on the illustration systems and iconography shown here.</small>
    <div className="contents__text-container--column">
      <h3>Getting Started</h3>
      <h4>Workshops</h4>
      <p>In July of 2022, Bold’s product design team gathered in Winnipeg for three days of design system workshopping.</p>
      <h4>Research & Audit</h4>
      <p>Prior to the workshops, we had spent some time auditing our apps for ways that we were using Bevy inconsistently or poorly, as well as collecting reference material from competitors and other design systems that we appreciated.
During the workshops, we did several sorting and prioritization exercises to determine what areas we should focus on for improvement, and what sort of design trends and cues we would like to incorporate into Bevy.</p>
      <h4>What we found</h4>
      <p>The main pain points we wanted to address had to do with Bevy’s usability:
        <li>Bevy lacked a lot of consistency in interactive states. We appreciated the visual feedback given by other systems when navigating via keyboard or mouse.</li>
        <li>Bevy was not the most inclusive system. Overall, type and components were small, and many components had low contrast, making the system difficult to use for low-vision or mobile users.</li>
      </p>
    </div>
    <img className="image--body" src={bevycover} alt="Agoura display font"/>
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
