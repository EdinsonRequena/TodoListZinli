import React from 'react'
import '../assets/styles/components/TodoItem.css'

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
          âˆš
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="Icon Icon-delete">
          X
        </span>
      </li>
    );
  }

export { TodoItem }
