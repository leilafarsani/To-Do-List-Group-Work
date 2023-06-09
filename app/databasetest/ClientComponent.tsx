"use client";
// define this component as a Client Component
import { useState, useEffect } from "react";
import ToDoCard from "./ToDoCard";
import styles from "./ToDoList.module.css";

export default function ClientComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [allTodos, setTodos] = useState<Array<any> | null>(null);

  useEffect(() => {
    async function getAllTodos() {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch("/api/todos");
        const data = await response.json();
        // note: this console.log shows in the client console (not the server console)
        console.log("getAllTodos data:", data);
        setTodos(data);
      } catch (error) {
        // console.error(error);
        // setIsError(error.toString());
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    // invoke the above function and store the data in allTodos
    getAllTodos();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (isError) {
    return <div className={styles.error}>Error!</div>;
  }
  return (
    <>
      <ul className={styles.toDoList}>
        {allTodos &&
          allTodos.map((todo) => <ToDoCard key={todo.id} todo={todo} />)}
      </ul>
    </>
  );
}
