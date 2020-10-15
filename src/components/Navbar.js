import React, { Component } from "react";
import {Navbar,Nav} from 'react-bootstrap';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import  {Link} from 'react-router-dom';
import Local from './Local'


class NavbarPage extends Component {
  // constructor(){
  //   super(props)
  //   this.state=
  // }
 
state = {
  isOpen: true,
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
//===========================
handleClick=(e)=>{
  localStorage.clear();
}



render() {
    
  return (
    <Router>

      <MDBNavbar color="default-color" dark expand="md">

      {/* <div style={{height:'200px'}}> */}
        <MDBNavbarBrand>
          <strong className="white-text">HOTELS</strong>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />

      
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
        
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/rooms">Rooms</Nav.Link>

           
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Choose Here</div>
                </MDBDropdownToggle>

                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/">Home</MDBDropdownItem>
                  <MDBDropdownItem href="/rooms">Rooms</MDBDropdownItem>
                </MDBDropdownMenu>

              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            {Local()?
            (<MDBNavItem>
              <Nav.Link>{localStorage.getItem('name')}</Nav.Link>
            </MDBNavItem>):(
             <MDBNavItem>
              <Nav.Link href="/signup">SignUp</Nav.Link>
            </MDBNavItem>)
            
             }

            { Local()?
           
           ( <MDBNavItem>
            <Nav.Link href="/" onClick={()=>this.handleClick()}>Logout</Nav.Link> 
          </MDBNavItem>): (<MDBNavItem>
              <Nav.Link href="/login" >Login</Nav.Link>
            </MDBNavItem>)
           }
          
          <MDBNavItem>
              <Nav.Link href="/bookings">Bookings</Nav.Link>
          </MDBNavItem>
           
          </MDBNavbarNav>
        </MDBCollapse>

     
      </MDBNavbar>
    </Router>
    
    );
  }
}

export default NavbarPage;
