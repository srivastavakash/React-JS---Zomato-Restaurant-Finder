import React, { Component } from "react";
import SearchBox from "./components/SearchBox";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header";
import axios from "axios";
const apiKey = "33419799ae4c439ddd65b4c6bfbca9cb";

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: {
        method: "GET",
        headers: {
          "user-key": apiKey,
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
      },
      city: "",
      cityId: null,
      entity_type: "",
      restaurants: [],
      cuisine: "",
      cuisineId: "",
      allCuisines: "",
      operation: "Get Restaurants ",
      isLoaded: false
    };
    this.cityId = "";
    this.entity_type = "";
  }

  onChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getResturants = async e => {
    e.preventDefault();
    if (this.state.city === "" || this.state.city == null) {
      alert("Please Enter your city");
      return false;
    }
    if (this.state.cuisine === "" || this.state.cuisine == null) {
      alert("Please Enter your cuisine");
      return false;
    }

    this.setState({ operation: "Searching..." });
    this.city = this.state.city;
    const axios = require("axios");
    console.log(this.state.cuisine);
    await axios({
      method: "GET",
      url: "https://developers.zomato.com/api/v2.1/cities?q=" + this.state.city,
      headers: {
        "user-key": apiKey,
        "content-type": "application/json"
      }
    })
      .then(res => {
        //console.log("1. city details : ", res);
        this.setState({
          cityId: res.data.location_suggestions[0].id,
          entity_type: res.data.location_suggestions[0].entity_type
        });
      })
      .catch(error => {
        console.log("error 1 - city details : ", error);
        alert("No restaurant found ........ Please enter proper city name");
      });
    if (this.state.cityId === null) {
      this.error = "No restaurant found ........ Please enter proper city name";
    }
    /*
    console.log(
      "3. got entity-> entity type : ",
      this.state.entity_type,
      "entity id : ",
      this.state.cityId
    );
      */
    await axios({
      method: "GET",
      url:
        "https://developers.zomato.com/api/v2.1/cuisines?city_id=" +
        this.state.cityId,
      headers: {
        "user-key": apiKey,
        "content-type": "application/json"
      }
    })
      .then(response => {
        /*console.log(
          "cuisines in : ",
          this.state.city,
          this.state.cityId,
          response
        ); */
        this.setState({
          allCuisines: response.data.cuisines
        });
      })
      .catch(error => {
        console.log("error 2 in fetching cuisine  :", error.response);
      });

    //console.log("all cuisines : ", this.state.allCuisines);

    this.cuisine_obj = [];

    for (let i = 0; i < this.state.allCuisines.length; i++) {
      if (
        this.state.allCuisines[i].cuisine.cuisine_name
          .toString()
          .toLowerCase() === this.state.cuisine.toLowerCase()
      )
        this.cuisine_obj.push(this.state.allCuisines[i]);
    }

    //console.log("cuisine Obj : ", this.cuisine_obj);
    if (this.cuisine_obj.length > 0) {
      await axios({
        method: "GET",
        url:
          "https://developers.zomato.com/api/v2.1/search?entity_id=" +
          this.state.cityId +
          "&entity_type=city&start=0&count=15&radius=5000&cuisines=" +
          this.cuisine_obj[0].cuisine.cuisine_id +
          "&sort=rating&order=desc",
        headers: {
          "user-key": apiKey,
          "content-type": "application/json"
        }
      })
        .then(response => {
          this.setState({
            restaurants: response.data.restaurants,
            isLoaded: true
          });
        })
        .catch(error => {
          console.log("error 2 :", error.response);
        });
      this.error = "";
    } else {
      this.error =
        "No restaurant found ........ Please enter proper city and cuisine name ";
      alert(this.error);
      //this.setState({ restaurants: [] });
    }

    this.result = null;

    this.setState({
      city: "",
      cuisine: "",
      operation: "Get Restaurants"
    });
  };

  render() {
    var list = [...this.state.restaurants];

    const restaurantList = list.map(restaurant => (
      <Restaurant
        key={restaurant.restaurant.id}
        name={restaurant.restaurant.name}
        cuisines={restaurant.restaurant.cuisines}
        cost={restaurant.restaurant.average_cost_for_two / 2}
        img={restaurant.restaurant.thumb}
        rating={restaurant.restaurant.user_rating}
        votes={restaurant.restaurant.user_rating.votes}
        ratings={restaurant.restaurant.all_reviews_count}
        locality={restaurant.restaurant.location.locality_verbose}
        url={restaurant.restaurant.url}
      />
    ));
    return (
      <React.Fragment>
        <Header
          operation={this.state.operation}
          onSubmit={this.getResturants}
          onChangeHandler={this.onChangeHandler}
          data={this.state}
        />
        <div className="container res-list">
          {this.state.isLoaded && (
            <p className="text-danger">
              {this.cuisine_obj.length > 0 ? (
                <p className="text-danger">
                  Showing top 15 results for
                  <b>
                    {" " +
                      this.cuisine_obj[0].cuisine.cuisine_name +
                      " in " +
                      this.city}
                  </b>
                </p>
              ) : (
                <b>
                  {this.error} <br /> Showing previous restaurants
                </b>
              )}
            </p>
          )}
          {this.state.restaurants.length > 0
            ? (this.result = restaurantList)
            : (this.result = "")}
          {this.result}
        </div>
        {console.clear()}
      </React.Fragment>
    );
  }
}

export default App;
