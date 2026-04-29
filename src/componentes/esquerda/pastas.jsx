import React, { useState } from "react";
import "../esquerda/pastas.css";
import pastaAberta from "../images/folder-open.svg"; // Imagem para expandido
import pastaFechada from "../images/folder-close.svg"; // Imagem para recolhido

function Pastas({ titulo, children }) {
  const [aberto, setAberto] = useState(false);

  const toggleExpansor = () => {
    setAberto(!aberto);
  };

  return (
    <div className="expansor">
      <button onClick={toggleExpansor} className="titulo-pastas">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={aberto ? pastaAberta : pastaFechada}
            alt={aberto ? "Pasta aberta" : "Pasta fechada"}
            className="icone-pasta"
          />
          {titulo}
        </div>
      </button>

      {aberto && <div className="conteudo-pastas">{children}</div>}
    </div>
  );
}

export default Pastas;
