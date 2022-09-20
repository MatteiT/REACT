import React, { useState, useContext } from 'react';
import { createContext } from 'react';
import { data } from '../../data';

const PersonContext = createContext();

const contextApi = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <section>
        <h3>ContextApi</h3>
        <List people={people} />
      </section>
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <Singleperson key={person.id} {...person} />;
      })}
    </>
  );
};

const Singleperson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>supprimer</button>
    </div>
  );
};

export default contextApi;
