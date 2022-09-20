import { useState } from 'react';
import { data } from '../../data';

const propDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <Singleperson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const Singleperson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>supprimer</button>
    </div>
  );
};

export default propDrilling;
