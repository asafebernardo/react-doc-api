import React, { useState } from "react";
import "../esquerda/esquerda.css";
import listaSistema from "../images/list.svg";
import listaRelatorios from "../images/print.svg";
import listaConfiguracoes from "../images/gears.svg";
import listaOutros from "../images/wrench.svg";
import Logo from "../images/logo.png";
import Configuracoes from "./configuracoes/configuracoes";
import Relatorios from "./relatorios/relatorios";
import Outros from "./outros/outros";
import Sistema from "./sistema/sistema";
import Busca from "../topo/busca";

function Esquerda({ onSelecionar }) {
  const [abaAtiva, setAbaAtiva] = useState(1);
  const [busca, setBusca] = useState("");
  // Função para mudar a aba ativa
  const selecionarAba = (aba) => {
    setAbaAtiva(aba);
  };

  return (
    <div className="esquerda">
      <div className="logo">
        <button className="btn-logo">
          <img src={Logo} className="icone-logo" title="Logo" />
        </button>
        <div className="leftSearch">
          <Busca onBuscar={setBusca} />
        </div>
      </div>

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
        <div className={`secao ${abaAtiva === 1 ? "ativa" : ""}`}>
          <Sistema onSelecionar={onSelecionar} busca={busca} />
        </div>
        <div className={`secao ${abaAtiva === 2 ? "ativa" : ""}`}>
          <Relatorios onSelecionar={onSelecionar} busca={busca} />
        </div>
        <div className={`secao ${abaAtiva === 3 ? "ativa" : ""}`}>
          <Configuracoes onSelecionar={onSelecionar} busca={busca} />
        </div>
        <div className={`secao ${abaAtiva === 4 ? "ativa" : ""}`}>
          <Outros onSelecionar={onSelecionar} busca={busca} />
        </div>
      </div>
    </div>
  );
}
export default Esquerda;
