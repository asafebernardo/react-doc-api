import React, { useState } from "react";
import Esquerda from "./componentes/esquerda/esquerda";
import Topo from "./componentes/topo/topo";
import Meio from "./componentes/meio/meio";
import icon from "./componentes/images/icon.png";
import "./App.css";

function App() {
  const [tela, setTela] = useState(""); // Estado de controle da "tela"
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  {
  }
  return (
    <div className="pagina">
      {mensagem && <div className="mensagem sucesso">{mensagem}</div>}
      {erro && <div className="mensagem erro">{erro}</div>}

      <header>
        <title>Documentação API</title>
        <link rel="shortcut icon" type="image/png" href={icon} />
      </header>

      <Esquerda onSelecionar={setTela} />

      <div className="area-direita">
        <Topo />
        <Meio
          nomeArquivo={tela}
          onMensagem={setMensagem}
          onErro={setErro}
        ></Meio>
      </div>
    </div>
  );
}

export default App;
