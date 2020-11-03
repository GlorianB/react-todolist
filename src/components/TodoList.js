import React, { useState } from 'react';

function TodoList() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleOnChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (input !== '')
      setTasks([...tasks, input]);
    setInput('');
  };

  const deleteTask = (event, task) => {
    const array = tasks.filter(elem => elem !== task);
    setTasks(array);
  };

  return (
    <div>
      <h1 align="center">Ma Todo list</h1>
      <form className="form-row align-items-center">
          <input
              value={ input }
              type="text"
              placeholder="Renseigner un item"
              className="form-control mb-2"
              onChange={ handleOnChange }
          />
          <button onClick={ addTask } className="btn btn-primary">
              Ajouter
          </button>
      </form>
      <div className="list-group">
        { tasks.map((task) => {
          return (
            <div className="list-group-item" key={task}>
              {task} | <button onClick={ (event) => deleteTask(event, task) } type="button" className="btn btn-danger">Supprimer</button>
            </div>
          );
        }) }
      </div>
  </div>
  );
}

export default TodoList
