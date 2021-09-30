import React, { Component } from 'react';

class Main extends Component {

  state = {
    query: '',
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {query}= this.state;
    return (
      <div>
        <label htmlFor='query-input'> {/* obs 1 */}
          Search by drink:
          <input
            type='text'
            id='query-input'
            value={query}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Main;

// OBS:
// 1 - label tag needs htmlFor equal to input's id
// 2
