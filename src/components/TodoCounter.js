import React from 'react'
import '../assets/styles/components/TodoCounter.css'

function TodoCounter({ total, completed, incomplete }) {
    return (
      <h2
        className="TodoCounter"
        >
          Has been completed {completed}, of {total}. You have {incomplete} TODOs left
        </h2>
    );
  }

export { TodoCounter }
