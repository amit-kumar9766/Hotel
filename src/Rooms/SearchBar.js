import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask ,MDBNavLink} from "mdbreact";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const SearchBar=()=>{
    return (
     <>
    <div style={{display:'flex',justifyContent:'center'}}><h2>SEARCH ROOMS HERE</h2></div>
    <MDBRow>
    
    <MDBCol size="4">  <div style={{width:'60%'}}>
        <select className="browser-default custom-select">
          <option>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div> </MDBCol>



    {/* <div style={{width:'500px'}}> */}
    <MDBCol size="4"> <div>
     <input type="range" id="vol" name="vol" min="0" max="100" style={{width:'60%'}}/>
      </div> </MDBCol>
      {/* </div> */}

    <MDBCol size="4"> <div style={{width:'60%'}}>
        <select className="browser-default custom-select">
          <option>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div> </MDBCol>

  </MDBRow>
  </>

    )
  }
export default SearchBar;