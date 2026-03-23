import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";
import { getTasks, createTask, updateTask, deleteTask} from "../api/task.api.js"

export default function TaskPage(){
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [busy, setBusy] = useState(false)
    const [error, setError] = useState("")

    async function load() {
        try{
            setError("")
            setLoading(true)
            const data = await getTasks()
            setTasks(data)
        }catch (e){
            setError(e?.message || "Error cargado tareas")
        }finally{
            setLoading(false)
        }
    
        }
    useEffect(() => {
        load()
    }, [])

    async function handleCreate(title) {
        try{
            setError("")
            setBusy(true)
            await createTask(title)
            await load()
        }catch (e){
            setError(e?.response?.data?.message || e?.message ||"Error creando tareas")
        }finally{
            setBusy(false)
        }
    
    }
    async function handleUpdate(id, title) {
        try{
            setBusy(true)
            await updateTask(id,{title})
            await load()
        }catch(e){
            setError("Error actualizando la tarea")
        }finally{
            setBusy(false)
        }
    }

    async function handleToggle(task) {
        try{
            setError("")
            setBusy(true)
            await updateTask(task._id, {done : !task.done})
            await load()
        }catch (e){
            setError(e?.message ||"Error actualizando tarea")
        }finally{
            setBusy(false)
        }
    }

    async function handleDelete(id) {
        try{
            setError("")
            setBusy(true)
            await deleteTask(id)
            await load()
        }catch (e){
            setError(e?.message ||"Error eleminando tarea")
        }finally{
            setBusy(false)
        }
    }

    return(
        <div style={{
            maxWidth: 520, margin:"40px auto", fontFamily:"system-ui"}}>
                <h1>Mini Mern - tareas</h1>
                <TaskForm onCreate={handleCreate} disabled={busy}/>
                {error ?(
                    <p style={{ marginTop:12, color:"crimson"}}>{error}</p>
                ): null}
                {loading ? (
                    <p>Cargando ...</p>
                ):(
                    <TaskList tasks={tasks} 
                    onToggle={handleToggle} 
                    onDelete={handleDelete}
                    onUpdate={handleUpdate} 
                    disabled={busy}/>
                )}
            </div>
    )
}

