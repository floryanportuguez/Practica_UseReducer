import React, { useEffect, useReducer, useState } from "react";


const initialState = [
  { name: "Revisar material x", done: false },
  { name: "Revisar material y", done: false },
  { name: "Revisar material z", done: false },
];

function reducer(state, action) {
  switch (action.type) {
    case "Agregar":
      return [...state, { name: action.payload, done: false }];
    case "Eliminar":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
}

function Tareas() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [nuevaTarea, setNuevaTarea] = useState("");

  function crearTarea(nuevaTarea) {
    dispatch({ type: "Agregar", payload: nuevaTarea });
  }

  const eliminar = (index) => {
    dispatch({ type: "Eliminar", payload: index });
  };

  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(state));
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    crearTarea(nuevaTarea);
    setNuevaTarea("");
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingresar nueva tarea"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
          />
          <button type="submit">Guardar</button>
        </form>
      </div>

      <div className="Container">
        {state.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>{" "}
            <a
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => eliminar(index)}
            >
              Eliminar
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Tareas;
