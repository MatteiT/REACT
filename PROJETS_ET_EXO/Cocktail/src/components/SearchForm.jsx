import React from 'react';

const SearchForm = () => {
  return (
    <>
      <form method="post" className="search-form">
        <h4>rechercher un coktail</h4>
        <label htmlFor="">cocktail</label>
        <input
          type="text"
          name="drink"
          placeholder="Coktail, ingredients etc..."
        />
      </form>
    </>
  );
};

export default SearchForm;
