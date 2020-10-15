import React, { Component } from "react";
import NavbarPage from './Navbar'
import ParallaxIntro from './Intro';
import FeaturesPage from './Service'
import  Rooms  from "./FeaturesRoom";
import Footer from './Footer';


class Home extends Component {
  render() {
    return (
         
        <div  style={{backgroundColor:'#f5f5dc'}}>
        <NavbarPage />
        <ParallaxIntro/>
        <FeaturesPage/>
        <Rooms/>
       
        <Footer/>
        </div>

    );
  }
}

export default Home;
