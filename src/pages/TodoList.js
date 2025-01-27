import React from 'react';

function TodoList({todos, handleUpdate1, handleDelete}) {

  return (

    <div>

      <ul>

      {

          todos.map( (prod) => {

            return (<li key={todo.todoId}>

            {todo.todoId},

            {todo.todo},

          

            <button onClick={() => handleDelete(todo.todoId)}>Delete</button>

            <button onClick={() => handleUpdate1(todo.todoId)}>Update</button>

            </li>)

          }) 

        }

      </ul>    

    </div>

  );

}

export default TodoList;