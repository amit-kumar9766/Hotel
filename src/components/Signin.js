import React, { useState, useEffect } from 'react';
import NavbarPage from './Navbar';
import Axios from "axios";
import { Redirect } from "react-router-dom";
import {login} from './UserFunctions'
import styled from 'styled-components'



const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
margin-top: 20px;
`
const Input = styled.input`
borderRadius:20%;
height:40px;
margin-top:20px;
width:300px
`

function Signin(props) {

  //const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [data, setData] = useState()
  const [redirectto, setRedirectto] = useState('')

  function formHandler(e) {
    e.preventDefault();
    console.log(email, password);

    const user = {
      email: email,
      password: password
    }

    login(user) .then(response => {
      localStorage.setItem('userToken', response.data.token)
      localStorage.setItem('name',response.data.user.name)
      localStorage.setItem('uid',response.data.user._id)
      setRedirectto('/rooms')
      
    })
    .catch(err=> {
      console.log(err)
      if(err.response!==undefined)
      {alert(err.response.data)}
    })
    
    setEmail("")
    setPassword("")


    // Axios({
    //   method: "POST",
    //   data: {
    //     // username: name,
    //     password: password,
    //     username: email
    //   },
    //   url: "http://localhost:5000/login",
    // }).then((res) => {
    //   console.log(res.data)
    //   if (res.data !== 'No User Exists') {
    //     console.log(res.data._id)
    //    // localStorage.setItem('uid', res.data._id)
    //     setIsAuth('Yes')
    //     localStorage.setItem('auth', isAuth)
    //     const name = res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1)
    //     localStorage.setItem('name', (name))
    //     alert('Successfully Logged In')
    //     setRedirectto('/rooms')
    //   }
    //   else {
    //     // localStorage.setItem('authToken',"No")
    //     alert('Login Again')
    //     console.log('No user is there')
    //   }
    // })
   
  }
  

  return (
    <div className="forms-learn">
      <NavbarPage />

      { (redirectto !== "") ?
        <Redirect to={{ pathname: '/rooms' }} />

        :
        (<form onSubmit={formHandler} style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', marginTop: '200px', alignItems: 'center'
        }}>
          
          <div >
            <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
              type="email" required />
          </div>
          <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"
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