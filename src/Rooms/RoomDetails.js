import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NavbarPage  from '../components/Navbar'


const RoomDetails = ({newdata}) => {
  
console.log(newdata)
return (
    <>
<NavbarPage />
<MDBContainer>
    <div style={{marginTop:'30px'}}>
    <MDBRow>
    <MDBCol size="4"> <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="img-fluid"
        /></MDBCol>
    <MDBCol size="4"> <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="img-fluid"
        /></MDBCol>
    <MDBCol size="4"> <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="img-fluid"
        /></MDBCol>
    </MDBRow>
    </div>

    <MDBRow style={{marginTop:'30px'}} >
    <MDBCol size="6"><h3>Details</h3> 
       <p>{newdata.desc}</p> 
       </MDBCol>
       <MDBCol size="6"><h3>Info</h3> 
       <p>{newdata.info}</p> 
       </MDBCol>

  </MDBRow>
  <br/>
  <h4>EXTRAS</h4>

  <div style={{marginTop:'30px'}}>
  <MDBRow>
    <MDBCol size="4"><p>Plush pillows and breathable bed linens</p></MDBCol>
    <MDBCol size="4"><p>Plush pillows and breathable bed linens</p></MDBCol>
    <MDBCol size="4"><p>Plush pillows and breathable bed linens</p></MDBCol>
  </MDBRow>
  </div>
  
    
</MDBContainer>
</>
);
}

export default RoomDetails;




