import React from 'react';

// const Logout=({auth})=>{
//     console.log(auth)
//     return (
//     <>
   
//     </>)
// }
class Logout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }
    render(){
        return(
           <>
           {this.props.auth}
           </>
        )
    }
}
export default Logout;