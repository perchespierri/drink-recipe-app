import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    const {queryProp} = this.props;
    return (
      <div>
        <p>No drink found by the name {queryProp} </p>
      </div>
    );
  }
}

export default NotFound
