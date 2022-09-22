import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <>
      <SearchForm />
      <section className="section cocktails">
        <div className="section-center">
          <CocktailList />
        </div>
      </section>
    </>
  );
};

export default Home;
