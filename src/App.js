import React, { Component,useState ,useEffect} from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import './App.css'
import NavbarPage from './components/Navbar'
import ParallaxIntro from './components/Intro';
import FeaturesPage from './components/Service'
import  Rooms  from "./components/FeaturesRoom";
import TestimonialsMultiPage from './components/Testimonials';
import Footer from './components/Footer';
import RoomsPage from './Rooms/Rooms';
import Payment from './Rooms/Payments';
import RoomDetails from './Rooms/RoomDetails';
import { Switch, Route ,Link} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Search from './Rooms/Search'
import {UserContext} from "./context/UserContext";
import ProtectedRoute from './ProtectedRoutes'

const url="/rooms/details";
const App =()=>
 {   
    const[data,setData]=useState('')

    // console.log(data)
    return (
      
    <>
    
    <Switch>
      <UserContext.Provider value={data}> 
      <ProtectedRoute exact path="/payment" component={Payment} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/login" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={Home } />  
      <Route exact path="/rooms" render={()=><RoomsPage/>} /> 
      <Route exact path={'/rooms/details/:_id'} component={RoomDetails}  />
      </UserContext.Provider>
      
    </Switch>
    </>

    );
  }

export default App;
