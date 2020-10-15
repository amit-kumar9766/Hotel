import React  from "react";
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

  
 
  );
}

export default TestimonialsMultiPage;