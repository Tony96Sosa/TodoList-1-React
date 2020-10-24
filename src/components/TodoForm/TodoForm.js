import React, { useState, useEffect } from 'react';
import './TodoForm.css';

const initialForm = {
    title: '',
    description: '',
}
const TodoForm = ({ taskAdd, taskEdit, taskUpdate, setTaskEdit }) => {
    const [ form,  setForm ] = useState(initialForm);
    const { title, description } = form;
    const [ error, setError ] = useState(null);
    const [ success, setSuccess ] = useState(null);

    useEffect( () => {
        if(taskEdit){
            setForm(taskEdit);
        }else{
            setForm(initialForm);
        }
    },[taskEdit])
 
    const handleChange =  (e) => {
        const formUpdate = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(formUpdate);
    }

    const handleSubmit = (e)  => {
        e.preventDefault();
        if(title.trim() === ''){
            setError('Debe ingresar un Titulo a su Tarea.');
            return;
        }
        if(description.trim() === ''){
            setError('Debe ingresar un Descripción a su Tarea.');
            return;
        }
        if(taskEdit){
            taskUpdate(form);
            setSuccess('Su Tarea se Actualizo Exitosamente.');
        }else{
            taskAdd(form);
            setForm(initialForm);
            setSuccess('Su Tarea se Agrego Exitosamente.');
        }
        setError(null);
        setTimeout( () => {
            setSuccess(null);
        }, 2000);
    }

    return(
        <div>
            <h2 className='text-center display-5' >{ taskEdit ? 'Editar Tarea' : 'Nueva Tarea'}</h2>
            {
                taskEdit && (
                    <button 
                        onClick={() => setTaskEdit(null)}
                        className='btn btn-sm btn-warning mb-2'>
                        Cancelar Edición
                    </button>
                )
            }
            {
                error && (
                    <div className='alert alert-danger mb-2'>{ error }</div>
                )
            }
            {
                success && (
                    <div className='alert alert-success mb-2'>{ success }</div>
                )
            }
            <form onSubmit={ handleSubmit } >
                <input 
                    type='text'
                    placeholder='Titulo'
                    className='form-control'
                    value={ title }
                    name='title'
                    onChange={handleChange}
                />
                <textarea 
                    placeholder='Descripción'
                    className='form-control mt-2'
                    value={ description }
                    name='description'
                    onChange={handleChange}
                />
                <button
                    className='btn btn-primary btn-block mt-2'
                >
                    { taskEdit ? 'Actualizar Tarea' : 'Agregar Tarea'}
                </button>
            </form>
        </div>
    )
}

export default TodoForm;