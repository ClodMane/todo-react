import React from "react";
import { useState } from "react";
import "./todo.css";

const Todo = ({ todo, setTodo }) => {
  const [editId, setEditId] = useState(null);
  const [editType, setEditType] = useState("");

  const [value, setValue] = useState("");

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  function editTitleTodo(id, title) {
    setEditId(id);
    setEditType("title");
    setValue(title);
  }

  function editDescriptionTodo(id, description) {
    setEditId(id);
    setEditType("description");
    setValue(description);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item[editType] = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEditId(null);
    setEditType("");
  }

  return (
    <div className="items-wrapper">
      {todo.map((item) => (
        <div className="item" key={item.id}>
          {editId === item.id ? (
            <div className="input float-input">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          ) : (
            <div className="content">
              <div>{item.title}</div>
              <div>{item.description}</div>
              <div>{item.date}</div>
            </div>
          )}
          {editId === item.id ? (
            <div className="float-button-wrapper">
              <button onClick={() => saveTodo(item.id)}>
                Сохранить изменения
              </button>
            </div>
          ) : (
            <div className="card-buttons-wrapper">
              <button onClick={() => deleteTodo(item.id)}>Удалить</button>
              <button onClick={() => editTitleTodo(item.id, item.title)}>
                Редактировать Заголовок
              </button>
              <button
                onClick={() => editDescriptionTodo(item.id, item.description)}
              >
                Редактировать Описание
              </button>
              <button onClick={() => statusTodo(item.id)}>
                Закрыть / Открыть
              </button>
              <input placeholder="load files" type="file" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todo;
