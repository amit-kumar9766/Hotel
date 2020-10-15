import React, { useEffect,useState } from 'react';
import Card from './Card';
import './Card.css';
import {MDBBtn} from "mdbreact";
import NavbarPage from '../components/Navbar';
import Payment from "./Payments"

const MyBookings=(props)=>{
    const id=localStorage.getItem('uid')
    const endpoint=`http://localhost:5000/user/${id}`

    const [bookings,setBookings]=useState('');
    const [loading ,setLoading]=useState(true)

   
    
    useEffect(()=>{
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
           setBookings(result)     
        }, setLoading(false))
        .catch(error => console.error('Error:', error)
        )
    },[])
    console.log(bookings)

    const [data]=bookings;
    console.log(data)

    return (
        <>
        <NavbarPage/>
        <h3 style={{padding:'20px',display:'flex',justifyContent:'center'}}>YOUR BOOKINGS</h3>
        <div style={{display:'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            marginTop: '3em',
            gridGap: '30px'}}>

       {data && data.totalBookings.map((x,i)=>{
            return(
                <>
                   {/* <div>{x.type}</div>
                   <div>{x.price}</div> */}
                   <Card src={x.src} price={x.price}  type={x.type}/>

                   {/* <MDBBtn  color="default" onClick={() => history.push('/payment',{data:{price,type}})}>Pay Here</MDBBtn >  */}

                </>

            )
        })
        }   
        
        </div>
    </>
    )

}


export default MyBookings;