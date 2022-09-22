import React, { useState, useEffect } from 'react';
import Cocktail from '../components/cocktail';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const params = useParams();

  const [drink, setDrink] = useState([]);
  const newUrl = url + params.singlecocktailId;

  const getSingleCocktail = async () => {
    const { data } = await axios(newUrl);
    setDrink(data.drinks);
  };

  useEffect(() => {
    getSingleCocktail();
  }, []);

  return (
    <div>
      <Cocktail drink={drink} />
    </div>
  );
};

export default SingleCocktail;
