import TaskCard from "./TaskCard"
import { useContext,  } from 'react'
import { TaskContext } from '../contex/TaskContext'

function TaskList() {

    const {tasks} = useContext(TaskContext)
    
    if (tasks.length === 0){
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas para mostrar</h1>
    }
    
    return(<div className="grid grid-cols-4 gap-2">
        {/*Note que la función flecha q recibe a task usa () y no {}*/}
        {tasks.map((task) => (
            <TaskCard key={ task.id } task={ task } />
        ))}          
        </div>) 
} 


export default TaskList 