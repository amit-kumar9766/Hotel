import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NavbarPage  from '../components/Navbar'


const RoomDetails = () => {
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
       <p>Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.</p> 
       </MDBCol>
       <MDBCol size="6"><h3>Info</h3> 
       <p>Price : $500
        Size : 700 SQFT
        Max Capacity: 6 People
        Pets Allowed
        Free Breakfast Included</p> 
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




