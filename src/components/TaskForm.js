import { useSelector } from 'react-redux';

const TaskForm = () =>{
    const state = useSelector((state) => state);
    const tasks = useSelector((state) => state.tasks);
    console.log("task in TaskForm", state);
    console.log("task in TaskForm", tasks);
    return(
        <div>
            <h3>TaskForm</h3>
        </div> 
    )
}

export default TaskForm;