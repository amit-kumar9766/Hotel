import React,{Component} from "react";
import {MDBCardText,MDBCardTitle,MDBCardImage, MDBCard, MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask ,MDBNavLink} from "mdbreact";
import NavbarPage  from '../components/Navbar'
import ParallaxIntro  from '../components/Intro'
import styled, { css } from 'styled-components';
import SearchBar from './SearchBar';
import './rooms.css'
import { Switch, Route ,Link} from "react-router-dom";
import RoomDetails from './RoomDetails';
import slide from  '../assets/slide2.jpg';


const Box = styled.div`
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: contain;
  `;

class RoomsPage extends Component {
  constructor() {
  super()

  this.state = {
     data: [],
     loading:true,
     searchTerm:'',
    }
  }
//why const is giving error?
handleChange=(e)=>{
    const term =e.target.value;
    console.log(term)
    this.setState({
      searchTerm:term
    })
  }
  

componentDidMount() {
  fetch("http://localhost:8000/data")
    .then(response => response.json())
    .then(Data => {
    // console.log(typeof(data))
    this.setState({  
      data:Data,
      loading:false,
     })
 })

} 



  render() {
     
    var {data}=this.state;
    console.log(data)
    if (this.state.searchTerm && this.state.searchTerm != "") {
      data = this.state.data.filter(el => el.city.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1)
    }

    // if (data.length===0)
    //   return(
    //     <h1>No cities matched! Pls search again......</h1>
    //   )
  // else
    return(
      <>
   <NavbarPage/>
 
    {/* <img
    src={slide}
    alt=""
    className="img-fluid" style={{height:'400px',width:'1350px'}}/> */}
  

    <div className="search-bar">
    {/* <SearchBar/>
    */}
     <input className="form-control" type="text" placeholder="Search Cities Here" value={this.state.searchTerm} 
      onChange={(e)=>this.handleChange(e)}/>
    </div>

    

    <section className="text-center my-5 container">
      <h2 className="h1-responsive font-weight-bold my-5">
        Our Rooms
      </h2>
    
   
    <div className="rooms">
    
    
    {!this.state.loading && data.map((dt,index)=>{
      
    return(

    <MDBCol style={{ maxWidth: "22rem" ,backgroundColor:'white'}}>
      
      
      <MDBCard>
      
        <MDBCardImage className="img-fluid" src={dt.src} style={{height:'250px',width:'100%'}}/>
        <MDBCardBody>
          <li>
          <Link to={"/rooms/details/"+dt._id}><MDBBtn >Features </MDBBtn></Link> 
          </li>
          
          <MDBCardTitle>Delhi</MDBCardTitle>
          <MDBCardText>{dt.price}$</MDBCardText>
          <MDBCardText>{dt.type}</MDBCardText>
          {/* <MDBCardText>{dt.city}</MDBCardText>
          <MDBCardText>Capacity:{dt.capacity}</MDBCardText> */}
        </MDBCardBody>

       
      </MDBCard>
    
     </MDBCol>
        
        )})}
    
    </div>

    </section>
    </>
  );
    

    }
}

export default RoomsPage

