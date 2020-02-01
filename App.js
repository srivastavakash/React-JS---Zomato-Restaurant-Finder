import React, { Component } from 'react';
import SearchBox from  './components/SearchBox'
import Restaurant from './components/Restaurant'


class App extends Component {
  constructor() {
    super();
    this.state = {
      city:'',
      cuisine:'',
      restaurants:[],
      cuisine:'',
      operation :'Search',
      isLoaded:false
    };

  }

  onChangeHandler=(event)=>{ 
    const {name,value} = event.target
    this.setState({
       [name] : value
    })
  }

   getResturants = (e) => {
     e.preventDefault() 
    console.log('geting  restaurants...')
     this.setState({
      operation : 'Searching Restaurants'
    })
    console.log('city = ',this.state.city,' cuisine = ',this.state.cuisine)
  const axios = require('axios');
  axios({
    method: 'GET',
    url: 'https://developers.zomato.com/api/v2.1/search?entity_type=city&q='+this.state.city+'&start=0&count=10&lat=18.594847&lon=73.735742&radius=500&cuisines='+this.state.cuisine+'&sort=real_distance&order=asc',
    headers: {
      'user-key': "33419799ae4c439ddd65b4c6bfbca9cb", 
      "content-type": "application/json"
    } 
  }) 
    .then(response => {
      console.log(response.data.restaurants[0].restaurant.name);
      //console.log(response.data.restaurants);
      this.setState({
        restaurants : response.data
      })
    })
    .catch(error => {
      console.log(error);
    })

    this.setState({
      city:'',
      cuisine:'',
      operation:'Search'
    })
}
  

  render() {

   /* var list= [...this.state.restaurants]

     const restaurantList = list.map(
      restaurant=>
      <Restaurant key={restaurants.restaurant.id}
        id={restaurants.restaurant.id}
      />
    );
  */
    return (
      <div>
       
       <SearchBox 
         operation={this.state.operation}
         onSubmit={this.getResturants}
         onChangeHandler={this.onChangeHandler}
         data={this.state}
         />
        
         {/*restaurantList*/}
         {/*console.log(this.state.restaurants)*/}
       
      </div>
    )
  }
}

export default App