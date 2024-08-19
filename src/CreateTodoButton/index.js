import "./CreateTodoButton.css";
function CreateTodoButton({setOpenModal}){
    return(
        <button onClick={()=>{
            setOpenModal(state=>!state);
        }} className="CreateTodoButton">+</button>
    );
}

export {CreateTodoButton}