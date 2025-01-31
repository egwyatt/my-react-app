import '../style.css';
import React from 'react';

function Home({todos, setTodos, handleUpdate1, handleDelete}) {
 
    let toggleComplete = (todoId) => {
        let idx = todos.findIndex( (todo) => todoId === todo.todoId);
        let todos_temp = [...todos ]
        todos_temp[idx].isComplete = !todos_temp[idx].isComplete;
        setTodos( todos_temp)
    
};

    const handleDeleteClick = (e, todoId) => {
        e.stopPropagation();
        handleDelete(todoId);
    };


return (
 <div>
 {todos.map( (todo) => {

const todoClass = todo.isComplete ? 'todo completed' : 'todo';



 return (
    <div
    key={todo.todoId}
    onClick={() => toggleComplete(todo.todoId)} 
    className={`${todo.isComplete ? 'strikeThru' : ''}`}
>
    
<div className="todo-container">
    {todo.todo},
    {/*  propagation stop */}
    <button onClick={(e) => handleDeleteClick(e, todo.todoId)}>Delete</button>
    
    </div>
          </div> // Close the <div> for the todo item
        );
      })}
    </div>
  );
}

export default Home;
 
