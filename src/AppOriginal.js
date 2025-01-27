import './App.css';
import './style.css';
import React, {useState, useRef} from 'react';
import { Routes, Route, useNavigate  } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import TodoAdd from './pages/TodoAdd';
import TodoUpdate from './pages/TodoUpdate';
import NoPage from "./pages/NoPage";



function App() {
  var initialTodos = [
  { todoID: 1000, todo: 'buy_apples'},
  { todoID: 1001, todo: 'buy_speakers'},
  { todoID: 1002, todo: 'buy_flowers'},
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
      // Find the todo you want to update
      let todoUpdate = todos.find((todo) => todoId === todo.todoId); 
      
      if (todoUpdate) {
        // Pass todoUpdate state to the next route when navigating
        navigate('/updateprod', { state: todoUpdate });
      } else {
        console.error('Todo not found!');
      }
    };
    



  

  const handleUpdate2 = () => {
    let todoId = Number(todoIdURef.current.value);
    let todo = todoURef.current.value;
    let idx = todos.findIndex( (todo) => todoId === todo.todoId); // 2
    let todos_temp = [...todos ]
    todos_temp[idx].todoId = todoId;  
    todos_temp[idx].todo = todo;  
    setTodos( todos_temp)
            navigate('/')
  }
};
      


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home todos={todos} handleDelete={handleDelete} handleUpdate1={handleUpdate1}/>} />
        <Route path="insertprod" element={<TodoAdd todoIdRef={todoIdRef}  todoRef={todoRef} handleAdd={handleAdd}/>} />
        <Route path="updateprod" element={<TodoUpdate todoIdURef={todoIdURef}  
          todoURef={todoURef} handleUpdate2={handleUpdate2}/>} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  
  )
};


export default App;





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
  { todoId: 1002, todo: 'call mother', isComplete: false},
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
      // Find the todo you want to update
      let todoUpdate = todos.find((todo) => todoId === todo.todoId); 
      
      if (todoUpdate) {
        // Pass todoUpdate state to the next route when navigating
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
  
  // This is the return statement for the component
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

  import React from 'react';
  
  function ContactList({firstName, lastName, email, comments}) {
  
    return (
  
      <div>
  
        <ul>
  
        {
  
        }
  
            
  
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
  
  
  
  
  
  
  
  
  import React, { useState } from 'react';
  
  function ContactForm() {
    // Initialize state for the form fields
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      comments: '',
    });
  
    const[isSubmitted, setIsSubmitted] = useState(false);
  
    // Handle form input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value, // Update the specific field dynamically
      }));
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Submitted:', formData);
      // Here, you can send the form data to an API or handle it accordingly
    
  
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      comments: '',
    });
    };
    return (
      <div>
      <h2>Contact Us</h2>
  
      {isSubmitted ? (
        // If the form is submitted, show a success message
        <div>
          <h3>Thank you for your submission!</h3>
          <p>Your information has been received.</p>
        </div>
      ) : (
        // Otherwise, display the form
        <form onSubmit={handleSubmit}>
  
  
  
  
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
  
          
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
  
          
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
  
        
          <div>
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </div>
          
          <div>
          <button type="submit">Submit</button>
        </div>
      
    
      
  
  export default ContactForm;