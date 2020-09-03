import React,{useState,useEffect} from 'react';
import NavbarPage from './Navbar';
import Axios from "axios";
import { Redirect } from "react-router-dom";
//import { UserContext } from './UserContext';
import Logout from './Logout';
import App from '../App';
import  RoomsPage from '../Rooms/Rooms';
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
borderRadius:20%;
height:40px;
margin-top:20px;
width:300px
`

function Signin() {

  //const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const[data,setData]=useState()
  const [isAuth,setIsAuth]=useState('No')
  const[redirectto,setRedirectto]=useState('')
 
 function formHandler(e){
  e.preventDefault();
  console.log(email,password);

  Axios({
    method: "POST",
    data: {
      // username: name,
      password: password,
      username:email
    },
    withCredentials: true,
    url: "https://hotel-backend2.herokuapp.com/login",
  }).then((res) => {
    console.log(res.data)
    if(res.data!=='No User Exists'){
      console.log(res.data)
     
     setIsAuth('Yes')
     localStorage.setItem('auth',isAuth)
     const name = res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1) 
     localStorage.setItem('name',(name))
     alert('Successfully Loged In')
     setRedirectto('/rooms')
    }
    else{
     // localStorage.setItem('authToken',"No")
     alert('Login Again')
     console.log('No user is there')
    }
  })
  
   
  //  setName("")
   setEmail("")
   setPassword("")

  }
  localStorage.setItem('auth',isAuth)

  return (
    <div className="forms-learn">
     <NavbarPage />
     
     { (redirectto!=="")?
    <Redirect to={{ pathname: '/rooms' }}  />
      
    :
  (<form onSubmit={formHandler} style={{display:'flex',flexDirection:'column',
  justifyContent:'center',marginTop:'200px',alignItems:'center'}}>
      {/* <input value={name} onChange={e=>setName( e.target.value)} placeholder="Name"
      type="text" required /> */}
      <div >
      <Input value={email} onChange={e=>setEmail( e.target.value)} placeholder="Email" 
       type="email" required  />
       </div>
      <Input value={password} onChange={e=>setPassword( e.target.value)} placeholder="Password" 
       type="password" required />
      <div>
      <Button>SignIn</Button>
      {data}
      </div>
    </form>)}
    
    </div>
  );

  

}

export default Signin;