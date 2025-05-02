import React, { useState } from "react";
import "./busca.css";

function Busca({ onBuscar }) {
  const [busca, setBusca] = useState(""); // Estado para o valor do campo de busca

  // Função para lidar com a busca ao pressionar Enter
  const handleBusca = (e) => {
    if (e.key === "Enter") {
      onBuscar(busca); // Chama a função de busca passando o valor digitado
      setBusca(""); // Limpa o campo após a busca
    }
  };

  return (
    <input
      type="text"
      value={busca}
      onChange={(e) => setBusca(e.target.value)} // Atualiza o estado da busca
      onKeyDown={handleBusca} // Aciona a busca ao pressionar Enter
      placeholder="Buscar..."
      className="campo-busca"
    />
  );
}

export default Busca;
