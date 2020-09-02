import React from 'react';
import './Card.css';
import {MDBCardText,MDBCardTitle,MDBCardImage, MDBCard, MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask ,MDBNavLink} from "mdbreact";
import { Switch, Route ,Link} from "react-router-dom";

function Card(props) {
  const  { src, title, description, price }=props;
    return (
        <div className='card' >
            <img src={src} alt="" />
            <div className="card__info" style={{backgroundColor:'black'}}>
                {/* <h2 >{title}</h2> */}
                <h4 style={{ textTransform:'uppercase'}}>{description}</h4>
                <h3>{price}$</h3>
                <li>
               <Link to={"/rooms/details/"+props._id}><MDBBtn >Features </MDBBtn></Link> 
              </li>
            </div>
        </div>
    )
}

export default Card;