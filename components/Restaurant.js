import React, { Component } from 'react';

class Restaurant extends Component{
  render(props){
    console.log(this.props)
    return(
      <p> Restaurants List here  </p>
    )
  }
}

export default Restaurant