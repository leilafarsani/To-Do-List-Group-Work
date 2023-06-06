// this is a (default) server component
// it can call prisma directly (without the client component request/response cycle)
// the component fetches the data before it is sent to the client

import { prisma } from "../libs/prismadb";
import "./databasetest.css";
import ToDoCard from "./ToDoCard";

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
          allTodos.map((todo) => <ToDoCard key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
}
