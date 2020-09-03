
import React,{useState} from 'react';
import NavbarPage from './Navbar';
import Axios from "axios";
import { Redirect } from "react-router-dom";
import {useHistory} from "react-router-dom";
import { MDBBtn } from "mdbreact";
import styled from 'styled-components';

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
margin-top: 20px;
`
const Input=styled.input`
borderRadius:80px;
height:40px;
margin-top:20px;
width:300px;
`

function Signup() {
  const history = useHistory();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const[redirectto,setRedirectto]=useState('')
  console.log(redirectto)
 
 function formHandler(e){
  e.preventDefault();
  console.log(name,email,password);

  Axios({
    method: "POST",
    data: {
      name: name,
      password: password,
      username:email
    },
    withCredentials: true,
    url: "http://localhost:3200/register",
  }).then((res) => {
    console.log(res)
    if(res.status===200){
      console.log(res.data)
      setRedirectto('/login')
    }
    else{
      console.log('User already is there')
    }
  })

   setName("")
   setEmail("")
   setPassword("")

  }
  console.log(redirectto)
  if (redirectto!=="") {
 return <Redirect to={{ pathname: '/login' }} />
    // history.push('/login')
}
 
  return (
    <>
    <NavbarPage/>
  
  <form onSubmit={formHandler} style={{display:'flex',flexDirection:'column',
  justifyContent:'center',marginTop:'200px',alignItems:'center'}}>
      <Input value={name} onChange={e=>setName( e.target.value)} placeholder="Name"
      type="text" required />
      <Input value={email} onChange={e=>setEmail( e.target.value)} placeholder="Email" 
       type="email" required />
      <Input value={password} onChange={e=>setPassword( e.target.value)} placeholder="Password" 
       type="password" required/>
      <div>
      <Button >SignUp</Button>
      </div>
    </form>

    {/* <Route exact path="/">
    {? <Redirect to="/signup" /> : <PublicHomePage />}
     </Route> */}
   

  </>
  );

  

}

export default Signup;