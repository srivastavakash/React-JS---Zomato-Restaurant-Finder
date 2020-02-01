import React, { Component } from 'react';

class SearchBox extends Component{


  submit=(e)=>{
    e.preventDefault()
    this.props.onSubmit
  }

  render(props){
    return(
      <div> 
        <form onSubmit={this.props.onSubmit}>
         
         <input 
          type="text" 
          name="city" 
          classsName="form-control"
          placeholder="Your City"
          onChange={this.props.onChangeHandler}
          value={this.props.data.city}
         />
        <input 
          type="text" 
          name="cuisine"
          classsName="form-control"
          placeholder="Your Cuisine"
          onChange={this.props.onChangeHandler}
          value={this.props.data.cuisine}
         /> 
         <button classsName='btnbtn-primary' >{this.props.operation}</button>
     </form>

      </div>
    )
  }
}

export default SearchBox