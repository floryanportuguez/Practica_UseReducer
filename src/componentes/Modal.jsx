import React from 'react';
import '../Styles/StyleModal.css'

const Modal = ({ isModalOpen, closeModal }) => {
  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <p>Bienvenidos al curso de multimedios</p>
          <button onClick={closeModal}  className="buttonModal">Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default Modal;