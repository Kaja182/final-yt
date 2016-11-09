import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

  }

  render() {
    return (
      <div className="search-bar">

      <div className="input-group">

        <input
          placeholder="Enter search string"
          value={this.state.term}
          onChange={e => this.setState({
            term: e.target.value
          })}
          className="form-control" />

          <span className="input-group-btn">
            <button
              type="button"
              onClick={() => this.props.videoSearch(this.state.term)}
              className="btn btn-success">Click me</button>
          </span>

          </div>

      </div>
    );
  }

}

export default SearchBar;
