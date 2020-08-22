import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NavbarPage  from '../components/Navbar'
import './rooms.css'

 

class RoomDetails extends React.Component{
    
    constructor() {
        super()
    this.state = {
        oneData: [],
        loading:true,
       }
     }

componentDidMount() {
    // const ID=(this.props.match.params._id)
    //  console.log(ID)
    const { match: { params } } = this.props;
    fetch("http://localhost:8000/data/"+params._id)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    this.setState({  
        oneData:data,
        loading:false,
       })
    })
        
    }
         

render(){
    const {oneData}=this.state
    console.log(oneData)
  
    return (
<>
<NavbarPage />
<MDBContainer>
    <div style={{marginTop:'30px'}}>
    <MDBRow>
    <MDBCol sm="12"  md="12" lg="4" style={{padding:"20px"}} > <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="img-fluid"
        /></MDBCol>
    <MDBCol sm="12" md="12" lg="4" style={{padding:"20px"}} > <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="img-fluid"
        /></MDBCol>
    <MDBCol sm="12" md="12" lg="4" style={{padding:"20px"}} > <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="img-fluid"
        /></MDBCol>
    </MDBRow>
    </div>
    <MDBRow style={{marginTop:'30px'}} >

    {/* {Data.map((newdata,index)=>{return(
    <> */}
    
    {!this.state.loading ?(
    <>
    <MDBCol sm="12" md="12" lg="8"><h3 style={{letterSpacing:'0.5px'}}>Details</h3> 
       <p>{oneData.description}</p> 
       </MDBCol>

       
       <MDBCol sm="12" md="12" lg="4" ><h3>Info</h3> 
        <p style={{letterSpacing:'3px'}}>RoomType:  {oneData.type}</p> 
       <p style={{letterSpacing:'3px'}}>Capacity:   {oneData.capacity}</p> 
       <p style={{letterSpacing:'3px'}}>Price:      ${oneData.price}</p> 
       <p style={{letterSpacing:'3px'}}> City:       {oneData.city}</p>
       <p style={{letterSpacing:'3px'}}>Space:      {oneData.size}</p> 
       <div class='pm-button'><a 
       href='https://www.payumoney.com/sandbox/paybypayumoney/#/90F19F5C1EB1B7F381EC21FEEACBFE17'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/22.png' /></a></div>  
       </MDBCol>


       </>):""}
     
       {/* </>
    )})} */}

  </MDBRow>
  <br/>
  <h4>Extras</h4>
   
  <div style={{marginTop:'30px'}}>
  <MDBRow>
  {!this.state.loading && oneData.extras.map((ex,i)=>{
      return ( 
    <MDBCol sm="12" md="12" lg="4" ><p >{ex}</p></MDBCol>
   
      )})}
  </MDBRow>
  </div>
  
    
</MDBContainer>
</>


);
      
}
}


export default RoomDetails;




