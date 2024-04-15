import React, { useState } from 'react';
import '../Styles/StyleCalculadora.css';

const Calculadora = () => {
  const [primerNumero, setPrimerNumero] = useState(null);
  const [segundoNumero, setSegundoNumero] = useState(null);
  const [resultado, setResultado] = useState(0);

  const handleChangePrimerNumero = (event) => {
    setPrimerNumero(Number(event.target.value));
  };

  const handleChangeSegundoNumero = (event) => {
    setSegundoNumero(Number(event.target.value));
  };

  const sumar = () => {
    setResultado(primerNumero + segundoNumero);
  };

  const restar = () => {
    setResultado(primerNumero - segundoNumero);
  };

  const reiniciar = () => {
    setResultado(null);
    setPrimerNumero("Ingrese el primer número");
    setSegundoNumero("Ingrese el segundo número");
  };

  return (
    <div className="calculadora-container">
      <div>
        <label>Primer número:</label>
        <input
          type="number"
          value={primerNumero}
          onChange={handleChangePrimerNumero}
          placeholder="Ingrese el primer número"
        />
      </div>
      <div>
        <label>Segundo número:</label>
        <input
          type="number"
          value={segundoNumero}
          onChange={handleChangeSegundoNumero}
          placeholder="Ingrese el segundo número"
        />
      </div>
      <h2>Resultado: {resultado}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default Calculadora;
