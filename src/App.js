import "./styles.css";
import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTodo = (value) => {
    const newTodo = {
      id: crypto.randomUUID(),
      completed: false,
      name: value,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const onToggle = (item) => {
    setTodos((prev) =>
      prev.map((i) =>
        i.id === item.id ? { ...i, completed: !i.completed } : i
      )
    );
  };

  const filteredValues = () => {
    if (filter === "completed") return todos.filter((i) => i.completed);
    else if (filter === "Active") return todos.filter((i) => !i.completed);
    else return todos;
  };
  console.log("filtereed", filteredValues());

  const deleteTodo = (id) => {
    const filterDelete = todos.filter((i) => i.id !== id);
    setTodos(filterDelete);
  };
  return (
    <div className="App">
      <h1>TODO</h1>
      <TodoFilter setFilter={setFilter} />
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={filteredValues()}
        onToggle={onToggle}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
