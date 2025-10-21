import ProgressTracker from "./Components/ProgressTracker";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";


export default function App() {
  return (
    <div>
      <h1>Task Undo</h1>
      <p>Our friendly TaskManager</p> 
      <TaskForm />
      <TaskList />
      <ProgressTracker />
            <button>Clear all Tasks</button>
    </div>  
  )
}


