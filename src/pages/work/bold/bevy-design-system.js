import React from "react"

import Layout from "../../../components/layout/layout"
import Link from "../../../components/link/link"
import SEO from "../../../components/seo"

import bevycover from "../../../images/bold/bevy/bevy-cover.png"
import brandold from "../../../images/bold/bevy/bold-brand-new.png"
import brandnew from "../../../images/bold/bevy/bold-brand-old.png"
import workshops1 from "../../../images/bold/bevy/bevy-workshops-1.png"
import workshops2 from "../../../images/bold/bevy/bevy-workshops-2.png"
import contrast from "../../../images/bold/bevy/bevy-contrast.png"
import sizes from "../../../images/bold/bevy/bevy-sizes.png"

const Agoura = () => (
  <Layout title="Bevy Design System">
    <SEO title="Bevy Design System" />
    <img className="contents__container" src={bevycover} alt="An overview of Bevy's component library"/>
    <div className="contents__container">
      <h3>Bevy is Bold's design system, a closed-source React library. Beginning in 2022, I led a redesign of Bevy in the context of Bold's rebrand.<br/></h3>
    </div>
    <div className="contents__container">
      <div className="contents__container--column">
        <h4>Timeline</h4>
        <p>June 2022—April 2023<br/></p>
      </div>
      <div className="contents__container--column">
        <h4>My role</h4>
        <p>I led this project through several phases, including design, development, documentation, and implementation of the system in Bold’s three main Checkout Suite apps.<br/></p>
      </div>
      <div className="contents__container--column">
        <h4>Other contributors</h4>
        <p>Bold’s entire product design team participated in a workshop around the system redesign at the project’s inception. They also aided with continued component design following the workshop.</p>
        <p>A developer at Bold, David, assisted with the development of the system, specifically refactoring the system to TypeScript. He also helped support the rollout and implementation of the system.<br/></p>
      </div>
    </div>
    <div className="contents__container--text">
      <h3>The Project</h3>
      <p>In November 2022, Bold Commerce launched their rebrand. As the company had grown from a start-up to a more mature ecommerce business with enterprise merchant as it’s focus, they felt it was time to overhaul their visual identity, voice, and messaging.</p>
      <p>To accompany the rebrand, the product design team felt it was time to also reconsider Bold’s design system, Bevy.</p>
      <p>Bevy was a React library born out of necessity in Bold’s early start-up days as they strove to create a shared design language across the various apps begin built. Bevy did the job but was far from perfect — lacking the flexibility needed to build the more complex solutions now present in Bold’s suite of apps. It was also beginning to feel pretty dated and out of touch with current design trends.</p>
    </div>
    <div className="contents__container">
      <img className="contents__container--column" src={brandold} alt="Bold's old brand"/>
      <img className="contents__container--column" src={brandnew} alt="Bold's rebrand"/>
    </div>
    <small className="text--caption">Note, I had no involvement in Bold’s original brand design, or the rebrand. The rebrand was done by an external agency, <Link href="https://matchstic.com/work/bold" target="_blank">Matchstic</Link>. Brand assets provided here are only for context.
I did however work on the iconography, illustrations, and design system components shown here.</small>
    <div className="contents__container--text">
      <h3>Getting Started</h3>
      <h4>Workshops</h4>
      <p>In July of 2022, Bold’s product design team gathered in Winnipeg for three days of design system workshopping.</p>
      <h4>Research & Audit</h4>
      <p>Prior to the workshops, we had spent some time auditing our apps for ways that we were using Bevy inconsistently or poorly, as well as collecting reference material from competitors and other design systems that we appreciated.</p>
      <p>During the workshops, we did several sorting and prioritization exercises to determine what areas we should focus on for improvement, and what sort of design trends and cues we would like to incorporate into Bevy.</p>
      <h4>What we found</h4>
      <p>The main pain points we wanted to address had to do with Bevy’s usability:
        <li>Bevy lacked a lot of consistency in interactive states. We appreciated the visual feedback given by other systems when navigating via keyboard or mouse.</li>
        <li>Bevy was not the most inclusive system. Overall, type and components were small, and many components had low contrast, making the system difficult to use for low-vision or mobile users.</li>
      </p>
    </div>
    <div className="contents__container">
      <img className="contents__container--column" src={workshops1} alt="Health Icons in use on Alloy Health's website"/>
      <img className="contents__container--column" src={workshops2} alt="Health Icons in use in a presentation at the DHIS2 Conference"/>
    </div>
    <small className="text--caption">Photos from our design team's workshops, July 2022</small>
    <div className="contents__container--text">
      <h3>Addressing Pain Points</h3>
      <p>The main pain points we wanted to address had to do with Bevy’s usability.</p>
      <p>Bevy was not the most inclusive system. Overall, type and components were small, and many components had low contrast, making the system difficult to use for low-vision or mobile users.</p>
      <h4>Visual Accessibility</h4>
      <p>There were two main (front-end) accessibility issues we wanted to improve: contrast in the system and the size of system elements.</p>
      <p>Bevy 1 had generally low visual contrast in many components — unselected form elements, the borders of buttons or form fields. We aimed to increase this contrast, as well as the contrast of typography throughout the system. Bevy 1’s tertiary text color (used for disabled and placeholder text) failed WCAG contrast tests. In Bevy 2, our primary and secondary text colors now both meet AAA standards, and our tertiary color meets AA.</p>
    </div>
    <img className="contents__container" src={contrast} alt="Bevy component and text contrast compared"/>
    <small className="text--caption">Component contrast and text contrast compared between Bevy 1 and 2</small>
    <p>We also generally increased the size of all system elements. We bumped our paragraph font-size up from 14px to 16px, and increased the size of component touch targets, making the system easier to use on mobile devices.</p>
    <img className="contents__container" src={sizes} alt="Bevy component sizes compared"/>
    <small className="text--caption">The size of our typography palette compared between Bevy 1 and 2, as well as the size of touch targets in several components</small>
    <div className="contents__container--text">
      <h4>Standardized interactions</h4>
      <p>Bevy 1 lacked a lot of consistency in interactive states. We appreciated the visual feedback given by other systems when navigating via keyboard or mouse. In our redesign of the system, we ensured that we had consistent visual states across all components, so that users of our system know what to expect when hovering, focusing, and clicking components.</p>
    </div>
    <img className="contents__container" src={contrast} alt="Bevy component and text contrast compared"/>
    <small className="text--caption">Component contrast and text contrast compared between Bevy 1 and 2</small>
    <div className="contents__container--text">
      <h4>Icons</h4>
      <p>The system redesign also included an overhaul of our icon library. Our previous icon library was one of my first solo projects I took on when I started at Bold, a two-tone style with multiple stroke weights. The icons worked well above 24px, but many of the icons began to lose legibility under 20px, very common sizes in our UI.</p>
      <p>We wanted the new style to be more bold and graphic — a blend of lined shapes and solid shapes — that could be more easily understood at smaller sizes.</p>
      <p>The icon library redesign was a task that I tackled on my own. I used SVGR to transform SVGs into React components, and created a separate repo for the library, making them individually importable and consumable for our developers to use in our products.</p>
    </div>
    <img className="contents__container" src={contrast} alt="Bevy component and text contrast compared"/>
    <small className="text--caption">Component contrast and text contrast compared between Bevy 1 and 2</small>
    <div className="contents__container--text">
      <h3>The Process</h3>
      <h4>Continued Design</h4>
      <p>Past our initial 3-day workshop, and once we had established what pain points our focus would be, we divided the component design work among us, working with Brad Frost’s Atomic Design methodology in mind.</p>
      <p>We first explored, and made atomic-level decisions as a group — establishing our color map and status color palette, our type hierarchy, what border-radius we would use, among others.</p>
      <p>Using these decisions, we moved forward with actual molecule-level component design.</p>
      <h4>Figma Component Library</h4>
      <p>After a couple months of component exploration, several rounds of critique sessions and refinement phases, we had our components in a more-or-less finalized state. I began setting the components up as a Figma library, using component properties to match how our components would work in Figma as closely as possible to how our developers would use the React builds. The Figma library went through a testing and refinement phase of about two weeks following this.</p>
    </div>
    <img className="contents__container" src={bevycover} alt="An overview of Bevy's component library"/>
    <small className="text--caption">A condensed overview of our Figma component library. Not all components and not all states shown here. This illustration is intended to give a glimpse into the general look and cohesion of the system.</small>
    <div className="contents__container--text">
      <h4>Development</h4>
      <p>I worked with a developer at Bold, David, on the development of the system. We wanted to take this opportunity to clean the system up as much as possible — so David worked on refactoring the system to Typescript and implementing tree shaking while I tackled all styling changes to the components, as well as any prop additions or deprecations. We also took this opportunity to move the system documentation from Styleguidist to Storybook.</p>
    </div>
    <img className="contents__container" src={bevycover} alt="An overview of Bevy's component library"/>
    <small className="text--caption">A condensed overview of our Figma component library. Not all components and not all states shown here. This illustration is intended to give a glimpse into the general look and cohesion of the system.</small>
    <div className="contents__container--text">
      <h4>Theming</h4>
      <p>I also put together a theming proof of concept using CSS Variables to implement dark mode as a secondary theme. I used two theme files (light and dark), both referencing and aliasing a single source of truth color map. A toggle can be used to switch between the themes by referencing the html attribute data-theme.</p>
      <h4>System Implementation</h4>
      <p>David and I provided support to our product teams as they implemented the system in our main products — Bold Checkout, Bold Subscriptions, and Bold Account Center. Dark mode is currently live in Bold Account Center as a beta feature.</p>
    </div>
    <img className="contents__container" src={bevycover} alt="An overview of Bevy's component library"/>
    <small className="text--caption">A condensed overview of our Figma component library. Not all components and not all states shown here. This illustration is intended to give a glimpse into the general look and cohesion of the system.</small>
    <div className="contents__container--text">
      <h3>Results</h3>
      <h4>Easy upgrade</h4>
      <p>The new system was designed to be easily implemented by our development team. Because a structural app redesign was not in scope, we needed the new system to comfortably cover all of the design patterns we used with our old one, with as little breaking changes as possible.</p>
      <h4>Brand Cohesion</h4>
      <p>The original purpose of the system redesign — we now have a system that not only looks more fresh and modern, but a system that aligns well with Bold’s new brand and provides a sense of cohesion between our products and our marketing material.</p>
      <h4>More flexibility</h4>
      <p>A more flexible system means less broken components when designing, and less custom CSS when implementing — streamlining the process for both the design and development teams.</p>
      <h4>Improved usability</h4>
      <p>Between the improved front-end accessibility and the changes to component size, our new system is overall easier to use for people who may have visual impairments or may be using our products on smaller screens.</p>
    </div>


  </Layout>
)

export default Agoura
