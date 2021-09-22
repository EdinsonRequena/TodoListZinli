// import './App.css';
import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';

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
