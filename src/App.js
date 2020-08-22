import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import './App.css'
import logo from "./logo.png";
import NavbarPage from './components/Navbar'
import ParallaxIntro from './components/Intro';
import FeaturesPage from './components/Service'
import  Rooms  from "./components/FeaturesRoom";
import TestimonialsMultiPage from './components/Testimonials';
import Footer from './components/Footer';
import RoomsPage from './Rooms/Rooms';
import RoomsData from './Rooms/RoomsData';
import RoomDetails from './Rooms/RoomDetails';
import { Switch, Route ,Link} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Success from './components/Success';
import Cancel from './components/Cancel';
import Failure from './components/Failure';



const url="/rooms/details";
class App extends Component {
  render() {
    return (
    <>
      
    <Switch>
      <Route exact path="/success" component={Success} />
      <Route exact path="/cancel" component={Cancel} />
      <Route exact path="/failure" component={Failure} />
      
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={Home} />

      <Route exact path="/rooms" render={()=><RoomsPage/>} />
      
       {/* <ul> */}
        {/* {Data.map(( data, id ) => ( */}
     
        <Route exact path={'/rooms/details/:_id'} component={RoomDetails}  />
     
        {/* ))}
      </ul> 
      */}
    </Switch>
    </>

    );
  }
}

export default App;
