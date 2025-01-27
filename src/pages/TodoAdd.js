import '../style.css';
import React from 'react';
function TodoAdd({todoIdRef, todoRef, handleAdd}) {
 return (
 <div>
 <div id = "hidden">ID <input type="text" ref={todoIdRef} /></div>
 <div>Todo<input type="text" ref={todoRef}/></div>
 <div><button onClick={handleAdd}>Add</button></div>
 </div>
 );
}
export default TodoAdd;