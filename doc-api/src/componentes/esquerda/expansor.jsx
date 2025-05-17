import React, { useState, useRef, useEffect } from "react";
import "../esquerda/expansor.css";

function Expansor({ titulo, children }) {
  const [aberto, setAberto] = useState(false);
  const [selecionado, setSelecionado] = useState(false); // Novo estado
  const conteudoRef = useRef(null);
  const [alturaMax, setAlturaMax] = useState("0px");
  const toggleExpansor = () => {
    setAberto(!aberto);
    setSelecionado(!aberto);
  };

  useEffect(() => {
    if (aberto) {
      // Pega a altura real do conteúdo para expandir
      setAlturaMax(conteudoRef.current.scrollHeight + "px");
    } else {
      setAlturaMax("0px");
    }
  }, [aberto]);

  return (
    <div className="expansor">
      <button
        onClick={toggleExpansor}
        className={`titulo-expansor ${selecionado ? "selecionado" : ""}`}
      >
        {titulo}
      </button>

      {aberto && (
        <div
          ref={conteudoRef}
          className="conteudo-expansor"
          style={{ maxHeight: alturaMax }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Expansor;
