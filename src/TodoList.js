import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, deleteTodo }) => {
  return (
    <div>
      {todos.length ? (
        todos.map((i) => (
          <TodoItem
            key={i.id}
            item={i}
            deleteTodo={deleteTodo}
            onToggle={onToggle}
          />
        ))
      ) : (
        <div>No Data Found.! </div>
      )}
    </div>
  );
};

export default TodoList;
