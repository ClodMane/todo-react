import React from "react";
import { useState } from "react";
import "./todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // <-- import styles to be used
import {
  faSave,
  faTrash,
  faEdit,
  faLock,
  faLockOpen,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs"; // ES 2015

const Todo = ({ todo, setTodo, deleteTask, updateTask }) => {
  const [editId, setEditId] = useState(null);
  const [editType, setEditType] = useState("");

  const [value, setValue] = useState("");

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
    deleteTask(id);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    let newTask = newTodo.find((i) => i.id === id);
    updateTask(newTask);
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

  function editDateTodo(id, date) {
    setEditId(id);
    setEditType("date");
    setValue(date);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item[editType] = value;
      }
      return item;
    });

    let newTask = newTodo.find((i) => i.id === id);
    updateTask(newTask);
    setTodo(newTodo);
    setEditId(null);
    setEditType("");
  }

  function compareDate(item) {
    let deadLineDate = dayjs(item.date);
    let now = dayjs().format("YYYY.MM.DD");
    if (deadLineDate.isBefore(now)) {
      return true;
    }
    return false;
  }

  return (
    <div className="items-wrapper">
      {todo.map((item) => (
        <div key={item.id}>
          <div
            className={
              !item.status || compareDate(item) ? "item-close" : "item"
            }
          >
            {editId === item.id ? (
              <div className="float-wrapper">
                <div className=" float-input">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
                <div className="float-button-wrapper">
                  <button className="button" onClick={() => saveTodo(item.id)}>
                    <FontAwesomeIcon icon={faSave} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="content">
                <div className="head-card-wrapper">
                  <div
                    className={
                      !item.status || compareDate(item)
                        ? "head-card-close"
                        : "head-card"
                    }
                  >
                    {item.title}
                  </div>
                  <button
                    className="button"
                    onClick={() => editTitleTodo(item.id, item.title)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </div>
                <div className="body-card-wrapper">
                  <div
                    className={
                      !item.status || compareDate(item)
                        ? "body-card-close"
                        : "body-card"
                    }
                  >
                    {item.description}
                  </div>
                  <button
                    className="button"
                    onClick={() =>
                      editDescriptionTodo(item.id, item.description)
                    }
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </div>
                <div className="date-wrapper">
                  <div
                    className={
                      !item.status || compareDate(item) ? "date-close" : "date"
                    }
                  >
                    Deadline: {item.date}
                  </div>
                  <button
                    className="button"
                    onClick={() => editDateTodo(item.id, item.date)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </div>
                <div className="card-buttons-wrapper">
                  <button
                    className="button"
                    onClick={() => deleteTodo(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    className="button"
                    onClick={() => statusTodo(item.id)}
                  >
                    {item.status && !compareDate(item) ? (
                      <FontAwesomeIcon icon={faLockOpen} />
                    ) : compareDate(item) ? (
                      <FontAwesomeIcon icon={faLock} />
                    ) : (
                      <FontAwesomeIcon icon={faLock} />
                    )}
                  </button>
                  <div className="file-upload">
                    <label>
                      <input id="file-input" type="file" name="file" />
                      <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </label>
                    <div id="file-name">Прикрепить файл</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
