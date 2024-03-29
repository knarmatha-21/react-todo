import "./App.css";
import { useState } from "react";
import ModalPopup from "./Components/Modal/ModalPopup";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => setOpenModal(true);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(editId){
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t)=>
        t.id === editTodo.id ? (t={id:t.id, todo}) : {id:t.id, todo:t.todo}
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo('');
      return;
    }
    if(todo !== ''){
      setTodos([{id: `${todo}-${Date.now()}`, todo}, ...todos]);
      setTodo('');
    }
  }

  const handleDelete = (id) =>{
    const delTodo = todos.filter((to)=>to.id !== id);
    setTodos([...delTodo]);
  }

  const handleEdit = (id) =>{
    const editTodo = todos.find((i)=> i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Open Modal</button>
      {openModal && <ModalPopup isOpen={true} closeModal={setOpenModal} />}

      
      <TodoForm handleSubmit={handleSubmit} todo={todo} editId={editId} setTodo={setTodo}/>
      <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
