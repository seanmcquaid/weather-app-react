import React, {Component} from "react";

class WeatherInfo extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.results)
        return(
            <h2>Weather Info Body</h2>
        )
    }
}

export default WeatherInfo;