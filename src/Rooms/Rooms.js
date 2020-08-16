import React from "react";
import {MDBCardText,MDBCardTitle,MDBCardImage, MDBCard, MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask ,MDBNavLink} from "mdbreact";
import NavbarPage  from '../components/Navbar'
import ParallaxIntro  from '../components/Intro'
import styled, { css } from 'styled-components';
import SearchBar from './SearchBar';
import './rooms.css'
import { Switch, Route ,Link} from "react-router-dom";
import RoomDetails from './RoomDetails';


const Box = styled.div`
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: contain;
  `;


const RoomsPage = ({Data}) => {
  console.log(Data)
  return (
  
    <>
    <NavbarPage/>
   <div >
    <img
    src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    alt=""
    className="img-fluid"/>
  

    </div>

    <div style={{marginTop:'40px'}}>
    <SearchBar/>
    </div>

    

    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        Our Featured Rooms
      </h2>
    
   
    <div className="rooms">

    { Data.map((data,index)=>{return(
    
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={data.src}
          waves />
        <MDBCardBody>
       
          <li>
          <Link to="/rooms/details/${data.id}">Features</Link> 
          </li>
          <Switch>
          <Route exact path='/rooms/details/${data.id}' render={()=><RoomDetails  newData={data}/>} />
          </Switch>

          <MDBCardTitle>{data.RoomType}</MDBCardTitle>
          <MDBCardText>{data.price}</MDBCardText>
          <MDBBtn href="#">{data.id}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
        
        )})}
    
    </div>

    </section>
    </>
  );
}

export default RoomsPage;





{/* <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
<div id="bigphoto">
  <MDBView className="overlay rounded z-depth-1" waves>
    <img
      src="https://images.unsplash.com/photo-1576675784201-0e142b423952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
      alt=""
      className="img-fluid"
    />
    <a href="#!">
      <MDBMask overlay="white-slight" />
    </a>
  </MDBView>
  <MDBCardBody className="pb-0">
    <h4 className="font-weight-bold my-3">Super deluxe</h4>
   
    <MDBBtn color="indigo" size="sm">
      <MDBIcon far  className="left" /> 
      <MDBNavLink to="/rooms/details">Features</MDBNavLink>
      {/* <div> FEATURES</div> */}
//     </MDBBtn>
//   </MDBCardBody>
// </div>
// <div id='square'> </div>
// </MDBCol>

// <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
// <div id="bigphoto">
//   <MDBView className="overlay rounded z-depth-1" waves>
//     <img
//       src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
//       alt=""
//       className="img-fluid"
//     />
//     <a href="#!">
//       <MDBMask overlay="white-slight" />
//     </a>
//   </MDBView>
//   <MDBCardBody className="pb-0">
//     <h4 className="font-weight-bold my-3">Presidental Suite</h4>
  
//     <MDBBtn color="indigo" size="sm">
//       <MDBIcon far  className="left" /> FEATURES
//     </MDBBtn>
//   </MDBCardBody>
  
// </div> 
// <div id='square'> </div>
// </MDBCol> 