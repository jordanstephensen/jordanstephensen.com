import React, { useState } from "react"
import cn from 'classnames';

import Card from "../components/card/card"
import Layout from "../components/layout/layout"
import Background from "../components/background/background"
import Filter from "../components/filter/filter"
import SEO from "../components/seo"

import boldthumb from '../images/bold/bold-thumbnail.png'
import eternalthumb from '../images/eternal/eternal-thumbnail.png'
import keysthumb from '../images/keys/keys-thumbnail.svg'
import agourathumb from '../images/agoura/agoura-thumbnail.png'
import mspthumb from '../images/msp/msp-thumbnail.png'
import ovthumb from '../images/ovclub/ovclub-thumbnail-2.png'
import uxuithumb from '../images/uxui/uxui-thumbnail.svg'
import healthiconsthumb from '../images/healthicons/healthicons-thumbnail.svg'
import threedthumb from '../images/3d-sketchbook/3d-sketchbook-thumbnail.png'
import eclipsethumb from '../images/bar-eclipse/eclipse-thumbnail.png'
import logo from '../images/js-logo.svg'


const Work = ({  }) => {
  const [active, setActive] = useState('all')

  return (
    <Layout title="Work">
      <SEO title="Work" />
      <div className="js-projects">
        <div className="js-projects__filters">
          <Filter 
            label="All"
            name='all'
            onClick={(e) => setActive('all')}
            active={active === 'all'}
          />
          <Filter 
            label="UXUI"
            name='uxui'
            onClick={(e) => setActive('uxui')}
            active={active === 'uxui'}
          />
          <Filter 
            label="Iconography"
            name='iconography'
            onClick={(e) => setActive('iconography')}
            active={active === 'iconography'}
          />
          <Filter 
            label="Branding"
            name='branding'
            onClick={(e) => setActive('branding')}
            active={active === 'branding'}
          />
          <Filter 
            label="Typography"
            name='typography'
            onClick={(e) => setActive('typography')}
            active={active === 'typography'}
          />
          <Filter 
            label="3D"
            name='3d'
            onClick={(e) => setActive('3d')}
            active={active === '3d'}
          />        
        </div>
        <div 
          className={
            cn([
              'js-projects__card-container',
              {
                'js-projects__card-container--uxui': active === 'uxui',
                'js-projects__card-container--iconography': active === 'iconography',
                'js-projects__card-container--branding': active === 'branding',
                'js-projects__card-container--typography': active === 'typography',
                'js-projects__card-container--3d': active === '3d',
              }
            ])
          }
        >
          <Card 
            className='js-projects__card-container__card--uxui'
            image={logo}
            link="https://github.com/jordanstephensen/jordanstephensen.com"
            target="_blank"
            title="Personal Website"
            category="UXUI"
            descriptor="Website"
            year="Ongoing"
          >
            <small>
              Source files for my personal website (this one), built from the ground up in Gatsby and hosted on Netlify. Builds are triggered by every push to Main.
            </small>
          </Card>

          {/* <Card 
            className='js-projects__card-container__card--uxui'
            image={boldthumb}
            link="/work/bold"
            title="Bold Commerce Case Studies"
            category="UXUI"
            descriptor="Product Design"
            year="2019–2023"
          >
            <small>
              Product design case studies from my time at Bold Commerce, a Winnipeg-based ecommerce startup.
            </small>
          </Card> */}

          <Card 
            className='js-projects__card-container__card--uxui'
            image={uxuithumb}
            link="https://uxui.com"
            target="_blank"
            title="UXUI.com"
            category="UXUI"
            descriptor="Website"
            year="Ongoing"
          >
            <small>
              An archive of mostly open-source UXUI tools and resources.
            </small>
          </Card>

          <Card 
            className='js-projects__card-container__card--iconography'
            image={healthiconsthumb}
            link="/work/healthicons"
            title="Health Icons"
            category="Iconography"
            descriptor="Open-Source"
            year="2021"
          >
            <small>
              Health Icons is an open source healthcare icon library. I contributed to the launch of this project in 2021.
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
            className='js-projects__card-container__card--branding'
            image={ovthumb}
            link="https://www.behance.net/gallery/170860669/OV-Club-Branding"
            target="_blank"
            title="OV Club"
            category="Branding"
            descriptor="Logo & Identity"
            year="2017"
          >
            <small>
            OV Club is a nightclub located in Winnipeg, Manitoba. I worked with them in early 2017 to develop a brand and support material.
            </small>
          </Card>


          <Card 
            className='js-projects__card-container__card--typography'
            image={eternalthumb}
            link="/work/eternal"
            title="Eternal"
            category="Typography"
            descriptor="Display Mono"
            year="2020"
          >
            <small>
              A fun dotted display mono. Limited character set.
            </small>
          </Card>

          <Card 
            className='js-projects__card-container__card--typography'
            image={keysthumb}
            link="/work/keys"
            title="Keys"
            category="Typography"
            descriptor="Stencil"
            year="2018"
          >
            <small>
              A blocky, geometric stencil display font.
            </small>
          </Card>

          <Card 
            className='js-projects__card-container__card--typography'
            image={agourathumb}
            link="/work/agoura"
            title="Agoura"
            category="Typography"
            descriptor="Serif"
            year="Ongoing"
          >
            <small>
              A display serif. Not yet finished.
            </small>
          </Card>

          <Card 
            className='js-projects__card-container__card--3d'
            image={threedthumb}
            link="/work/3d-sketchbook"
            title="3D Sketchbook"
            category="3D"
            descriptor="Sculptures"
            year="Ongoing"
          >
            <small>
              A selection of 3D sketches. Personal work, mostly done in Nomad Sculpt.
            </small>
          </Card>

          <Card 
            className='js-projects__card-container__card--3d'
            image={eclipsethumb}
            link="/work/bar-eclipse"
            title="Bar Eclipse"
            category="3D"
            descriptor="Environment"
            year="2023"
          >
            <small>
              An 80's dive bar environment exploration. Scene built in Blender. Environment elements designed in Figma, Photoshop, and Procreate.
            </small>
          </Card>
        </div>
      </div>
      <Background />
    </Layout>
  )
}

export default Work
