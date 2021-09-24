import React from 'react';
import { TodoContext } from './components/TodoContext';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { DownloadButton } from './components/DownloadButton';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    setDownloading,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {error && <p style={{ color: 'white' }}>ERROR!</p>}
            {loading && <p style={{ color: 'white' }}>Loading...</p>}
            {(!loading && !searchedTodos.length) && <p style={{ color: 'white' }}>¡Create you first TODO!</p>}
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
{/*       <DownloadButton
        setDownloading={setDownloading}
      /> */}
    </React.Fragment>
  );
}

export { AppUI };