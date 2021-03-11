import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import Business from '../Business/Business';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Mr Pizzanos Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};
const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

                       
class App extends React.Component {

  searchYelp( term, location, sortBy ) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  }

  render () {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses}/>

      </div>
    );
  }
}

export default App;
