import React, { useState, useEffect, Components } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //useEffect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  
  //Functions and events
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Kevin's To-Do List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
        filteredTodos={filteredTodos}
        />
      <ToDoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
