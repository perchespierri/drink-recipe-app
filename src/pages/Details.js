import React, { Component } from 'react';
// import PropTypes from 'prop-types';
class Details extends Component {

  state = {
    cocktail: [],
    loading: false,
  }

  // Since in Main I used fetch(), here I'll use async/await
  fetchData = async () => {
    this.setState({loading: true});
    const { match: { params: { id } } } = this.props;
    try {
      const cocktailData = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const cocktailDataJSON = await cocktailData.json();
      this.setState({
        cocktail: cocktailDataJSON.drinks[0],
        loading: false,
      });
    } catch(error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchData();
  };

  render() {
    const {cocktail} = this.state;
    return (
      <div className='details-div'>
        <h1>{cocktail.strDrink}</h1>
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          width="200"
        />
        <p>{cocktail.strInstructions}</p>
      </div>
    );
  }
}

// Details.propTypes = {
//   match: PropTypes.objectOf(PropTypes.any).isRequired,
// };
// Do over this proptypes later (I can do better than this, huh?)

export default Details
