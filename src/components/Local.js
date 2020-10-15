import React from 'react';

const Local=()=>{
    let token = localStorage.getItem("userToken");
    if (token!==null){
        return true
    }
    else{
        return false;
    }
    
}
export default Local;