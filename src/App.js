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
  
  //Run ONCE when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  
  //Functions and events
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save locally
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
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
        />

      <ToDoList 
        filteredTodos={filteredTodos} 
        setTodos={setTodos} 
        todos={todos}
      />
    </div>
  );
}

export default App;
