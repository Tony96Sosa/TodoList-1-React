import React from 'react';
import './Todo.css';

const Todo = ({ todo, taskDelete, taskCompleted, setTaskEdit }) => {
    const { id, title, description, completed } = todo;
    return(
        <div className='card mt-2'>
            <div className='card-body'>
                <h3 className='card-title '>
                    { title }
                    <button 
                        onClick={ () => taskCompleted(id) }
                        className={`btn btn-sm ${completed ? 'btn-outline-success' : 'btn-success' } ml-2`} >
                        {
                            completed ? 'Finalizado' : 'Terminar'
                        }
                    </button>
                </h3>
                <p className='card-text'>
                    { description }
                </p>
                <hr/>
                <div className='d-flex justify-content-start'>
                    <button 
                        onClick={ () => setTaskEdit(todo) }
                        className='btn btn-sm btn-outline-primary mr-2'>
                        Editar
                    </button>
                    <button 
                        onClick={ () => taskDelete(id) }
                        className='btn btn-sm btn-outline-danger'>
                        Eliminar
                    </button>
                </div>
            </div>  
        </div>
    )
}

export default Todo;