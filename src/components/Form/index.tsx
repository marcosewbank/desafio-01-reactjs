import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ITask } from "../Tasks/index";
import styles from "./Form.module.css";
import plus from "../../assets/plus.svg";

type Props = {
  handleNewTask: (task: ITask) => void;
};

export const Form = ({ handleNewTask }: Props) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const task = {
      taskName,
      completed: false,
      id: uuidv4(),
    };

    handleNewTask(task);
    setTaskName("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <button type="submit">
        Criar <img src={plus} />
      </button>
    </form>
  );
};
