import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"

const Styles = () => (
  <Layout>
    <SEO title="Styles" />
    <PageTitle title="Styles"/>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>
    <big>I am a block of big text with a <a>text link</a></big>
    <p>I am a block of paragraph text with a <a>text link</a></p>
 </Layout>
)

export default Styles
