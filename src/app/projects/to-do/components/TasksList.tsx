// Module styles.
import styles from "./TasksList.module.css";

interface Task {
  name: string;
  isCompleted: boolean;
}

interface TasksListProps {
  tasks: Task[];
  onToggleTaskCompletion: (index: number) => void;
  onDeleteTask: (index: number) => void;
}

export const TasksList: React.FC<TasksListProps> = ({
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
}) => {
  return (
    <section className={styles.listSection}>
      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.task}>
            <div className={styles.taskDiv}>
              <input
                className={styles.toggle}
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => onToggleTaskCompletion(index)}
              />
              <label
                className={
                  task.isCompleted ? styles.completed : styles.labelInput
                }
              >
                {task.name}
              </label>
            </div>
            <button
              className={styles.destroy}
              onClick={() => onDeleteTask(index)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
