import { useState } from "react";
import { Form } from "../Form";
import { Info } from "./Info";
import { Task } from "./Task";

import styles from "./Wrapper.module.css";

export type ITask = { taskName: string; completed: boolean; id: string };

export const Wrapper = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleNewTask = (newTask: ITask) => {
    setTasks((oldState: ITask[]) => [...oldState, newTask]);
  };

  const handleEditTask = (id: string, type: string) => {
    if (type === "delete") {
      return setTasks((oldState: ITask[]) =>
        oldState.filter((item) => id !== item.id)
      );
    }

    const selectedTask = tasks.find((item) => item.id === id);

    if (selectedTask) {
      return setTasks((oldState: ITask[]) => {
        const test = oldState.filter((item) => id !== item.id);

        let editedTask = {
          ...selectedTask,
          completed: !selectedTask.completed,
        };

        return [...test, editedTask];
      });
    }
  };

  return (
    <main className={styles.main}>
      <Form handleNewTask={handleNewTask} />
      <Info tasks={tasks} />
      <section>
        {tasks
          .sort((a, b) => Number(a.completed) - Number(b.completed))
          .map((task: ITask) => (
            <Task key={task.id} task={task} handleEditTask={handleEditTask} />
          ))}
      </section>
    </main>
  );
};
