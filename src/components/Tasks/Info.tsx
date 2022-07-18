import { ITask } from ".";

import styles from "./Wrapper.module.css";

type Props = {
  tasks: ITask[];
};

export const Info = ({ tasks }: Props) => {
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <article className={styles.infoContainer}>
      <strong className={styles.infoTitle}>
        Tarefas criadas{" "}
        <span className={styles.infoCounter}>{tasks.length}</span>
      </strong>

      <strong className={styles.completedInfoTitle}>
        Concluidas{" "}
        <span className={styles.completedInfoCounter}>
          {completedTasks} de {tasks.length}
        </span>
      </strong>
    </article>
  );
};
