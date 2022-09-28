import { useSelector } from 'react-redux';

const TaskForm = () =>{
    const state = useSelector((state) => state);
    const products = useSelector((state) => state.products);
    console.log("state in TaskForm", state);
    console.log("products in TaskForm", products);
    return(
        <div>
            <h3>TaskForm</h3>
        </div> 
    )
}

export default TaskForm;