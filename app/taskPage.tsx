"use client"
import React, { useState } from "react";
import Layout from "./layout";
import styles from "./taskPage.module.css";

interface Task {
  title: string;
  description: string;
}

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (title.trim() !== "") {
      const newTask: Task = { title, description };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Layout>
      <h1 className={styles.title}>To-do List</h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className={styles.input}
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
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
    </Layout>
  );
};

export default TaskPage;

