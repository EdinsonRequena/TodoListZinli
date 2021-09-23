import React from 'react'
import '../assets/styles/components/TodoSearch.css'
import { TodoContext } from './TodoContext'

function TodoSearch() {
  const { secrchValue, setSearchValue } = React.useContext(TodoContext)
  const onSearchValueChange = e => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

    return (
      <input
        className="TodoSearch"
        placeholder="Write"
        value={secrchValue}
        onChange={onSearchValueChange}
        />
    );
  }

export { TodoSearch }
