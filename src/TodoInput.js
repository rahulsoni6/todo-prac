import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} />
      <button type="button" onClick={() => addTodo(value)}>
        Add{" "}
      </button>
    </div>
  );
};

export default TodoInput;
