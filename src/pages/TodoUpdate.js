import '../style.css';
import React from 'react';
import { useLocation } from "react-router-dom";

function TodoUpdate({todoIdURef, todoURef, handleUpdate2})  {
  const location = useLocation();
  const todoUpdate = location.state;

  console.log( JSON.stringify(todoUpdate))
  console.log( 'todoUpdate.todoId=' + todoUpdate.todoId)
  console.log( 'todoUpdate.todo=' + todoUpdate.todo)


  const TodoUpdate = ({todoIdURef, todoURef, handleUpdate2}) => {
    const location = useLocation();
    const todoUpdate = location.state;
  
    
    if (!todoUpdate) {
      return <div>Todo not found</div>;
    }
  
  
    return (
      <div>
        <div>
          ID <input type="text" readOnly ref={todoIdURef} defaultValue={todoUpdate.todoId} />
        </div>
        <div>
          Todo <input type="text" ref={todoURef} defaultValue={todoUpdate.todo} />
        </div>
        <div>
        <button onClick={handleUpdate2}>Update</button>
        </div>
      </div>
    );
  };
}
  
  export default TodoUpdate;