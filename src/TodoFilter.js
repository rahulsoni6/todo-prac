import { useState } from "react";

const TodoFilter = ({ setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div>
      <select onChange={handleChange}>
        <option>All</option>
        <option>Active</option>
        <option>completed</option>
      </select>
    </div>
  );
};

export default TodoFilter;
