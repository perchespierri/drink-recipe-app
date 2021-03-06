import React, { Component } from 'react';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';
import NameSearch from '../components/NameSearch';
// import IngredientSearch from '../components/IngredientSearch';
import { Link } from 'react-router-dom';

class Main extends Component {

  state = {
    query: '',
    loading: false,
    cocktails: null, // OBS 3
    notFound: false,
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value,
    });
  };

  fetchDataName = () => {
    // OBS 4
    this.setState({
      loading: true,
      cocktails: null,
      notFound: false
    }, () => {
      const { query } = this.state;
      // OBS 2
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((response) => {
        if(!response.drinks) {
          return this.setState({ // OBS 5
            notFound: true,
            loading: false,
          });
        }
        this.setState({
        cocktails: response.drinks,
        loading: false,
      })})
      .catch(error => console.error(error));
    });
  };

  render() {
    const { query, loading, cocktails, notFound }= this.state;
    return (
      <div className='search-bar'>
        <NameSearch
          handleChangeProp={this.handleChange}
          fetchDataProp={this.fetchDataName}
          queryProp={query}
        />

        {/* <IngredientSearch
          handleChangeProp={this.handleChange}
          fetchDataProp={this.fetchData}
          queryProp={query}
        /> */}

        {loading && <Loading />}
        {cocktails && cocktails.map(cocktail => (
          // The name and picture of the drink
          // is a link to its details:

          <Link
            key={cocktail.idDrink}
            to={`/details/${cocktail.idDrink}`}
          >
            <h1 key={cocktail.idDrink}>{cocktail.strDrink}</h1>
            <img
              src={ cocktail.strDrinkThumb }
              alt={cocktail.strDrink}
              width="200"
            />
          </Link>
        ))}

        {notFound && <NotFound queryProp={query} />}
      </div>
    );
  }
}

export default Main;

// OBS:
// 1 - label tag needs htmlFor equal to input's id
// 2 - Always use https:// before endpoint when using fetch
// 3 - API returns drinks: null if query doesn't exist
// 4 - I called the API inside setState so the loading component
// would stay on the screen and the previous query didn't
// 5 - Without the return the if statement would be called.
// I should remember to check on this later