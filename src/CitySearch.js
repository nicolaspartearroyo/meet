import React, { Component } from 'react';

class CitySearch extends Component {
  state = {
    locations: this.props.locations,
    query: '',
    suggestions: [],
    showSuggestions: undefined
  }
  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false
    });

    this.props.updateEvents(suggestion, this.props.numberOfEvents);
  };

  render() {
    return (
      <div className="CitySearch">
        <p>Search your city</p>
        <input type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true }) }} />
        <div>
          <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
            {this.state.suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >{suggestion}</li>
            ))}
            <li onClick={() => this.handleItemClicked("all")}>
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;


