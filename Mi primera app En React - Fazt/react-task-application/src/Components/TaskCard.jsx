import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
/* eslint-disable react/prop-types */
function TaskCard({task}) {
    const {deleteTask} = useContext(TaskContext)
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
        </div>
    )
}

export default TaskCard