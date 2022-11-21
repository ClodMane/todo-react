import React from "react";
import { useState } from "react";
import "./addtodo.css";

const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const [valueDate, setDate] = useState("");

  function saveNewTodo() {
    setTodo([
      ...todo,
      {
        id: "id" + Math.random().toString(36).substring(2, 9),
        title: value,
        description: valueDescription,
        status: true,
        date: valueDate,
      },
    ]);
    console.log(valueDescription);
    setValue("");
    setValueDescription("");
    setDate("");
  }

  return (
    <div className="input-wrapper">
      <input
        className="input"
        placeholder="Введите задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <textarea
        className="input input-description"
        placeholder="Введите описание"
        value={valueDescription}
        onChange={(e) => setValueDescription(e.target.value)}
      />
      <input
        className="input"
        placeholder="Введите срок выполнения"
        type="date"
        value={valueDate}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="button button-create" onClick={saveNewTodo}>
        CОЗДАТЬ ЗАДАЧУ
      </button>
    </div>
  );
};

export default AddTodo;
