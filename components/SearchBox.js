import React, { Component } from "react";

class SearchBox extends Component {
  submit = e => {
    e.preventDefault();
    /// this.props.onSubmit;
  };

  render(props) {
    return (
      <div className="SearchBox">
        <form onSubmit={this.props.onSubmit} className="form-inline">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <input
                type="text"
                name="city"
                id="city"
                className="form-control"
                placeholder="  Your City  "
                onChange={this.props.onChangeHandler}
                value={this.props.data.city}
              />
            </div>
            <div className="input-group-prepend">
              <input
                type="text"
                name="cuisine"
                className="form-control"
                placeholder="  Your Cuisine"
                onChange={this.props.onChangeHandler}
                value={this.props.data.cuisine}
              />
            </div>
            <div className="input-group-prepend">
              <button className="btn btn-sm btn-success order-btn">
                {this.props.operation}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
