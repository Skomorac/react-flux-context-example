import { useContext } from "react";
import TaskContext from "./TaskContext";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import "./index.css";

export default function App() {
  const { tasks } = useContext(TaskContext);

  return (
    <main>
      <h2>Todo List</h2>
      <ul className="list-group w-50">
        <AddItem />
        {tasks.map((task, index) => (
          <ListItem key={index} task={task} index={index} />
        ))}
      </ul>
    </main>
  );
}
