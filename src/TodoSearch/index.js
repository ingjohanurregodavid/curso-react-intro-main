import React, { useState } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";
function TodoSearch(){
    const {searchValue,
        setSearchValue}=React.useContext(TodoContext);
    return (
        <input 
        className="TodoSearch" 
        placeholder="Ingresa un todo"
        value={searchValue}
        onChange={(event)=>{
            setSearchValue(event.target.value);
        }}>
        </input>
    );
}

export {TodoSearch};