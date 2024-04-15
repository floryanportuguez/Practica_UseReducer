// En ContadorLikes.jsx
import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import '../Styles/StyleContador.css'; 

const ContadorLikes = () => {
    const [likes, setLikes] = useState(0);
  
    const aumentarLikes = () => {
      setLikes(likes + 1);
    };
  
    const disminuirLikes = () => {
      setLikes(likes - 1);
    };
  
    return (
      <div className="contador-container">
        <h2 className="contador-title">Cantidad de Likes: {likes}</h2>
        <div className="contador-buttons">
          <button onClick={aumentarLikes}><FaThumbsUp /> Like</button>
          <button onClick={disminuirLikes}><FaThumbsDown /> Dislike</button>
        </div>
      </div>
    );
  };
  
  export default ContadorLikes;