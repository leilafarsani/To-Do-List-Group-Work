"use client"
import React, { useState } from "react";
import styles from "./taskPage.module.css";

interface Task {
  title: string;
  description: string;
}

const TaskPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskData, setTaskData] = useState<Task>({
    title: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleAddTask = () => {
    if (taskData.title.trim() === "") {
      setError("Please enter a task title");
      return;
    }

    const newTask: Task = {
      title: taskData.title,
      description: taskData.description,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskData({ title: "", description: "" });
    setError("");
  };

  return (
    <>
      <h1 className={styles.title}>To-do List</h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Task Title"
            value={taskData.title}
            onChange={(e) =>
              setTaskData({ ...taskData, title: e.target.value })
            }
          />
          <textarea
            className={styles.input}
            placeholder="Task Description"
            value={taskData.description}
            onChange={(e) =>
              setTaskData({ ...taskData, description: e.target.value })
            }
          ></textarea>
          {error && <p className={styles.error}>{error}</p>}
        </div>
        <button className={styles.button} onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.taskListItem}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskPage;
