import { useState } from 'react';
import React from 'react';
// valuye, onChange
const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({ firstname: '', email: '', age: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstname && person.email && person.age) {
      const newPerson = {
        id: new Date().getTime().toString(),
        firstname,
        email,
        ...person,
      };
      setPeople([...people, newPerson]);
    }
    setPerson({ firstname: '', email: '', age: '' });
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstname">Prenom</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={person.firstname}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">age</label>
            <input
              type="text"
              name="age"
              id="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>

          <button type="submit" onClick={handleSubmit}>
            ajouter une personne
          </button>
        </form>
        {people.map((person) => {
          const { id, firstname, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstname}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
