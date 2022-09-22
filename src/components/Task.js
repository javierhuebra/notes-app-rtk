import { useSelector } from 'react-redux';

const Task = () =>{
    const state = useSelector((state) => state);
    const tasks = useSelector((state) => state.tasks);
    console.log("task in Task", state);
    console.log("task in Task", tasks);
    return(
        <div>
            <h3>Task</h3>
        </div>
    )
}
export default Task;