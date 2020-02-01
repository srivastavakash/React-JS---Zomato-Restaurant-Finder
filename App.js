import React, { Component } from 'react';
import SearchBox from  './components/SearchBox'
import Restaurant from './components/Restaurant'



class App extends Component {
  constructor() {
    super();
    this.state = {
      city:'',
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
    url: 'https://developers.zomato.com/api/v2.1/search?entity_type=city&q='+this.state.city+'&start=0&count=10&lat=18.594847&lon=73.735742&radius=5000&cuisines='+this.state.cuisine+'&sort=real_distance&order=asc',
    headers: {
      'user-key': "33419799ae4c439ddd65b4c6bfbca9cb", 
      "content-type": "application/json"
    } 
  }) 
    .then(response => {
      console.log(response.data.restaurants[0].restaurant.name);
      //console.log(response.data.restaurants);
      this.setState({
        restaurants : response.data.restaurants
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

    var list= [...this.state.restaurants]

     const restaurantList = list.map(
      restaurant=>
      <Restaurant
        key={restaurant.restaurant.id}
        //id={restaurant.restaurant.id}
        name={restaurant.restaurant.name}
        cuisines={restaurant.restaurant.cuisines}
        cost={(restaurant.restaurant.average_cost_for_two)/2}
        img={restaurant.restaurant.thumb}
      />
    );
  

    return (
      <div className='container'>       
       <SearchBox 
         operation={this.state.operation}
         onSubmit={this.getResturants}
         onChangeHandler={this.onChangeHandler}
         data={this.state}
         />
          <h3> Restaurants List here  </h3>
        <table className='table-responsive'>
          <tbody>
          <tr><td> {restaurantList}</td></tr>
          </tbody>
        </table>
        
        {/*restaurantList*/}
         {console.log(this.state.restaurants)}
       
      </div>
    )
  }
}

export default App