import TaskCard from "./TaskCard";
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

/* eslint-disable react/prop-types */
function TaskList() {

    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1>no hay tareas aun</h1>
    }

    return (
        <div>
            {tasks.map((task) => (
                // task={task} = en este caso hay que pasarselo al TaskCard porque es un loop de Map.
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    );
}

export default TaskList