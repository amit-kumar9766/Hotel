import React,{Component,useContext } from "react";
import {MDBCardText,MDBCardTitle,MDBCardImage, MDBCard, MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask ,MDBNavLink} from "mdbreact";
import NavbarPage  from '../components/Navbar'
import ParallaxIntro  from '../components/Intro'
import styled, { css } from 'styled-components';
import SearchBar from './SearchBar';
import './rooms.css'
import { Switch, Route ,Link} from "react-router-dom";
import RoomDetails from './RoomDetails';
import slide from  '../assets/slide2.jpg';
//import Card from './Card.css'
import Card from './Card';
//import UserContext from './UserContext';
import { UserContext } from "../context/UserContext";


class RoomsPage extends Component {
  constructor(props) {
  super(props)
  
  this.state = {
     data: [],
     loading:true,
     searchTerm:'',
     price:'',
     RoomType:'',
    }
  }
  static contextType = UserContext
handleChange=(e)=>{
    const term =e.target.value;
    console.log(term)
    this.setState({
      searchTerm:term,
    })
  }
handlePrice=(e)=>{
  const pr =e.target.value;
  console.log(pr)
  this.setState({
    price:pr,
  })
}
onClickHandler=(e)=>{
  const capacity =e.target.value;
  console.log(capacity)
  this.setState({
    RoomType:capacity,
  })
}


componentDidMount() {
  fetch("https://hotel-backend2.herokuapp.com/data")
    .then(response => response.json())
    .then(Data => {
    console.log(Data)
    this.setState({  
      data:Data,
      loading:false,
     })
 })

} 


  render() {
  //  const value = this.context;
   // console.log(value)

    var {data}=this.state;
    //console.log(this.state.RoomType)
    if (this.state.searchTerm && this.state.searchTerm != "")
     {
      data = this.state.data.filter(el => el.city.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1)
    }
     if(this.state.price && this.state.price != ""){
      data = data.filter(el => el.price>this.state.price)
    }
     if(this.state.RoomType && this.state.RoomType != "select Capacity"){
      data = data.filter(el => el.capacity==parseInt(this.state.RoomType))
    }

  
 
    return(
      <>
    <div style={{backgroundColor:'#f5f5dc'}}>
   
    <NavbarPage />

    <div className="search-bar">
    {/* <SearchBar/>
    */}
     <input className="form-control" type="text" placeholder="Search Cities Here" value={this.state.searchTerm} 
      onChange={(e)=>this.handleChange(e)}/>
    </div>
     
    <div style={{display:'flex',justifyContent:'center'}}>
    <MDBCol size="4">
      <div style={{marginTop:'10px'}}>
      <div>Room Price ${this.state.price}</div>
      <input type="range" id="vol" name="vol" min="0" max="1000" 
       onChange={this.handlePrice} style={{width:'60%',marginLeft:"50px"}}/>
      </div> 
    </MDBCol>
    
    <MDBCol size="4">  <div style={{width:'60%',marginLeft:"100px",marginTop:'20px'}}>
        <select className="browser-default custom-select" onClick={this.onClickHandler}>
        
          <option>select Capacity</option>
         
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4</option>
          <option value="3">5</option>
        </select>
      </div> </MDBCol>
  </div>

    <section className="text-center my-5 container">
      <h2 className="h1-responsive font-weight-bold my-5">
        Our Rooms
      </h2>
    
    
    {this.state.searchTerm?(<h6>{data.length} Rooms Found !!!!</h6>):""}
    <div className="rooms">
    
    
    {!this.state.loading && data.map((dt,index)=>{
      
    return(
 
    // <MDBCol style={{ maxWidth: "25rem" ,backgroundColor:'white'}}/>
      
    <div className='card' >
    <img src={dt.src} alt="" />
    <div className="card__info" style={{backgroundColor:'black'}}>
        {/* <h2 >{title}</h2> */}
        <h4 style={{ textTransform:'uppercase'}}>{dt.type}</h4>
        <h3>{dt.price}$</h3>
      
       <Link to={"/rooms/details/"+dt._id}><MDBBtn>Features </MDBBtn></Link> 
      
    </div>
   </div>
      

      
    
    //  </MDBCol>
        
        )})}
    
    </div>

    </section>

    </div>
    </>
  );
    

    }
}

export default RoomsPage

