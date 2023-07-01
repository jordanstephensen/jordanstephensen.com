import React from "react"

import logo from "../images/js-pixel-logo.svg"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
  <div className="not-found" >
  <SEO title="404: Not Found" />
      <div className="not-found__content">
          <Link className="not-found__content__logo" to="/">
              <img src={logo} alt="Home"/>
          </Link>
          <div className="not-found__content__text">
            <p>There’s nothing here.</p>
            <p>
                <Link to="/">
                    Go back home
                </Link>
            </p>
        </div>
      </div>
  </div>
</>
)

export default NotFoundPage
