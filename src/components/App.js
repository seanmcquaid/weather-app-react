import React, { Component } from 'react';
import '../App.css';
import config from "../config";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";


class App extends Component {
  constructor(){
    super();
    this.state = {
      searchResults : []
    }
    this.weatherSearch = this.weatherSearch.bind(this);
  }

  weatherSearch(event){
    event.preventDefault();
    console.log("search started")
    const zipCode = document.getElementById("zipCode").value;
    // console.log(zipCode)
    // console.log(config)
    const searchUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&APPID=${config.apiKey}&units=imperial`;
    // console.log(searchUrl)
    fetch(searchUrl)
    .then((response)=>{
      return (response.json())
    }).then((myJson)=>{
      console.log(myJson)
      this.setState({
        searchResults: myJson
      })
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Weather App Practice</h1>
        <SearchBar searchWeatherFunction={this.weatherSearch}/>
        <WeatherInfo results={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;
