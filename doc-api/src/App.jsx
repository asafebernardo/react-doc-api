// App.jsx
import React from "react";
import Esquerda from "./componentes/esquerda/esquerda";
import Topo from "./componentes/topo/topo";
import Meio from "./componentes/meio/meio";
import "./App.css";

function App() {
  return (
    <div className="pagina">
      <Esquerda />
      <div className="area-direita">
        <Topo />
        <Meio />
      </div>
    </div>
  );
}

export default App;
