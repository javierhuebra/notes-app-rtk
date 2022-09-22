import { useSelector } from "react-redux"

const TaskList = () =>{
    const state = useSelector((state) => state);
    const tasks = useSelector((state) => state.tasks);//el hook useSelector es propio de react-redux es para consultar valores
    console.log("task in TaskList", state);
    console.log("task in TaskList", tasks);
    return(
        <div>
            <h2>TaskList</h2>
        </div>
        
    )
}

export default TaskList;