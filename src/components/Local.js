import React from 'react';

const Local=()=>{
    let token = localStorage.getItem("auth");
    if (token==='Yes'){
        return true
    }
    else{
        return false;
    }
    
}
export default Local;