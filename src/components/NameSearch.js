import React, { Component } from 'react'

export class NameSearch extends Component {
  render() {
    const {queryProp, handleChangeProp, fetchDataProp} = this.props;
    return (
      <>
        <label htmlFor='query-input'> {/* OBS 1 */}
          <input
            type='text'
            id='query-input'
            placeholder='Search drink by name'
            name='query'
            value={ queryProp }
            onChange={handleChangeProp}
          />
        </label>
        <button
          type='button'
          onClick={fetchDataProp}
        >
          Search
        </button>
      </>
    )
  }
}

export default NameSearch
