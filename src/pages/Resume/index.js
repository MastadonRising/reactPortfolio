import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../assets/Resume.pdf";
import SideNavPage from "../../components/sideNav";
import Footer from "../../components/footer";
import "./style.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// export default class Resume extends Component {
export default class Resume extends Component {
  state = {
    numPages: null,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { numPages } = this.state;
    // console.log("here",numPages);
    return (
      <div>
        <MDBContainer>
          <div className=" text-center py-3">
            <MDBContainer fluid>
              <h1> Resume</h1>
            </MDBContainer>
          </div>
          <MDBRow>
            <MDBCol md="2">
              <SideNavPage />
            </MDBCol>
            <MDBCol md="6">
              <Document
                classname="mt-5"
                file={pdf}
                onLoadSuccess={this.onDocumentLoadSuccess}
                onLoadError={console.error}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={1000}
                  />
                ))}
              </Document>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer />
      </div>
    );
  }
}
