import timestampFormatter from "./timestampformatter";
import "./ToDoCard.css";

export default function ToDoCard({ key, todo }) {
  return (
    <li key={key} className="todo-card">
      <span className="todo-card-key">id:</span>
      <span className="todo-card-id">{todo.id}</span>
      <span className="todo-card-key">title:</span>
      <span className="todo-card-title">{todo.title}</span>
      <span className="todo-card-key">content:</span>
      <span className="todo-card-content">{todo.content}</span>
      <span className="todo-card-key">priority:</span>
      <span>
        {todo.priority}{" "}
        {todo.priority === "low"
          ? "🟡"
          : todo.priority === "medium"
          ? "🟠"
          : "🔴"}
      </span>
      <span className="todo-card-key">complete:</span>
      <span>
        {todo.complete.toString()} {todo.complete ? "✅" : "❌"}
      </span>
      <span className="todo-card-key">createdAt:</span>
      <span className="todo-card-created-at">
        {timestampFormatter(todo.createdAt)}
      </span>
      <span className="todo-card-key">updatedAt:</span>
      <span className="todo-card-updated-at">
        {timestampFormatter(todo.createdAt)}
      </span>
    </li>
  );
}
