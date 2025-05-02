import React, { useState } from "react";
import "../esquerda/expansor.css";

function Expansor({ titulo, children }) {
  const [aberto, setAberto] = useState(false);
  const [selecionado, setSelecionado] = useState(false); // Novo estado

  const toggleExpansor = () => {
    setAberto(!aberto);
    setSelecionado(!aberto); // Fica selecionado apenas se estiver aberto
  };

  return (
    <div className="expansor">
      <button
        onClick={toggleExpansor}
        className={`titulo-expansor ${selecionado ? "selecionado" : ""}`}
      >
        {titulo}
      </button>

      {aberto && <div className="conteudo-expansor">{children}</div>}
    </div>
  );
}

export default Expansor;
