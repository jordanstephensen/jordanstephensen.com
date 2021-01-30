import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import mase from '../images/mase.jpg'


const Mase = () => (
  <Layout title="Mase 🖤">
    <SEO title="Mase 🖤" />
        <img class="bodyimage" src={mase} alt="my beautiful dog Mase. She's a Doberman Shepherd. Very very nice dog." />
  </Layout>
)

export default Mase
