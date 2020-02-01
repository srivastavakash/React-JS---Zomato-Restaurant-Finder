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
           <div className='row'>
             <div className='col-md-5'>
               <input 
                type="text" 
                name="city" 
                className="form-control"
                placeholder="Your City"
                onChange={this.props.onChangeHandler}
                value={this.props.data.city}
                />
              </div>
         <div className='col-md-5'>
           <input 
             type="text" 
             name="cuisine"
             className="form-control"
             placeholder="Your Cuisine"
             onChange={this.props.onChangeHandler}
             value={this.props.data.cuisine}
            /> 
        </div>
         <div className='col-md-2'>
          <button className="btn btn-primary" >{this.props.operation}  </button>
         </div>
      </div>
     </form>

      </div>
    )
  }
}

export default SearchBox