import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
function TodoCounter(){
    const {completedTodo,
        totalTodo}=React.useContext(TodoContext);
    return (
        <h1 className="TodoCounter">
            Has completado <span>{completedTodo}</span> de <span>{totalTodo}</span> TODOS
        </h1>
    );
}

export {TodoCounter};