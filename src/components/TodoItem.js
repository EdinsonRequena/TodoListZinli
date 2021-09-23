import React from 'react'
import '../assets/styles/components/TodoItem.css'

function TodoItem(props) {
  const onComplete = () => {
    alert(`You completed ${props.text}`)
  }

  const onDeleted = () => {
    alert(`You deleted ${props.text}`)
  }

    return (
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={onComplete}
        >
          V
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span
          className="Icon Icon-delete"
          onClick={onDeleted}
        >
          X
        </span>
      </li>
    );
  }

export { TodoItem }
