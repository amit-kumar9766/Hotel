import React from 'react';


class Logout extends React.Component {
    constructor(props) {
    
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