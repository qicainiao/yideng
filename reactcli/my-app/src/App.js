import React from 'react';
import logo from './logo.svg';
import TodoList from './components/todolist'
import './App.css';

function App() {
  return (
    <div className="App">
       {/* 我是注释 
          9999
         */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TodoList />
    </div>
  );
}

export default App;
