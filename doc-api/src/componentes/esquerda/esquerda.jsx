import React, { useState } from "react";
import "../esquerda/esquerda.css";
import listaSistema from "../images/list.svg";
import listaRelatorios from "../images/print.svg";
import listaConfiguracoes from "../images/gears.svg";
import listaOutros from "../images/wrench.svg";
import Configuracoes from "./configuracoes/configuracoes";
import Relatorios from "./relatorios/relatorios";
import Outros from "./outros/outros";
import Sistema from "./sistema/sistema";

function Esquerda({ onSelecionar, setNomeArquivo }) {
  const [abaAtiva, setAbaAtiva] = useState(1);

  // Função para mudar a aba ativa
  const selecionarAba = (aba) => {
    setAbaAtiva(aba);
  };

  return (
    <div className="esquerda">
      <div className="logo">
        <h1>
          <span style={{ color: "#a1aaae" }}>Doc.</span>&nbsp;
          <span style={{ color: "#01648f" }}>API</span>
        </h1>
      </div>

      <div className="pesquisa"></div>

      {/* Abas */}
      <div className="abas">
        <button
          className={`aba ${abaAtiva === 1 ? "ativa" : ""}`}
          onClick={() => selecionarAba(1)}
        >
          <img src={listaSistema} className="icone-aba" title="Sistema" />
        </button>
        <button
          className={`aba ${abaAtiva === 2 ? "ativa" : ""}`}
          onClick={() => selecionarAba(2)}
        >
          <img src={listaRelatorios} className="icone-aba" title="Relatórios" />
        </button>
        <button
          className={`aba ${abaAtiva === 3 ? "ativa" : ""}`}
          onClick={() => selecionarAba(3)}
        >
          <img
            src={listaConfiguracoes}
            className="icone-aba"
            title="Configurações"
          />
        </button>

        <button
          className={`aba ${abaAtiva === 4 ? "ativa" : ""}`}
          onClick={() => selecionarAba(4)}
        >
          <img src={listaOutros} className="icone-aba" title="Outros" />
        </button>
      </div>

      <div className="conteudo">
        {/* Conteúdos das Abas */}
        <div className={`secao ${abaAtiva === 1 ? "ativa" : ""}`}>
          <Sistema
            onSelecionar={onSelecionar}
            setNomeArquivo={setNomeArquivo}
          />
        </div>
        <div className={`secao ${abaAtiva === 2 ? "ativa" : ""}`}>
          <Relatorios></Relatorios>
        </div>
        <div className={`secao ${abaAtiva === 3 ? "ativa" : ""}`}>
          <Configuracoes></Configuracoes>
        </div>
        <div className={`secao ${abaAtiva === 4 ? "ativa" : ""}`}>
          <Outros></Outros>
        </div>
      </div>
    </div>
  );
}

export default Esquerda;
