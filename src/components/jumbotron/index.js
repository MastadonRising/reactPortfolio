import React from "react";
import { Link } from "react-router-dom";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Jumbotron = () => {
  return (
    <MDBContainer className="mt-5 text-center ">
      <MDBJumbotron className="bg">
        <MDBRow>
          <MDBCol>
            <h2 className="h1 display-3 text-white">Mastadon Coding</h2>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol sm="8"></MDBCol>
          <MDBCol sm="4">
            <p className="lead text-white">
              {" "}
              I'm a beast from the east that hangs with the best in the west.
            </p>
            <p className="lead text-white">
              My professional background spans candy chef, business analyst, ETL
              Developer
            </p>
            <p className="lead text-white">
              I've gotten into coding because I love systems and infusing some
              sort of soul into the machine.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="5"></MDBCol>
          <MDBCol sm="7">
            <hr className="my-2" />
            <h3 className="mx-5 mb-5 animated fadeIn text-white">
              {" "}
              Project Manager, Analyst, Developer
            </h3>
            <Link className="btn btn-outline-white btn-lg" to="/portfolio">
              <i className="fas fa-clone left animated fadeIn text-white"></i>
              View projects
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBJumbotron>
    </MDBContainer>
  );
};

export default Jumbotron;
