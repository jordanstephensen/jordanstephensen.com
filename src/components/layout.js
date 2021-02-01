import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Header from "./header"
import PageTitle from "./pageTitle"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ title, children }) => {
  return (
    <>
        <Header />
        <contents>
        <div id="animatedbackground">
            <svg class="animation" width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <path stroke-width="10">
              <animate className="animation" repeatCount="indefinite" fill="remove" attributeName="d" dur="10s" values="M784.5 192C713.5 91.5005 633.501 25.0002 415.001 32.5002C196.501 40.0002 126.5 91.5004 67.0009 192.001C7.50173 292.501 28.0004 454 165.5 565.5C303 677 741.5 762.5 835 604.5C928.5 446.5 855.5 292.5 784.5 192Z;

              M842.5 266.499C783.5 151.499 651.5 40.9999 433 48.4999C214.5 55.9999 148.999 137.5 89.4999 238C30.0007 338.5 34.5007 456.5 172.001 568C309.501 679.5 732 831.999 842.5 712.499C953 592.999 901.5 381.499 842.5 266.499Z;

              M933.32 460.5C919.32 372.5 787.32 205.5 629.32 116C471.32 26.5011 353.321 32.9998 245.821 116.001C138.321 199.001 86.3207 294 146.32 432.5C206.32 571 444.32 770 662.82 733.5C881.32 697 947.32 548.5 933.32 460.5Z;

              M837.957 590.5C923.457 468.5 899.957 326.001 812.957 199.5C725.957 73.0001 587.457 43.0008 407.457 52.5004C227.458 62.0001 113.457 94.0002 101.957 252.5C90.4569 411 182.458 572 384.958 636.5C587.458 701 752.457 712.5 837.957 590.5Z;

              M784.5 192C713.5 91.5005 633.501 25.0002 415.001 32.5002C196.501 40.0002 126.5 91.5004 67.0009 192.001C7.50173 292.501 28.0004 454 165.5 565.5C303 677 741.5 762.5 835 604.5C928.5 446.5 855.5 292.5 784.5 192Z;
              "
              /> </path></g>
              <defs>
                <filter id="filter0_d" x="0.495117" y="0.924805" width="1080" height="1080" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="15"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.265804 0 0 0 0 0.00784314 0 0 0 0 1 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear" x1="457.378" y1="31.9248" x2="457.378" y2="691.16" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1502FF"/>
                <stop offset="1" stop-color="#4402FF"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
          <PageTitle title={title}/>
            <main> 
              {children}
            </main>
          </div>
          <div class="spacer" />
          </contents>
          <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
