import React from "react";
import './App.css';

export default () => {
  return (
    <div className = 'estilo'>
      <div className = 'navegacao'>
        <header><p>RKChat</p></header>
        <br></br>
        <details>
        <summary>Contatos</summary>
        <ol>
          <li>Ramon</li>
          <li>Keylla</li>
          <li>Amanda</li>
          <li>Leandro</li>
          <li>Lais</li>
        </ol>
        </details>
      </div>
      <div className = 'conteudo'></div>
        <div>
          <input placeholder='Mensagem'>
          </input>
          <button>Enviar</button>
        </div>
    </div>
  );
}


