import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
} from "mdbreact";

import { loadImage } from "../../Utils/imageLoader";

const Card = ({ image, title, tech, desc, repo, deployed }) => {
  let imageOmega = image;
  return (
    <MDBRow>
      <MDBCol md="4">
        <MDBCard>
          <MDBCardImage
            hover
            overlay="white-light"
            className="card-img-top"
            src={loadImage(image)}
          />

          <MDBCardBody cascade className="text-center">
            <MDBCardTitle className="card-title">
              <strong>{title}</strong>
            </MDBCardTitle>

            <p className="font-weight-bold blue-text">{tech}</p>

            <MDBCardText>{desc}</MDBCardText>

            <MDBCol md="12" className="d-flex justify-content-center">
              <a
                type="button"
                class="btn-floating btn-small btn-fb"
                href={repo}
              >
                <i class="fab fa-lg fa-github fa-2x"></i>
              </a>

              <a
                type="button"
                class="btn-floating btn-small btn-fb"
                href={deployed}
              >
                <i class="fab fa-lg fa fa-globe fa-2x"></i>
              </a>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default Card;
