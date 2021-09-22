// import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
