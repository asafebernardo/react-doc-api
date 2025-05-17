import React, { useState } from "react";
import Esquerda from "./componentes/esquerda/esquerda";
import Topo from "./componentes/topo/topo";
import Meio from "./componentes/meio/meio";
import icon from "./componentes/images/icon.png";
import "./App.css";

function App() {
  const [tela, setTela] = useState(""); // Estado de controle da "tela"

  return (
    <div className="pagina">
      <header>
        <title>Documentação API</title>
        <link rel="shortcut icon" type="image/png" href={icon} />
      </header>
      <Esquerda onSelecionar={setTela} /> {/* Passa a função para a esquerda */}
      <div className="area-direita">
        <Topo />
        <Meio nomeArquivo={tela} /> {/* Passa a tela para o Meio */}
      </div>
    </div>
  );
}

export default App;
