import { useState } from 'react';
import React from 'react';
// valuye, onChange
const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople([...people, person]);
    }
    setEmail('');
    setFirstName('');
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" onClick={handleSubmit}>
            ajouter une personne
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
