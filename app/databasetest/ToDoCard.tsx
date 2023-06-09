import timestampFormatter from "./timestampformatter";
import styles from "./ToDoCard.module.css";

// the ToDoCardProps type alias specifies the props expected by the ToDoCard component
type ToDoCardProps = {
  todo: Todo;
};

// ToDoCardProps is the type annotation that specifies the expected type of the props object.
// It ensures that the props object passed to the ToDoCard component adheres to the structure defined by the ToDoCardProps type alias.
export default function ToDoCard({ todo }: ToDoCardProps) {
  return (
    <li className={styles.toDoCard}>
      <span className={styles.key}>id:</span>
      <span className={styles.id}>{todo.id}</span>
      <span className={styles.key}>title:</span>
      <span className={styles.title}>{todo.title}</span>
      <span className={styles.key}>content:</span>
      <span className={styles.content}>{todo.content}</span>
      <span className={styles.key}>priority:</span>
      <span>
        {todo.priority}{" "}
        {todo.priority === "low"
          ? "🟡"
          : todo.priority === "medium"
          ? "🟠"
          : "🔴"}
      </span>
      <span className={styles.key}>complete:</span>
      <span>
        {todo.complete.toString()} {todo.complete ? "✅" : "❌"}
      </span>
      <span className={styles.key}>createdAt:</span>
      <span className={styles.createdAt}>
        {timestampFormatter(todo.createdAt)}
      </span>
      <span className={styles.key}>updatedAt:</span>
      <span className={styles.updatedAt}>
        {timestampFormatter(todo.updatedAt)}
      </span>
    </li>
  );
}
