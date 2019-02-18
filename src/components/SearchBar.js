import React, {Component} from "react";
class SearchBar extends Component {
    render(){
        return(
            <form onSubmit={this.props.searchWeatherFunction}>
                <input id="zipCode" type="text" placeholder="Type in Your Zip Code Here"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default SearchBar;