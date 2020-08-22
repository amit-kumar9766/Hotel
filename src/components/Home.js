import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import NavbarPage from './Navbar'
import ParallaxIntro from './Intro';
import FeaturesPage from './Service'
import  Rooms  from "./FeaturesRoom";
import TestimonialsMultiPage from './Testimonials';
import Footer from './Footer';


class Home extends Component {
  render() {
    return (

      // <MDBContainer >
         
        <div  style={{backgroundColor:'#f5f5dc'}}>
        <NavbarPage/>
        <ParallaxIntro/>
        <FeaturesPage/>
        <Rooms/>
       
        {/* <TestimonialsMultiPage/> */}
        <Footer/>
        </div>
        
      // {/* </MDBContainer> */}


    );
  }
}

export default Home;
