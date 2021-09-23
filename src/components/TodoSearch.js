import React from 'react'
import '../assets/styles/components/TodoSearch.css'

function TodoSearch({ secrchValue, setSearchValue }) {
  const onChangeSearch = e => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

    return (
      <input
        className="TodoSearch"
        placeholder="Write"
        value={secrchValue}
        onChange={e => onChangeSearch(e)}
        />
    );
  }

export { TodoSearch }
