// this is a (default) server component
// it can call prisma directly (without the client component request/response cycle)
// the component fetches the data before it is sent to the client

import { prisma } from "../libs/prismadb";
import "./databasetest.css";
import timestampFormatter from "./timestampformatter";

export default async function DatabaseTest() {
  // an async Server Action function to get all of the Todos from the database
  async function getAllTodos() {
    "use server";
    const allTodos = await prisma.todo.findMany();
    // note: this console.log shows in the server console (not the client)
    console.log("getAllTodos allTodos:", allTodos);
    return allTodos;
  }

  const allTodos = await getAllTodos();

  return (
    <div className="databasetest-page">
      <h1 className="databasetest-title">Database Test</h1>
      <ul className="todo-list">
        {allTodos.length > 0 &&
          allTodos.map((todo) => {
            return (
              <li key={todo.id} className="todo-list-item">
                <span className="todo-list-item-key">id:</span>
                <span className="todo-list-item-id">{todo.id}</span>
                <span className="todo-list-item-key">title:</span>
                <span>{todo.title}</span>
                <span className="todo-list-item-key">content:</span>
                <span>{todo.content}</span>
                <span className="todo-list-item-key">priority:</span>
                <span>
                  {todo.priority}{" "}
                  {todo.priority === "low"
                    ? "🟡"
                    : todo.priority === "medium"
                    ? "🟠"
                    : "🔴"}
                </span>
                <span className="todo-list-item-key">complete:</span>
                <span>
                  {todo.complete.toString()} {todo.complete ? "✅" : "❌"}
                </span>
                <span className="todo-list-item-key">createdAt:</span>
                <span>{timestampFormatter(todo.createdAt)}</span>
                <span className="todo-list-item-key">updatedAt:</span>
                <span>{timestampFormatter(todo.createdAt)}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
