import Header from "../header/Header";
import AddTodo from "../addTodo/AddTodo";
import Todo from "../todo/Todo";
import { useState, useEffect } from "react";

import { db } from "./Firebase.js";

import { ref, set, onValue, remove, update } from "firebase/database";

const App = () => {
  const [todo, setTodo] = useState([
    // {
    //   id: 1,
    //   title: "первый",
    //   description: "some information",
    //   status: true,
    //   date: "2022-11-21",
    // },
    // {
    //   id: 2,
    //   title: "второй",
    //   description: "some information",
    //   status: true,
    //   date: "2022-11-15",
    // },
    // {
    //   id: 3,
    //   title: "третий",
    //   description: "some information",
    //   status: true,
    //   date: "2022-11-28",
    // },
    // {
    //   id: 4,
    //   title: "четвертый",
    //   description: "some information",
    //   status: true,
    //   date: "2022-11-22",
    // },
  ]);

  function writeTaskData({ id, title, description, status, date }) {
    set(ref(db, "tasks/" + id), {
      id,
      title,
      description,
      status,
      date,
    });
  }
  function updateTaskData({ id, title, description, status, date }) {
    update(ref(db, "tasks/" + id), {
      id,
      title,
      description,
      status,
      date,
    });
  }
  function deleteTaskData(id) {
    remove(ref(db, "tasks/" + id));
  }
  useEffect(() => {
    const tasks = ref(db, "tasks");
    onValue(tasks, (snapshot) => {
      const data = snapshot.val();
      setTodo(Object.values(data));
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} createTask={writeTaskData} />
      <Todo
        todo={todo}
        setTodo={setTodo}
        deleteTask={deleteTaskData}
        updateTask={updateTaskData}
      />
    </div>
  );
};

export default App;
