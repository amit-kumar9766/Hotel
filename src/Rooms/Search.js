import { DateRangePicker } from 'react-date-range';
import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { MDBBtn } from "mdbreact";
import DatePicker from 'react-datepicker';
import { Container, Row, Col, Form} from 'react-bootstrap';
import axios from 'axios';

const Search = ({ data, bid }) => {

  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  
  const [endDate, setEndDate] = useState(new Date())



  const handleBooking = (e) => {
    e.preventDefault();
    console.log(startDate)
    console.log(endDate)
     
    // axios.post('http://localhost:5000/date', {
    //     startDate: startDate,
    //     endDate: endDate,
    //   })

    fetch(`http://localhost:5000/bookings/${bid}/${localStorage.getItem('uid')}`, {
      method: "POST",

    }).then(res => {
      console.log("res", res)
    })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <>
    <Col className="form-area ml-5">
    <Form >
       
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>From</Form.Label>
                <br />
                <DatePicker
                    name="startDate"
                    className="form-control"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    required
                />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>To</Form.Label>
                <br />
                <DatePicker
                    name="endDate"
                    className="form-control mr-auto"
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    required
                />
            </Form.Group>
        </Form.Row>
       
        <MDBBtn color="default" onClick={handleBooking}>Book Now</MDBBtn >
       
    </Form>
</Col>
 

   </>  
  )
}

export default Search;