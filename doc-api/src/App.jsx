// App.jsx
import React, { useState } from "react";
import Esquerda from "./componentes/esquerda/esquerda";
import Topo from "./componentes/topo/topo";
import Meio from "./componentes/meio/meio";
import "./App.css";

function App() {
  const [arquivoSelecionado, setArquivoSelecionado] = useState("");

  return (
    <div className="pagina">
      <Esquerda onSelecionar={setArquivoSelecionado} />
      <div className="area-direita">
        <Topo />
        <Meio nomeArquivo={arquivoSelecionado} />
      </div>
    </div>
  );
}

export default App;
