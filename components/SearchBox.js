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
          placeholder="Your City"
          onChange={this.props.onChangeHandler}
          value={this.props.data.city}
         />
        <input 
          type="text" 
          name="cuisine"
          placeholder="Your Cuisine"
          onChange={this.props.onChangeHandler}
          value={this.props.data.cuisine}
         /> 
         <button >{this.props.operation}</button>
     </form>

      </div>
    )
  }
}

export default SearchBox