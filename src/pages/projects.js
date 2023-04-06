import React, { useState } from "react"
import cn from 'classnames';

import Card from "../components/card/card"
import Layout from "../components/layout/layout"
import Background from "../components/background/background"
import Filter from "../components/filter/filter"
import SEO from "../components/seo"

import eternalthumb from '../images/eternal/eternal-thumbnail.svg'
import keysthumb from '../images/keys/keys-thumbnail.svg'
import agourathumb from '../images/agoura/agoura-thumbnail.svg'
import mspthumb from '../images/msp/msp-thumbnail.svg'
import uxuithumb from '../images/uxui/uxui-thumbnail.svg'
import logo from '../images/js-logo.svg'


const Work = ({  }) => {
  const [active, setActive] = useState('all')

  return (
    <Layout title="Projects">
      <SEO title="Projects" />
      <div className="js-projects">
        <div className="js-projects__filters">
          <Filter 
            label="All"
            name='all'
            onClick={(e) => setActive('all')}
            active={active === 'all'}
          />
          <Filter 
            label="UX/UI"
            name='uxui'
            onClick={(e) => setActive('uxui')}
            active={active === 'uxui'}
          />
          <Filter 
            label="Branding"
            name='branding'
            onClick={(e) => setActive('branding')}
            active={active === 'branding'}
          />
          <Filter 
            label="Type"
            name='type'
            onClick={(e) => setActive('type')}
            active={active === 'type'}
          />
        </div>
        <div 
          className={
            cn([
              'js-projects__card-container',
              {
                'js-projects__card-container--uxui': active === 'uxui',
                'js-projects__card-container--branding': active === 'branding',
                'js-projects__card-container--type': active === 'type',
              }
            ])
          }
        >
          <Card 
            className='js-projects__card-container__card--uxui'
            image={logo}
            link="https://github.com/jordanstephensen/jordanstephensen.com"
            target="_blank"
            title="Personal site"
            category="UX/UI"
            descriptor="Website"
            year="Ongoing"
          >
            <small>
              My personal website. Built using Gatsby and hosted on Netlify.
            </small>
          </Card>

          <Card 
            className='js-projects__card-container__card--uxui'
            image={uxuithumb}
            link="https://uxui.com"
            target="_blank"
            title="UXUI"
            category="UX/UI"
            descriptor="Website"
            year="Ongoing"
          >
            <small>
              An archive of mostly open-source UX/UI tools and resources.
            </small>
          </Card>

          <Card 
            className='js-projects__card-container__card--branding'
            image={mspthumb}
            link="https://www.behance.net/gallery/78359409/Mercury-Specialty-Products"
            target="_blank"
            title="MSP"
            category="Branding"
            descriptor="Logo & Identity"
            year="2019"
          >
            <small>
              Mercury Specialty Projects, a metal fabrication company.
            </small>
          </Card>

          <Card 
            className='js-projects__card-container__card--type'
            image={eternalthumb}
            link="/projects/eternal"
            title="Eternal"
            category="Type design"
            descriptor="Display Mono"
            year="2020"
          >
            <small>
              A fun dotted display mono. Limited character set.
            </small>
          </Card>

          <Card 
            className='js-projects__card-container__card--type'
            image={keysthumb}
            link="/projects/keys"
            title="Keys"
            category="Type design"
            descriptor="Stencil"
            year="2018"
          >
            <small>
              A blocky, geometric stencil display font.
            </small>
          </Card>

          <Card 
            className='js-projects__card-container__card--type'
            image={agourathumb}
            link="/projects/agoura"
            title="Agoura"
            category="Type design"
            descriptor="Serif"
            year="Ongoing"
          >
            <small>
              A display serif. Not yet finished.
            </small>
          </Card>
        </div>
      </div>
      <Background />
    </Layout>
  )
}

export default Work
