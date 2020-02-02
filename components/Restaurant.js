import React, { Component } from 'react';

class Restaurant extends Component{
  
  render(props){
    this.id=1
    console.log('prop : ',this.props)

    const ratingStyle={
      backgroundColor:'#'+this.props.rating.rating_color,
      color:'#fff',
      'borderRadius':'5'
      };

    return(
      <div className='card restaurant-card'>
       <div className='row'>
       <div className='col-md-3 col-sm-4'>
       <img src={this.props.img} className='img-tumbnail rounded'/>
       </div>
       <div className='col-md-9 col-sm-8'>
       <h4 className="res-name text-danger font-weight-bold"> {this.props.name} </h4>
       <p className='text-secondary'> {this.props.area}</p>
       <div className='rating font-weight-bold' style={ratingStyle}>{this.props.rating.aggregate_rating} </div>
       <p className='text-secondary'> {this.props.cuisines}</p>
       <p> Cost {this.props.cost} for one</p>
       </div>
       </div>
      </div>
    )
  }
}

export default Restaurant