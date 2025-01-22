import React, { useState } from 'react'
import './TodoApp.css';

const TodoAppByMe = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');


    const handleAddTodo = () => {
        if (task.trim() !== '') {
            setTodos([...todos, task]);
            setTask('');
        }
    };

    const handleRemoveTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }
    return (
        <div className='App'>
            <header className="App-header">
                <h1>TODO APP</h1>
                <div className='todo-input'>
                    <input
                        type='text'
                        placeholder="Add a new Task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button onClick={handleAddTodo}>Add</button>
                </div>
                <ul className='todo-list'>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                        </li>

                    )
                    )

                    }
                </ul>
            </header>
            <h1>todo App By Me</h1>
        </div>
    )
}

export default TodoAppByMe
