import React, { useState } from "react";
import Esquerda from "./componentes/esquerda/esquerda";
import Topo from "./componentes/topo/topo";
import Meio from "./componentes/meio/meio";
import "./App.css";

function App() {
  const [arquivoSelecionado, setArquivoSelecionado] = useState(null); // Inicialize como null
  const [tela, setTela] = useState("");
  const [nomeArquivo, setNomeArquivo] = useState("");

  return (
    <div className="pagina">
      <Esquerda onSelecionar={setTela} setNomeArquivo={setNomeArquivo} />
      <div className="area-direita">
        <Topo />
        <Meio nomeArquivo={nomeArquivo} />
      </div>
    </div>
  );
}

export default App;
