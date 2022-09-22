import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ drink }) => {
  console.log(drink);
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;

  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  return (
    <>
      <section className="loading hide-loading">
        <img src="../../public/loading.gif" alt="loading" />
      </section>
      <section className="single-drink">
        <img src={image} alt={name} className="drink-img" />
        <article className="drink-info">
          <h2 className="drink-name">{name}</h2>
          <p className="drink-description">{desc}</p>
          <ul className="drink-ingredients">
            {list.map((item) => {
              if (!item) return;
              return `<li><i class="far fa-check-square"></i>${item}</li>`;
            })}
          </ul>
          <Link to="/" className="btn">
            all cocktails
          </Link>
        </article>
      </section>
    </>
  );
};

export default Cocktail;
