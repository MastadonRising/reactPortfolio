import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";

import { loadImage } from "../../Utils/imageLoader";

const Card = ({ image, title, tech, desc, repo, deployed }) => {
  return (
    <MDBCol md="12">
      <MDBCard className="mb-2">
        <MDBCardImage
          hover
          overlay="white-light"
          className="card-img-top img-fluid"
          src={loadImage(image)}
        />

        <MDBCardBody cascade className="text-center">
          <MDBCardTitle className="card-title">
            <strong>{title}</strong>
          </MDBCardTitle>

          <p className="font-weight-bold blue-text">{tech}</p>

          <MDBCardText>{desc}</MDBCardText>

          <MDBCol md="12" className="d-flex justify-content-center">
            <a href={repo}>
              <MDBBtn rounded floating color="fb">
                <MDBIcon
                  fab
                  icon="github"
                  size="lg"
                  className="fab fa-lg fa-github fa-2x"
                ></MDBIcon>
              </MDBBtn>
            </a>
            {deployed.length > 0 && (
              <a href={deployed}>
                <MDBBtn rounded floating color="fb">
                  <MDBIcon
                    size="lg"
                    className="fab fa-lg fa-globe fa-2x"
                  ></MDBIcon>
                </MDBBtn>
              </a>
            )}
          </MDBCol>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Card;
