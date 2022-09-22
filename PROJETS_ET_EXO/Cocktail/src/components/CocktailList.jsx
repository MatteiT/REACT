import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cocktailList = () => {
  const [drinks, setDrinks] = useState([]);
  const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=a';

  const getCocktails = async () => {
    const { data } = await axios(url);
    setDrinks(data.drinks);
  };

  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <>
      {drinks.map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

        return (
          <Link to={`/cocktail/${id}`} key={id}>
            <article className="cocktail">
              <img src={image} alt={name} />
              <h3>{name}</h3>
            </article>
          </Link>
        );
      })}
      ;
    </>
  );
};

export default cocktailList;
