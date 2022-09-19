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
  const [id, setId] = useState(null);
  const [alert, setAlert] = useState({ show: false, mesg: '', action: '' });
  // console.log(people);

  const showAlert = (show, mesg, action) => {
    setAlert({ show, mesg, action });
    setTimeout(() => setAlert({ show: false, mesg: '', action: '' }), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), task: task };
    setPeople([...people, newItem]);
    setTask('');
    showAlert(true, 'bien ajouter', 'success');
  };

  const handleEdit = (id) => {
    setEdit(true);
    const item = people.find((person) => person.id === id);
    console.log(item.task);
    setTask(item.task);
    setId(id);
  };

  const newEdit = (e, id) => {
    e.preventDefault();
    setPeople(
      people.map((person) => {
        if (person.id === id) {
          return { ...people, task: task };
        }
        return person;
      })
    );
    showAlert(true, 'bien editer', 'success');
    setEdit(false);
    setTask('');
    setId(null);
  };

  const deleteItem = (id) => {
    const newPeople = [...people];
    const peopleCopy = newPeople.filter((person) => {
      if (person.id !== id) {
        return person;
      }
    });
    setPeople(peopleCopy);
    showAlert(true, 'bien suppr', 'danger');
    setTask('');
    setEdit(false);
  };

  const clear = () => {
    setPeople([]);
    showAlert(true, 'Tout est suppr', 'danger');
  };

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  return (
    <>
      <section className="section-center">
        <form className="grocery-form">
          {alert.show ? (
            <p className={`alert alert-${alert.action}`}>{alert.mesg}</p>
          ) : (
            ''
          )}

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
            <button
              type="submit"
              className="submit-btn"
              onClick={
                edit
                  ? (e) => {
                      newEdit(e, id);
                    }
                  : handleSubmit
              }
            >
              {edit ? 'editer' : 'ajouter'}
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
                    onClick={() => {
                      handleEdit(id);
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => deleteItem(id)}
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
