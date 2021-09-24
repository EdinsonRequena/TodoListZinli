import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/components/Modal.css'

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal }