import React, { useState } from "react"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
} from "mdb-react-ui-kit"

import HbAccordian from "./HbAccordian"

export default function HbGuide() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="mt-5 mb-3">
          <h1 className="mb-3 text-center">
            Purchasing a home is the larget investment you can make
          </h1>
          <div className="d-flex align-items-center justify-content-center">
            <MDBAnimation
              animation="slide-in-left"
              start="onLoad"
              duration={1500}
            >
              <h2 className="text-center mx-2">We are with you</h2>
            </MDBAnimation>
            <MDBAnimation
              animation="fade-in"
              start="onLoad"
              duration={1500}
              delay={1500}
            >
              <h2>every step of the way</h2>
            </MDBAnimation>
          </div>
        </MDBCol>
      </MDBRow>
      <HbAccordian />
    </MDBContainer>
  )
}
