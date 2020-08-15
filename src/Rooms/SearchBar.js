import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask ,MDBNavLink} from "mdbreact";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const SearchBar=()=>{
    return (
     
    <MDBRow>
        
    <MDBCol size="4"><h6>Room Type</h6><MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        MDBDropdown
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Regular link</MDBDropdownItem>
        <MDBDropdownItem disabled href="#">
          Disabled link
        </MDBDropdownItem>
        <MDBDropdownItem href="#">Another link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown> </MDBCol>

    <MDBCol size="4"><h6>Guests</h6><MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        MDBDropdown
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Regular link</MDBDropdownItem>
        <MDBDropdownItem disabled href="#">
          Disabled link
        </MDBDropdownItem>
        <MDBDropdownItem href="#">Another link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown> </MDBCol>

    <MDBCol size="4"><h6>Room Price</h6><MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        MDBDropdown
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Regular link</MDBDropdownItem>
        <MDBDropdownItem disabled href="#">
          Disabled link
        </MDBDropdownItem>
        <MDBDropdownItem href="#">Another link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown> </MDBCol>

  </MDBRow>

    )}
export default SearchBar;