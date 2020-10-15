import React from 'react';
import './Card.css';
import { MDBIcon, MDBBtn, } from "mdbreact";
import { Link} from "react-router-dom";

function Card(props) {
  const  { src, title, description, price }=props;
    return (
        <div className='card' >
            <img src={src} alt="" />
            <div className="card__info" style={{backgroundColor:'black'}}>
               
                <h4 style={{ textTransform:'uppercase'}}>{description}</h4>
                {/* <h3>{price}$</h3> */}
                <li>
                <MDBBtn >Pay {price}$ here </MDBBtn>
               {/* <Link to={"/rooms/details/"+props._id}><MDBBtn >Features </MDBBtn></Link>  */}
              </li>
            </div>
        </div>
    )
}

export default Card;