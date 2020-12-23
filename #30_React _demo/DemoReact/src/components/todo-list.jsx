import React from "react";
import { v4 as uuid } from "uuid";
import { FaPlus, FaEdit, FaSave, FaTrash } from "react-icons/fa";
import { Icon } from "./icon";

const Todo = ({ id, value, onSave, onRemove }) => {
  const [state, setState] = React.useState({ edited: false, text: value });

  const { edited, text } = state;

  const saveTodo = () => {
    onSave(id, text);
    setState((state) => ({ ...state, edited: false }));
  };

  const editTodo = () => {
    setState((state) => ({ ...state, edited: true }));
  };

  const removeTodo = () => {
    onRemove(id);
  };

  const handleInput = ({ target: { value } }) => {
    setState((state) => ({ ...state, text: value }));
  };

  return (
    <li className="list-item">
      {edited ? (
        <input
          className="list-input"
          type="text"
          value={text}
          onChange={handleInput}
        />
      ) : (
        <span onClick={editTodo}>{text}</span>
      )}
      <div className="list-icons">
        <Icon onClick={edited ? saveTodo : editTodo}>
          {edited ? <FaSave /> : <FaEdit />}
        </Icon>
        <Icon onClick={removeTodo}>
          <FaTrash />
        </Icon>
      </div>
    </li>
  );
};

export const TodoList = ({ title }) => {
  const [list, setList] = React.useState([]);

  const addTodo = () => {
    setList((todos) => [{ value: "Click to edit", id: uuid() }, ...todos]);
  };

  const saveTodo = (saveId, value) => {
    setList((todos) =>
      todos.map((todo) => {
        const { id } = todo;

        return id === saveId ? { id, value } : todo;
      })
    );
  };

  const removeTodo = (removeId) => {
    setList((todos) => todos.filter(({ id }) => id !== removeId));
  };

  return (
    <article>
      <header className="list-header">
        <h2 className="list-title">{title}</h2>
        <Icon className="list-add" onClick={addTodo}>
          <FaPlus />
        </Icon>
      </header>
      <section className="list-body">
        {list.length ? (
          <ul className="list">
            {list.map((item) => (
              <Todo
                key={item.id}
                onSave={saveTodo}
                onRemove={removeTodo}
                {...item}
              />
            ))}
          </ul>
        ) : (
          <p className="list-placeholder">You haven't add any items...</p>
        )}
      </section>
    </article>
  );
};
