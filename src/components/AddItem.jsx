import { useContext } from "react";
import TaskContext from "../TaskContext";

export default function AddItem() {
  const { taskActions } = useContext(TaskContext);

  function handleAddTask(e) {
    e.preventDefault();
    let textbox = e.target.elements.task;
    let taskValue = textbox.value.trim(); // Trim whitespace from input value
    if (taskValue !== "") {
      // Check if input value is not empty
      taskActions({ type: "add", payload: taskValue });
      textbox.value = "";
    } else {
      alert("Task can't be empty");
    }
  }

  return (
    <li>
      <form onSubmit={handleAddTask}>
        <input name="task" type="text" placeholder="Type to add task" />
        <button type="submit">+</button>
      </form>
    </li>
  );
}
