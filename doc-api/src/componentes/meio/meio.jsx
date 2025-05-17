import React from "react";
import "../meio/meio.css";
import Window from "./Endpoints/window";

function Meio({ nomeArquivo }) {
  if (!nomeArquivo) {
    return <div className="meio"></div>;
  }

  return (
    <div className="meio">
      <Window nomeArquivo={nomeArquivo} />
    </div>
  );
}

export default Meio;
