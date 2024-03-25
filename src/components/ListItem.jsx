import { useContext } from "react";
import TaskContext from "../TaskContext";

export default function ListItem({ task, index }) {
  const { taskActions } = useContext(TaskContext);

  return (
    <li>
      {task}
      <button
        className="removeTask"
        onClick={() => taskActions({ type: "remove", index })}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}
