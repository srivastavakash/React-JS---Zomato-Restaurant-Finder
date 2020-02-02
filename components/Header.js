import React, { Component } from 'react';
import SearchBox from  './SearchBox'

function Header(props){
  console.log('Header Props',props)
  return(
  <header className="container-fluid">
    <div className="row">
       <div className="col-md-4">
         <br/>
         <h2 className="head text-center">Restaurant Finder</h2>
       </div>
       <div className="col-md-6"><br/>
       <SearchBox operation={props.operation}
         onSubmit={props.getResturants}
         onChangeHandler={props.onChangeHandler}
         data={props.data}/>
       </div>
       <div className="col-md-2">
         <img className="logo head" src="https://lh5.googleusercontent.com/proxy/s43pGaBVHRkUctpb4XzpvoIXqJNyK2QOjFv_OtA1WLbcQCe3Dru2VYO5M0gUddyyU3qsyjLpm3FUD7FWaRcCHDnF-UQV-Sy1_y22rRLV8kp40my8MkIyn7eZePCU8GKTxMC_0TghTwW2YLVjntIIQpI3UiOy"/>
       </div>
    </div>
  </header>
  )
}

export default Header