import { ITask } from ".";

import styles from "./Task.module.css";

import Trash from "../../assets/trash.svg";
import Check from "../../assets/check.svg";
import Checked from "../../assets/checked.svg";

type Props = {
  task: ITask;
  handleEditTask: (id: string, type: string) => void;
};

export const Task = ({
  task: { taskName, completed, id },
  handleEditTask,
}: Props) => {
  return (
    <article className={styles.task}>
      <button onClick={() => handleEditTask(id, "status")}>
        <img src={completed ? Checked : Check} alt="status check" />
      </button>
      <p>{taskName}</p>
      <button onClick={() => handleEditTask(id, "delete")}>
        <img src={Trash} alt="delete button" />
      </button>
    </article>
  );
};
