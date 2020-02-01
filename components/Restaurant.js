import React, { Component } from 'react';

class Restaurant extends Component{
  
  render(props){
    this.id=1
    console.log('prop : ',this.props)
    return(
      <div className='card'>
      
       <h4>  {this.props.id} </h4>
       <h4 className="text-danger"> {this.props.name} </h4>
       <p> {this.props.cuisines}</p>
       <p> Cost {this.props.cost} for one</p>
      </div>
    )
  }
}

export default Restaurant