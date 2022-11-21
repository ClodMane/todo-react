import Header from "../header/Header";
import AddTodo from "../addTodo/AddTodo";
import Todo from "../todo/Todo";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "первый",
      description: "some information",
      status: true,
      date: "22.11.22",
    },
    {
      id: 2,
      title: "второй",
      description: "some information",
      status: true,
      date: "22.11.22",
    },
    {
      id: 3,
      title: "третий",
      description: "some information",
      status: false,
      date: "22.11.22",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <Todo todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
