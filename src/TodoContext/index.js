import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext =React.createContext();

function TodoProvider({children}){
    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error}=useLocalStorage('TODOS_V1',[]);
    
      const [searchValue,setSearchValue]=React.
        useState('');
        const [openModal,setOpenModal]=React.
        useState(false);
      const completedTodo=todos.filter(todo=>!!todo.completed).length;
      const totalTodo=todos.length;
      const searchedTodos=todos.filter(
        (todo)=>{
          const todoText=todo.text.toLowerCase();
          const searchTodo=searchValue.toLowerCase();
           return todoText.includes(searchTodo);
        });
      
        const completeTodo=(text)=>{
          const newTodos=[...todos];
          const todoIndex=  newTodos.findIndex(
            (todo)=>todo.text===text
          );
          newTodos[todoIndex].completed=true;
          saveTodos(newTodos);
        };
        const deleteTodo=(text)=>{
          const newTodos=[...todos];
          const todoIndex=  newTodos.findIndex(
            (todo)=>todo.text===text
          );
          newTodos.splice(todoIndex,1);
          saveTodos(newTodos);
        };

        const addTodo=(text)=>{
          const newTodos=[...todos];
          const todoIndex=  newTodos.push({
            key:text,
            text:text,
            completed:false
          });
          saveTodos(newTodos);
        };
    
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodo,
            totalTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider> 
    );
}

<TodoContext.Consumer>

</TodoContext.Consumer>

export {TodoContext,TodoProvider}