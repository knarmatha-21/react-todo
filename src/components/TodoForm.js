import React from "react";

const TodoForm = (props) =>{
    const {handleSubmit, todo, editId, setTodo} = props
    return(
        <form onSubmit={handleSubmit}>
        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit'>{editId ? 'Edit' : 'Go'}</button>
        </form>
    )
}

export default TodoForm
