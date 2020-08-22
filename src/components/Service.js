import './component.css';
import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
  return (
      <section className="text-center my-5 container">
        <h2 className="h1-responsive font-weight-bold my-5">
           OUR SERVICES
        </h2>
       
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon icon="shuttle-van" size="3x" className="red-text" />
            <h5 className="font-weight-bold my-4">free shuttles</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="hiking" size="3x" className="cyan-text" />
            <h5 className="font-weight-bold my-4">endless hiking</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon far icon="comments" size="3x" className="orange-text" />
            <h5 className="font-weight-bold my-4">Flawless Support</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesPage;