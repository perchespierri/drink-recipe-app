import React, { Component } from 'react';
import Loading from '../components/Loading';

class Main extends Component {

  state = {
    query: '',
    loading: false,
    cocktails: null,
    // OBS 3
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value,
    });
  };

  fetchData = () => {
    const { query } = this.state;
    // OBS 2
    const apiData = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((response) => this.setState({
        cocktails: response.drinks,
      }))
      .catch(error => console.error(error));
    this.setState({loading: false, query:''});
  };

  render() {
    const {query, loading, cocktails}= this.state;
    return (
      <div className='search-bar'>
        {loading && <Loading />}
        <label htmlFor='query-input'> {/* OBS 1 */}
          <input
            type='text'
            id='query-input'
            placeholder='Search drink by name'
            name='query'
            value={ query }
            onChange={this.handleChange}
          />
        </label>
        <button
          type='button'
          onClick={this.fetchData}
        >
          Search
        </button>
        {cocktails.map(cocktail => (
          <>
            <h1 key={cocktail.idDrink}>{cocktail.strDrink}</h1>
            <img
              src={ cocktail.strDrinkThumb }
              alt={cocktail.strDrink}
              width="200"
            />
          </>
        ))}
      </div>
    );
  }
}

export default Main;

// OBS:
// 1 - label tag needs htmlFor equal to input's id
// 2 - Always use https:// before endpoint
// 3 - API returns drinks: null if query doesn't exist
