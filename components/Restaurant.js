import React, { Component } from 'react';

class Restaurant extends Component{
  
  render(props){
    this.id=1
    console.log('prop : ',this.props)
    return(
      <div className='card'>
       <div className='row'>
       <div className='col-md-3 col-sm-4'>
       <img src={this.props.img} className='img-tumbnail rounded'/>
       </div>
       <div className='col-md-9 col-sm-8'>
       <h4 className="text-danger font-weight-bold"> {this.props.name} </h4>
       <p> {this.props.cuisines}</p>
       <p> Cost {this.props.cost} for one</p>
       </div>
       </div>
      </div>
    )
  }
}

export default Restaurant