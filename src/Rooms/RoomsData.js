import React from 'react';
import Rooms from './Rooms'
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask ,MDBNavLink} from "mdbreact";
import NavbarPage  from '../components/Navbar'
import styled, { css } from 'styled-components';
import SearchBar from './SearchBar';
import './rooms.css'
import RoomDetails from './RoomDetails';
import { Switch, Route ,Link} from "react-router-dom";


 const Data=[{
          id:'1',
          price:'Rs 500',
          RoomType:'xyz',
          noOfRooms:"5",
          desc:'HE was there',
          Info:'I dont know',
          src:'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },{
        id:'2',
        price:'Rs 500',
        RoomType:'xyz',
        noOfRooms:"5",
        desc:'HE was there',
        Info:'I dont know',
        src:'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },{
        id:'3',
        price:'Rs 500',
        RoomType:'xyz',
        noOfRooms:"5",
        desc:'HE was there',
        Info:'I dont know',
        src:'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },{
        id:'4',
        price:'Rs 500',
        RoomType:'xyz',
        noOfRooms:"5",
        desc:'HE was there',
        Info:'I dont know',
        src:'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },{
        id:'5',
        price:'Rs 500',
        RoomType:'xyz',
        noOfRooms:"5",
        desc:'HE was there',
        Info:'I dont know',
        src:'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    }] 


const RoomsData=()=>{
    return(
    <>
        <Rooms Data={Data}/>
        {/* <ul>
        <li>
        <Link to="/">Features</Link>
        </li>
      
       </ul> */}

        {/* {Data.map((data)=>{return(

          <RoomDetails data={data}/>

        )}) } */}

    {/* <Switch>
      <Route exact path='/rooms/'+`${i}` component={RoomDetails} />
    </Switch>
         */}
       
    </>
    )

    
}
    
export default RoomsData;