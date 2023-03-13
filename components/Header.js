import React from "react";
//import SearchBox from "./SearchBox";

function Header(props) {
  //console.log("Header Props", props);
  return (
    <header className="container-fluid fixed-top" id="header">
      <div className="row">
        <div className="col-md-4">
          <h2 className="head text-center">HUNGERBITE</h2>
          <br />
          <p className="tag text-center"> Your Restaurant Guide </p>
        </div>
        <div className="col-md-6">
          <h5 className="tag-line text-danger">
            FOOD FOR EVERY KIND OF HUNGER
          </h5>
          <br />
          <form onSubmit={props.onSubmit} className="form-inline">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="form-control"
                  placeholder="  Your City  "
                  onChange={props.onChangeHandler}
                  value={props.data.city}
                />
              </div>
              <div className="input-group-prepend">
                <input
                  type="text"
                  name="cuisine"
                  className="form-control"
                  placeholder="  Your Cuisine"
                  onChange={props.onChangeHandler}
                  value={props.data.cuisine}
                />
              </div>
              <div className="input-group-prepend">
                <button className="btn btn-sm btn-success order-btn">
                  {props.operation}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-2">
          <img
            className="logo head"
            src="https://lh5.googleusercontent.com/proxy/s43pGaBVHRkUctpb4XzpvoIXqJNyK2QOjFv_OtA1WLbcQCe3Dru2VYO5M0gUddyyU3qsyjLpm3FUD7FWaRcCHDnF-UQV-Sy1_y22rRLV8kp40my8MkIyn7eZePCU8GKTxMC_0TghTwW2YLVjntIIQpI3UiOy"
            alt="-baker"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
