import React, { useState, useEffect } from "react";
import Expansor from "../expansor";
import Pastas from "../pastas";
import botoesSistema from "../../esquerda/sistema/import";

function Sistema({ onSelecionar, busca }) {
  return (
    <div className="sistema">
      {botoesSistema.map((grupo, idx) => {
        const principaisFiltrados = (grupo.principais || []).filter((botao) =>
          botao.label.toLowerCase().includes(busca.toLowerCase())
        );

        const pastasFiltradas = (grupo.pastas || [])
          .map((pasta) => {
            const botoesFiltrados = (pasta.botoes || []).filter((botao) =>
              botao.label.toLowerCase().includes(busca.toLowerCase())
            );
            return botoesFiltrados.length > 0
              ? { ...pasta, botoes: botoesFiltrados }
              : null;
          })
          .filter(Boolean);

        // Se nenhum botão principal ou de pasta for correspondente à busca, não renderiza nada
        if (principaisFiltrados.length === 0 && pastasFiltradas.length === 0) {
          return null;
        }

        return (
          <Expansor key={idx} titulo={grupo.titulo}>
            {principaisFiltrados.map((botao) => (
              <button
                key={botao.chave}
                className="conteudo-expansor"
                onClick={() => onSelecionar(botao.chave)}
              >
                • {botao.label}
              </button>
            ))}

            {pastasFiltradas.map((pasta, i) => (
              <Pastas key={i} titulo={pasta.titulo}>
                {pasta.botoes.map((botao, j) => (
                  <button
                    key={botao.chave}
                    className="conteudo-expansor"
                    onClick={() => onSelecionar(botao.chave)}
                  >
                    • {botao.label}
                  </button>
                ))}
              </Pastas>
            ))}
          </Expansor>
        );
      })}
    </div>
  );
}

export default Sistema;
