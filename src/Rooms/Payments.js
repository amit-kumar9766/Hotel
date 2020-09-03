import React,{useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useLocation } from "react-router-dom";
import NavbarPage  from '../components/Navbar';

const Payment=()=>{
    const location = useLocation();
    const data = location.state.data;
    const[product,setProduct]=useState({
        name:data.type,
        price:data.price,
    })

    console.log(product)

    const makePayment=token=>{
        const body={
            token,
            product
        }
        const headers={
            "Content-Type":"application/json"
        }
        return fetch('https://hotel-backend2.herokuapp.com/checkout',{
            method:"POST",
            headers,
            body:JSON.stringify(body)
        }).then(res=>{
            console.log("res",res)
            const {status}=res;
            console.log(status)
        })
        .catch(err=>{
          console.log(err);
        })
    }

    return(
        <>
        <NavbarPage />
        <div style={{marginTop:'50px',marginLeft:'100px'}}><h5>Click Below To Pay!</h5>  </div>
        <div style={{marginLeft:'400px',marginTop:'150px'}}>
       
        <StripeCheckout
        stripeKey="pk_test_51HKJEjCzABIH7VoYTMffatp3AL2x7jpEPQxqq0INDbx23QSXKIi2oFLaAruHTgTCy8jiH9KavUVLPN4L93qjLmMq00CRqpKOu8" 
        token={makePayment} 
        name="Buy Room"
        amount={product.price*100}
        >
        <button className="btn" style={{backgroundColor:'cyan'}}>
            Buy this {product.type} room in  {product.price}$
        </button>
        </StripeCheckout>
        </div>
    </>
    )

}
export default Payment