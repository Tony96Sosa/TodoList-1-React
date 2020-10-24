import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = ({ tasks, taskDelete, taskCompleted, setTaskEdit }) => {
    return(
        <div>
            <h1 className='text-center display-4'>Tareas</h1>
            {
                tasks.length ===  0
                ? (
                    <div className='alert alert-primary'>
                        No hay Tareas, Agregue una nueva Tarea.
                    </div>
                )
                : (
                    tasks.map( (tarea) => (
                        <Todo 
                            key={ tarea.id } 
                            todo={ tarea }
                            taskDelete={ taskDelete } 
                            taskCompleted={ taskCompleted }
                            setTaskEdit={ setTaskEdit }
                        />
                    ))
                )
            }
        </div>
    )
}

export default TodoList;