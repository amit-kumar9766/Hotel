import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';
import './component.css';
import img from '../assets/booking.jpg';


class ParallaxIntro extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }
  render() {
    const navStyle = { marginTop: '4rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );

    //const { collapsed } = this.state;
    return (
      <div id='parallaxintro'>
       
        <MDBView
          src={img}
          fixed
        >
          <MDBMask className='rgba-white-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '15rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='display-3 mb-0 pt-md-5 pt-5 yellow-text font-weight-bold'>
                  Deluxe Rooms
                  {/* <span className='indigo-text font-weight-bold' 
                  style={{marginLeft:'50px'}}>Rooms</span> */}
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5  white-text font-weight-bold'>
                  Deluxe Rooms start at  300 $
                </h5>
                <MDBBtn
                  className='btn-light-green'
                  size='lg'
                //   href='https://mdbootstrap.com/docs/react/css/parallax/'
                  href='/rooms'
                  
                >
                  Our Rooms
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      
      </div>
    );
  }
}

export default ParallaxIntro;