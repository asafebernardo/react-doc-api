import { useState, useEffect } from "react";
import "../meio/meio.css";
import Window from "./Endpoints/window";

function Meio({ nomeArquivo }) {
  const [janelas, setJanelas] = useState([]);

  // Sempre que nomeArquivo mudar, abre uma nova janela
  useEffect(() => {
    if (nomeArquivo) {
      setJanelas((prev) => [...prev, nomeArquivo]);
    }
  }, [nomeArquivo]);

  const fecharJanela = (index) => {
    setJanelas((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="meio">
      {janelas.map((arquivo, index) => (
        <Window
          key={index}
          nomeArquivo={arquivo}
          onClose={() => fecharJanela(index)}
        />
      ))}
    </div>
  );
}

export default Meio;
