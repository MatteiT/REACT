import React from 'react';
import Tours from './Tours';
import { useState, useEffect } from 'react';
import Loading from './Loading';
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [voyages, setVoyages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const response = await fetch(url);
    const voyages = await response.json();
    setVoyages(voyages);
    setIsLoading(false);
  };

  const removeItem = (id) => {
    const newVoyages = voyages.filter((voyage) => voyage.id !== id);
    setVoyages(newVoyages);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours voyages={voyages} removeItem={removeItem} />
    </main>
  );
};

export default App;
