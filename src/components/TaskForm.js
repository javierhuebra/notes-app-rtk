import { useState } from "react";
import { addTask } from "../features/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";


const TaskForm = () =>{
    const[task, setTask] = useState({
        title: "",
        description: ""
    });
    // console.log("task",task); 

    const dispatch = useDispatch();

    const handeSubmit = (e) =>{
        e.preventDefault(); //para que no se me recargue la pagina
        //console.log("submitting");
        dispatch(
            addTask({
                ...task,
                id: uuidv4(),
            })
        )
    }

    //buena forma de setear la info mandada en un formulario
    const handleChange = (e) =>{
        //console.log(e.target.name,e.target.value);
        setTask({
            ...task,
            //detecto e.target.name y lo cargo con e.target.value
            [e.target.name]: e.target.value,
        })
    }
    
    
    return(
        <form onSubmit={handeSubmit}>
            <label>Title Task</label>
            <input
                type="text"
                name="title"
                placeholde="Write a title"
                onChange={handleChange}
                value={task.title}
            />
            <label>Description Task</label>
            <textarea
                name="description"
                placeholder="Write a description for you task"
                onChange={handleChange}
                value={task.description}
            />
            <button type="submit">Save</button>
        </form> 
    )
}

export default TaskForm;