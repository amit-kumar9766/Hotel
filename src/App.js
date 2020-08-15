import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import logo from "./logo.png";
import NavbarPage from './components/Navbar'
import ParallaxIntro from './components/Intro';
import FeaturesPage from './components/Service'
import  Rooms  from "./components/FeaturesRoom";
import TestimonialsMultiPage from './components/Testimonials';
import Footer from './components/Footer';
import RoomsPage from './Rooms/Rooms';
import RoomDetails from './Rooms/RoomDetails';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'

class App extends Component {
  render() {
    return (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={RoomsPage} />
      <Route exact path='/rooms/details' component={RoomDetails} />
    </Switch>
 

    );
  }
}

export default App;
