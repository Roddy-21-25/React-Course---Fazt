/* eslint-disable react/prop-types */
import { useState, useContext} from "react"
import { TaskContext } from "../context/TaskContext"

function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescripcion] = useState("")

    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        })
        setTitle('');
        setDescripcion('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe tu tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title} autoFocus/>
            <textarea placeholder="Escribe la descripcion de la tarea..."
                onChange={(e) => setDescripcion(e.target.value)}
                value={description}></textarea>
            <button>Guardar</button>
        </form>
    )
}

export default TaskForm