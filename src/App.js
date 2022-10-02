import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import './App.css';

function App() {
  const tasks = useSelector((state)=> state.tasks);
  console.log("tasks",tasks);
  return (
    <div className="App">
      <h1>New App In Progress</h1>
      <TaskList/>
      <TaskForm/>
      <Task/>
    </div>
  );
}

export default App;
