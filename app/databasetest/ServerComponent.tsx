import { prisma } from "../libs/prisma";
import ToDoCard from "./ToDoCard";
import styles from "./ToDoList.module.css";

// an async Server Component
export default async function ServerComponent() {
  // an async Server Action to get all of the Todos from the database
  async function getAllTodos() {
    "use server";
    const allTodos: Todo[] = await prisma.todo.findMany();
    // note: this console.log shows in the server console (not the client console)
    console.log("getAllTodos allTodos:", allTodos);
    return allTodos;
  }
  // invoke the above function and store the data in allTodos
  const allTodos = await getAllTodos();

  return (
    <ul className={styles.toDoList}>
      {allTodos.map((todo) => (
        <ToDoCard key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
