import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import './App.css';

const initialTasks = [
  {
      id: 1,
      title: 'Todo #1',
      description: 'Descripción del Todo #1',
      completed: false,
  },
  {
      id: 2,
      title: 'Todo #2',
      description: 'Descripción del Todo #2',
      completed: true,
  }
];
const localTasks = JSON.parse(localStorage.getItem('Tasks'));
const App = ()  => {
  const [ tasks, setTasks ] = useState(localTasks || initialTasks);
  const [ taskEdit, setTaskEdit ] = useState(null);

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  },[tasks]);

  const taskDelete = (tareaId) => {
    if(taskEdit && tareaId === taskEdit.id){
      setTaskEdit(null);
    }
    const taskUpdate = tasks.filter( (tarea) => tarea.id !== tareaId)
    setTasks(taskUpdate);
  };

  const taskCompleted = (tareaId) => {
    const taskUpdate = tasks.map( (tarea) => (
      tarea.id === tareaId
      ? { ...tarea, completed: !tarea.completed }
      : tarea
    ))

    setTasks(taskUpdate);
  }

  const taskAdd =  (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      completed: false,
    }
    const taskUpdate = [
      newTask,
      ...tasks
    ]
    setTasks(taskUpdate);
  }

  const taskUpdate = (taskEdit) => {
    const taskChange = tasks.map((tarea) => (
      tarea.id === taskEdit.id 
      ? taskEdit 
      : tarea
    ))
    setTasks(taskChange);
  }

  return (
    <div className="box container mt-4">
      <div className="row">
      <div className="TodoForm-continer">
          <TodoForm 
            taskAdd={ taskAdd }
            taskEdit={ taskEdit }
            taskUpdate={ taskUpdate }
            setTaskEdit={ setTaskEdit }
          />
        </div>
        <div className="TodoList-continer">
          <TodoList 
            tasks={ tasks }
            taskDelete={ taskDelete }
            taskCompleted={ taskCompleted }  
            setTaskEdit={ setTaskEdit }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
