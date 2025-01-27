import './App.css';
import './style.css';
import React, {useState, useRef} from 'react';
import { Routes, Route, useNavigate  } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import TodoAdd from './pages/TodoAdd';
import NoPage from "./pages/NoPage";
import ContactForm from './pages/ContactForm'; 




function App() {
  const initialTodos = [
  { todoId: 1000, todo: 'buy apples', isComplete: false},
  { todoId: 1001, todo: 'tune guitar', isComplete: false},
  { todoId: 1002, todo: 'do homework', isComplete: false},
];

  const [todos, setTodos] = useState( initialTodos);
  const todoIdRef = useRef();
  const todoRef = useRef();
  const todoIdURef = useRef();
  const todoURef = useRef();
  const navigate = useNavigate();

  const handleAdd = () => {
    let todoId = Number(todoIdRef.current.value);
    let todo = todoRef.current.value;
    
    let todo_temp = {};
    todo_temp.todoId = todoId;  
    todo_temp.todo = todo;  
    
    let todos_temp = [...todos, todo_temp ];
    setTodos(todos_temp);
    navigate('/')
  }
  const handleDelete = (todoId) => {
      let idx = todos.findIndex( (todo) => todoId === todo.todoId); // 2
      let todos_temp = [...todos ]
      todos_temp.splice( idx, 1);  // 2, 1
      setTodos( todos_temp);
  }


    const handleUpdate1 = (todoId) => {   
      
      let todoUpdate = todos.find((todo) => todoId === todo.todoId); 
      
      if (todoUpdate) {
        
        navigate('/updateprod', { state: todoUpdate });
      } else {
        console.error('Todo not found!');
      }
    };
    



  

    const handleUpdate2 = () => {
      let todoId = Number(todoIdURef.current.value);
      let todo = todoURef.current.value;
      let idx = todos.findIndex((todo) => todoId === todo.todoId); // 2
      let todos_temp = [...todos];
      todos_temp[idx].todoId = todoId;
      todos_temp[idx].todo = todo;
      setTodos(todos_temp);
      navigate('/');
  };
  
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
            <Home
              todos={todos}
              setTodos={setTodos}
              handleDelete={handleDelete}
              
            />
          }
        />
        <Route path="insertprod"
          element={<TodoAdd todoIdRef={todoIdRef} todoRef={todoRef} handleAdd={handleAdd} />}
        />
        <Route path="contact" element={<ContactForm />} />
        
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}
  export default App;  