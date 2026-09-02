const TodoItem = ({ item, onToggle, deleteTodo }) => {
  return (
    <div
      key={item.id}
      style={{
        display: "flex",
        border: "1px solid black",
        padding: "8px",
        margin: "8px",
        justifyContent: "center",
      }}
    >
      <div>{item.name}</div>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          onToggle(item);
        }}
      />
      <button type="button" onClick={() => deleteTodo(item.id)}>
        Delete{" "}
      </button>
    </div>
  );
};

export default TodoItem;
