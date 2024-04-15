import React, { useReducer, useEffect } from 'react';
import './App.css';
import Tareas from './componentes/Tareas';
import Semaforo from './componentes/Semaforo';
import ContadorLikes from './componentes/Contador'; 
import Calculadora from './componentes/Calculadora';
import Modal from './componentes/Modal';

const initialState = {
  showSemaforo: false,
  showTareas: JSON.parse(localStorage.getItem('showTareas')) || false,
  showContador: false, 
  showCalculadora: false,
  isModalOpen: false
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SEMAFORO':
      return { ...state, showSemaforo: !state.showSemaforo };
    case 'TOGGLE_TAREAS':
      return { ...state, showTareas: !state.showTareas };
    case 'TOGGLE_CONTADOR':
      return { ...state, showContador: !state.showContador }; 
      case 'TOGGLE_CALCULADORA':
        return { ...state, showCalculadora: !state.showCalculadora }; 
        case 'TOGGLE_MODAL':
      return { ...state, isModalOpen: !state.isModalOpen };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSemaforo = () => {
    dispatch({ type: 'TOGGLE_SEMAFORO' });
  };

  const toggleTareas = () => {
    dispatch({ type: 'TOGGLE_TAREAS' });
  };

  const toggleContador = () => {
    dispatch({ type: 'TOGGLE_CONTADOR' });
  };

  const toggleCalculadora = () => {
    dispatch({ type: 'TOGGLE_CALCULADORA' });
  };

  const toggleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  const closeModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };


  useEffect(() => {
    localStorage.setItem('showTareas', JSON.stringify(state.showTareas));
  }, [state.showTareas]);

  return (
    <div className="centered">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button onClick={toggleSemaforo} className="button" style={{ marginBottom: '20px', fontSize: '20px' }}>
          {state.showSemaforo ? 'Ocultar Semáforo' : 'Mostrar Semáforo'}
        </button>
        {state.showSemaforo && <Semaforo />}

        <button onClick={toggleTareas} className="button" style={{ marginTop: '20px', fontSize: '20px' }}>
          {state.showTareas ? 'Ocultar Tareas' : 'Mostrar Tareas'}
        </button>
        {state.showTareas && <Tareas />}

        <div style={{ marginTop: '20px', fontSize: '20px' }}>
          <button onClick={toggleContador} className="button" style={{ marginTop: '20px', fontSize: '20px' }}>
            {state.showContador ? 'Ocultar Contador Likes' : 'Mostrar Contador Likes'}
          </button>
          {state.showContador && <ContadorLikes />} 
        </div>

        <div style={{ marginTop: '20px', fontSize: '20px' }}>
          <button onClick={toggleCalculadora} className="button" style={{ marginTop: '20px', fontSize: '20px' }}>
            {state.showCalculadora ? 'Ocultar Calculadora' : 'Mostrar Calculadora'}
          </button>
          {state.showCalculadora && <Calculadora />} 
          </div >
         <button onClick={toggleModal} className="button" style={{ marginTop: '20px', fontSize: '20px' }}>
          {state.isModalOpen ? 'Ocultar Modal' : 'Mostrar Modal'}
        </button>
        <Modal isModalOpen={state.isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default App;
