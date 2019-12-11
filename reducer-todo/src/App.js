import React, { useState, useReducer }  from 'react';
import { initialState, reducer } from "../src/reducers/todoReducer";
import './App.css';

//Components
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch ] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>My Todo List:</h1>
      <TodoList state={state} dispatch={dispatch}/>
      <TodoForm state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App; 
