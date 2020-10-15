import React,{useState,useEffect} from 'react';
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NavbarPage from '../components/Navbar'
import './rooms.css'
import Payment from './Payments';
import Search from './Search';
import Comments from './Comments'
import { Switch, Route, Link } from "react-router-dom";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";

const RoomDetails= (props)=> {

       const [oneData,setOneData]=useState('');
       const [loading,setLoading]=useState(true);
       const [CommentLists,setCommentLists]=useState('')
          


    useEffect(()=> {
        let { match: { params } } = props
        fetch("http://localhost:5000/data/" + params._id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setState({
                //     oneData: data,
                //     loading: false,
                // })
                setOneData(data);
                setLoading(false);
            })
    },[])
    const updateComment = (newComment) => {
        setCommentLists([...CommentLists,newComment])
    }
     

    
        return (
            <>
                <NavbarPage />
                <MDBContainer>
                    <div style={{ marginTop: '30px' }}>
                        <MDBRow>
                            <MDBCol sm="12" md="12" lg="4" style={{ padding: "20px" }} > <img
                                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                alt=""
                                className="img-fluid"
                            /></MDBCol>
                            <MDBCol sm="12" md="12" lg="4" style={{ padding: "20px" }} > <img
                                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt=""
                                className="img-fluid"
                            /></MDBCol>
                            <MDBCol sm="12" md="12" lg="4" style={{ padding: "20px" }} > <img
                                src="https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt=""
                                className="img-fluid"
                            /></MDBCol>
                        </MDBRow>
                    </div>
                    <MDBRow style={{ marginTop: '30px' }} >

                        {/* {Data.map((newdata,index)=>{return(
    <> */}

                        {!loading ? (
                            <>
                                <MDBCol sm="12" md="12" lg="8"><h3 style={{ letterSpacing: '0.5px' }}>Details</h3>
                                    <p>{oneData.description}</p>
                                </MDBCol>


                                <MDBCol sm="12" md="12" lg="4" ><h3>Info</h3>
                                    <p style={{ letterSpacing: '3px' }}>RoomType:  {oneData.type}</p>
                                    <p style={{ letterSpacing: '3px' }}>Capacity:  {oneData.capacity}</p>
                                    <p style={{ letterSpacing: '3px' }}> City:     {oneData.city}</p>
                                    <p style={{ letterSpacing: '3px' }}>Space:     {oneData.size}</p>
                                    <p style={{ letterSpacing: '3px' }}>Price:     ${oneData.price}</p>
                                   
                                 
       
                                </MDBCol>


                            </>) : ""}
                        

                    </MDBRow>
                    <br />
                    <h4>Extras</h4>

                    <div style={{ marginTop: '30px' }}>
                        <MDBRow>
                            {!loading && oneData.extras.map((ex, i) => {
                                return (
                                    <MDBCol sm="12" md="12" lg="4" ><li >{ex}</li></MDBCol>

                                )
                            })}
                        </MDBRow>
                    </div>
                </MDBContainer>
                <Comments  CommentLists={CommentLists} postId={props.match.params._id} refreshFunction={updateComment} /> 
                
                <div style={{ marginTop: '50p', display: 'flex', justifyContent: 'center' }}>

                <Search data={oneData} bid={props.match.params._id} />
                    {/* <Link to={{pathname:"/search", data:oneData} }><MDBBtn onCLick={()=>this.sendData()}>Booking Here </MDBBtn></Link>  */}

                </div>
            </>


        );

    }



export default RoomDetails;




