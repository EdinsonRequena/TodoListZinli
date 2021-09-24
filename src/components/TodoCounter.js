import React from 'react'
import '../assets/styles/components/TodoCounter.css'
import { TodoContext } from './TodoContext';

function TodoCounter() {
  const { totalTodos, completedTodos, incompleteTodos } = React.useContext(TodoContext)
    return (
      <h2
        className="TodoCounter"
        >
          Has been completed {completedTodos}, of {totalTodos}. You have {incompleteTodos} TODOs left
        </h2>
    );
  }

export { TodoCounter }
