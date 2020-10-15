import React from 'react';

import {Route,Redirect} from 'react-router-dom';

import Local from './components/Local';

export default function ProtectedRoute({component:Component,...rest}) {
    return (
        <Route
        {...rest}
        render={

  props=>{

 if( Local())
 {
 return <Component {...props}/>
 }

 else{
     return(
<>
 {alert('You needto sign in')}
<Redirect to={{pathname:"/signup",state:{from:props.location}}}/>
</>
      )

 }

}
}    
        />
    )
}