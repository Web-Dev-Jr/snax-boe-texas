import React, { useState } from "react";
import {
  MDBAnimatedNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

import boeLogo from "../images/boe-logo-sm.png";

export default function NavHeader() {
  const [showNavCentred, setShowNavCentred] = useState(false);
  return (
    <header>
      <MDBAnimatedNavbar
        expand="lg"
        light
        className="shadow-2-strong"
        fixed="top"
        style={{ backgroundColor: "white" }}
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <img src={boeLogo} style={{ width: "120px", height: "50px" }}></img>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-label="Toggle navigation"
            onClick={() => setShowNavCentred(!showNavCentred)}
          >
            <MDBIcon icon="bars" fas style={{ color: "black" }} />
          </MDBNavbarToggler>
          <MDBCollapse
            navbar
            show={showNavCentred}
            center
            id="navbarCenteredExample"
          >
            <MDBNavbarNav
              fullWidth={false}
              className="mb-2 mb-lg-0 text-center"
              Style={{}}
            >
              <MDBNavbarItem>
                <MDBNavbarLink
                  style={{
                    color: "#4e4e4e",
                    fontWeight: "400",
                  }}
                  id="custom-nav-link"
                  aria-current="page"
                  href="/"
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  id="custom-nav-link"
                  style={{
                    color: "#4e4e4e",
                    fontWeight: "400",
                  }}
                  href="/Team"
                >
                  Meet The Team
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  id="custom-nav-link"
                  style={{
                    color: "#4e4e4e",
                    fontWeight: "400",
                  }}
                  href="/LoanProducts"
                >
                  Loan Products
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  id="custom-nav-link"
                  style={{
                    color: "#4e4e4e",
                    fontWeight: "400",
                  }}
                  href="/Resources"
                >
                  Resources
                </MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink
                  id="custom-nav-link"
                  style={{
                    color: "#4e4e4e",
                    fontWeight: "400",
                  }}
                  href="/Media"
                >
                  Media
                </MDBNavbarLink>
              </MDBNavbarItem> */}
              <MDBNavbarItem>
                <MDBNavbarLink
                  id="custom-nav-link"
                  style={{
                    color: "#4e4e4e",
                    fontWeight: "400",
                  }}
                  href="/contact"
                >
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink
                  id="custom-nav-link"
                  style={{
                    color: "#4e4e4e",
                    fontWeight: "400",
                  }}
                  href="/careers"
                >
                  Careers
                </MDBNavbarLink>
              </MDBNavbarItem> */}
              <MDBBtn
                id="m__btn"
                href="tel:+12143966450"
                style={{
                  padding: "12px 20px 12px 20px",
                  marginLeft: "20px",
                }}
              >
                Call Now
              </MDBBtn>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBAnimatedNavbar>
    </header>
  );
}
