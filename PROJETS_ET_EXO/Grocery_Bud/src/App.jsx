import { useState, useEffect } from 'react';
import React from 'react';
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};
// valuye, onChange
const Inputs = () => {
  const [people, setPeople] = useState(getLocalStorage());
  const [task, setTask] = useState('');
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      const newItem = { id: new Date().getTime().toString(), task };
      setPeople([...people, newItem]);
    }
    setTask('');
    setEdit(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (edit) {
      console.log('hello');
    }
  };

  const deleteItem = (id) => {
    console.log(e.target.id);
    setPeople(people.filter((person) => person.id !== id));
  };

  const clear = () => {
    setPeople([]);
  };

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  return (
    <>
      <section className="section-center">
        <form className="grocery-form">
          <p className="alert"></p>
          <h3>grocery bud</h3>
          <div className="form-control">
            <label htmlFor="firstname"></label>
            <input
              type="text"
              name="task"
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              ajouter
            </button>
          </div>
        </form>
        {people.map((person) => {
          const { id, task } = person;
          return (
            <div className="grocery-list" key={id}>
              <div className="grocery-item">
                <p className="title">{task}</p>
                <div className="btn-container">
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={handleEdit}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={deleteItem}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <button type="button" className="clear-btn" onClick={clear}>
          Tout suprr
        </button>
      </section>
    </>
  );
};

export default Inputs;
