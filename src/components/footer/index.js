import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./style.css";
const Footer = () => {
  return (
    <MDBFooter color="red" className="font-small pt-4 mt-4 page-footer  footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12" className="text-center ">
            <Link className="home-ic " to="/" role="button">
              <i class="fa fa-home fa-2x "></i>
            </Link>
            <a
              className="li-ic mr-3"
              role="button"
              href="https://www.linkedin.com/in/luis-sandoval-a2294660/"
            >
              <i class="fab fa-lg fa-linkedin-in fa-2x"></i>
            </a>
            <a
              className="git-ic mr-3"
              role="button"
              href="https://github.com/MastadonRising"
            >
              <i class="fab fa-lg fa-github fa-2x"></i>
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/MastadonRising"> Mastadon Rising inc </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
