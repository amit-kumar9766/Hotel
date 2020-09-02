import { DateRangePicker } from 'react-date-range';
import React, {useState,useContext} from 'react';
import { useHistory } from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { MDBBtn } from "mdbreact";
import { Button } from "@material-ui/core";
//import PeopleIcon from "@material-ui/icons/People";
import { UserContext } from "../context/UserContext";
const Search=({data}) =>{

  //const data=props.location;
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [price,setPrice]=useState(data.price)
  const [login,setLogin]=useState(false)
  const value = useContext(UserContext);
    console.log(value)

  const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      price:price,
      key: "selection",
    };

 const handleSelect=(ranges)=> {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    
  }

  console.log(data)
 // console.log(startDate)
  var a1=startDate.toLocaleString().split('/');
  var a2=endDate.toLocaleString().split('/');
  console.log(a1,a2)
  const noOfdays=a2[1]-a1[1]
  console.log(noOfdays)
  if (noOfdays>=0){
   data.price=data.price*noOfdays;
  }
  else if (noOfdays<0 && a1[0]-a2[0]<0){
    data.price=data.price*(30+noOfdays)
  }
  
  // if(noOfdays<0 && a2[1]-a2[1]>0){
  //   data.price=data.price*(30+noOfdays);
  // } 
  return (
      <div className='search' style={{marginTop:'100px'}} >
           <h4 style={{marginLeft:'230px'}} > Booking Here </h4>
          <div style={{borderStyle:'groove',borderColor: 'hsl(0, 0%, 73%)'}}>
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
          </div>
          
          {/* <input min={0} max={5} defaultValue={2} type="number" /> */}
          <div style={{display:'flex',justifyContent:'center'}}>
          <MDBBtn  color="default" onClick={() => history.push('/payment',{data:data})}>Pay Here</MDBBtn >
          </div>
      </div>
  )
}

export default Search;