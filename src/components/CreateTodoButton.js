import React from 'react'
import '../assets/styles/components/CreateTodoButton.css'

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  }

    return (
      <button
        className="CreateTodoButton"
        onClick={() => onClickButton(onClickButton)}
      >
        +
        </button>
    );
  }

export { CreateTodoButton }
