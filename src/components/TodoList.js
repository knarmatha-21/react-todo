import React from "react";

const TodoList = (props) =>{
    const {todos, handleEdit, handleDelete} = props
    return(
        <ul className="todoListSec">
            {
                todos.map((t)=>(
                    <li className="todoList">
                        <span key={t.id}>{t.todo}</span>
                        <button onClick={() => handleEdit(t.id)}>Edit</button>
                        <button onClick={() => handleDelete(t.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList
