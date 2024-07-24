"use client";
// Libraries.
import { ChangeEvent, KeyboardEvent, useState } from "react";
// Components.
import { TasksList } from "./components/TasksList";
// Module style.
import styles from "./page.module.css";

interface Task {
  name: string;
  isCompleted: boolean;
}

const ToDoPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask.trim(), isCompleted: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index
        ? {
            ...task,
            isCompleted: !task.isCompleted,
          }
        : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className={styles.toDoHeader}>
        <h1 className={styles.title}>Tasks saved</h1>
        <h2 className={styles.subtitle}>Try this To Do to organize you</h2>
        <input
          className={styles.input}
          placeholder="Add the new task"
          type="text"
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <TasksList
        tasks={tasks}
        onToggleTaskCompletion={toggleTaskCompletion}
        onDeleteTask={deleteTask}
      />
    </>
  );
};

export default ToDoPage;
