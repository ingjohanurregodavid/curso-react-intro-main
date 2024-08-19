import React from "react";
import {TodoContext} from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const {
        setOpenModal,
        addTodo
        
    }=React.useContext(TodoContext);
    
    const [newTodoValue,setNewTodoValue]=React.useState('');

    const onSubmit=(event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };

   const onCancel=(event)=>{
        event.preventDefault();
        setOpenModal(false)
    };
    const onChange=(event)=>{
        setNewTodoValue(event.target.value)
    };
   return(  
   <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar Cebolla"/>
        <div className="TodoForm-buttonContainer">
            <button className="TodoForm-button TodoForm-button--cancel"
            onClick={oncancel}>
                Cancel
            </button>

            <button className="TodoForm-button TodoForm-button--add">
                Save
            </button>
        </div>
    </form>
   )}

export  {TodoForm}