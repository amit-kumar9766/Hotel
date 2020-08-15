import React  from "react";
import { MDBCard, MDBCardBody, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBTestimonial, MDBAvatar, MDBIcon } from "mdbreact";
import { Button,Carousel,Card } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const TestimonialsMultiPage = () => {
  return (
     
<Carousel>
<Carousel.Item>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png " />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Carousel.Caption>
<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png " />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Carousel.Caption>
<h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png " />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Carousel.Caption>
<h3>Third slide label</h3>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel> 

  //  <MDBContainer >
  //     <section className="text-center my-5">
  //       <h2 className="h1-responsive font-weight-bold my-5">
  //         Testimonials v.4
  //       </h2>
  //       <MDBCarousel
  //         activeItem={1}
  //         length={3}
  //         slide={true}
  //         showControls={true}
  //         multiItem
  //         testimonial
  //       >
  //         <MDBCarouselInner >
  //           <MDBRow >
  //           <MDBCarouselItem itemId="1">
  //               <MDBCol md='4'>
  //       <MDBCard testimonial>
  //         <div className='mx-auto white'>
  //           <img
  //             src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg'
  //             alt=''
  //           />
  //         </div>
  //         <MDBCardBody>
  //           <h4 className='card-title'>Martha Smith</h4>
  //           <hr />
  //           <p>
  //             <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
  //             consectetur adipisicing elit. Eos, adipisci{' '}
  //             <MDBIcon icon='quote-right' />
  //           </p>
  //         </MDBCardBody>
  //       </MDBCard>
  //     </MDBCol>
  //               <MDBCol md='4'>
  //       <MDBCard testimonial>
        
  //         <div className='mx-auto white'>
  //           <img
  //             src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg'
  //             alt=''
  //           />
  //         </div>
  //         <MDBCardBody>
  //           <h4 className='card-title'>Martha Smith</h4>
  //           <hr />
  //           <p>
  //             <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
  //             consectetur adipisicing elit. Eos, adipisci{' '}
  //             <MDBIcon icon='quote-right' />
  //           </p>
  //         </MDBCardBody>
  //       </MDBCard>
  //     </MDBCol>
  //               <MDBCol md='4'>
  //       <MDBCard testimonial>
        
  //         <div className='mx-auto white'>
  //           <img
  //             src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg'
  //             alt=''
  //           />
  //         </div>
  //         <MDBCardBody>
  //           <h4 className='card-title'>Martha Smith</h4>
  //           <hr />
  //           <p>
  //             <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
  //             consectetur adipisicing elit. Eos, adipisci{' '}
  //             <MDBIcon icon='quote-right' />
  //           </p>
  //         </MDBCardBody>
  //       </MDBCard>
  //     </MDBCol>
  //             </MDBCarouselItem>
  //             <MDBCarouselItem itemId="2">
  //               <MDBCol md='4'>
  //       <MDBCard testimonial>
        
  //         <div className='mx-auto white'>
  //           <img
  //             src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg'
  //             alt=''
  //           />
  //         </div>
  //         <MDBCardBody>
  //           <h4 className='card-title'>Martha Smith</h4>
  //           <hr />
  //           <p>
  //             <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
  //             consectetur adipisicing elit. Eos, adipisci{' '}
  //             <MDBIcon icon='quote-right' />
  //           </p>
  //         </MDBCardBody>
  //       </MDBCard>
  //     </MDBCol>
  //               <MDBCol md='4'>
  //       <MDBCard testimonial>
        
  //         <div className='mx-auto white'>
  //           <img
  //             src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg'
  //             alt=''
  //           />
  //         </div>
  //         <MDBCardBody>
  //           <h4 className='card-title'>Martha Smith</h4>
  //           <hr />
  //           <p>
  //             <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
  //             consectetur adipisicing elit. Eos, adipisci{' '}
  //             <MDBIcon icon='quote-right' />
  //           </p>
  //         </MDBCardBody>
  //       </MDBCard>
  //     </MDBCol>
  //               <MDBCol md='4'>
  //       <MDBCard testimonial>
        
  //         <div className='mx-auto white'>
  //           <img
  //             src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg'
  //             alt=''
  //           />
  //         </div>
  //         <MDBCardBody>
  //           <h4 className='card-title'>Martha Smith</h4>
  //           <hr />
  //           <p>
  //             <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
  //             consectetur adipisicing elit. Eos, adipisci{' '}
  //             <MDBIcon icon='quote-right' />
  //           </p>
  //         </MDBCardBody>
  //       </MDBCard>
  //     </MDBCol>
  //             </MDBCarouselItem>
  //             <MDBCarouselItem itemId="3">
  //               <MDBCol md='4'>
  //       <MDBCard testimonial>
        
  //         <div className='mx-auto white'>
  //           <img
  //             src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg'
  //             alt=''
  //           />
  //         </div>
  //         <MDBCardBody>
  //           <h4 className='card-title'>Martha Smith</h4>
  //           <hr />
  //           <p>
  //             <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
  //             consectetur adipisicing elit. Eos, adipisci{' '}
  //             <MDBIcon icon='quote-right' />
  //           </p>
  //         </MDBCardBody>
  //       </MDBCard>
  //     </MDBCol>
  //               <MDBCol md='4'>
  //       <MDBCard testimonial>
        
  //         <div className='mx-auto white'>
  //           <img
  //             src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg'
  //             alt=''
  //           />
  //         </div>
  //         <MDBCardBody>
  //           <h4 className='card-title'>Martha Smith</h4>
  //           <hr />
  //           <p>
  //             <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
  //             consectetur adipisicing elit. Eos, adipisci{' '}
  //             <MDBIcon icon='quote-right' />
  //           </p>
  //         </MDBCardBody>
  //       </MDBCard>
  //     </MDBCol>
  //               <MDBCol md='4'>
  //       <MDBCard testimonial>
        
  //         <div className='mx-auto white'>
  //           <img
  //             src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg'
  //             alt=''
  //           />
  //         </div>
  //         <MDBCardBody>
  //           <h4 className='card-title'>Martha Smith</h4>
  //           <hr />
  //           <p>
  //             <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
  //             consectetur adipisicing elit. Eos, adipisci{' '}
  //             <MDBIcon icon='quote-right' />
  //           </p>
  //         </MDBCardBody>
  //       </MDBCard>
  //     </MDBCol>
  //             </MDBCarouselItem>
  //           </MDBRow>
  //         </MDBCarouselInner>
  //       </MDBCarousel>
  //     </section>
  //   </MDBContainer> 
  );
}

export default TestimonialsMultiPage;