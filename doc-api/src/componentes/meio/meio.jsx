import { useEffect, useState } from "react";
import "../meio/meio.css";
import copy from "../images/copy01.png";
import download from "../images/download01.png";

function Meio({ nomeArquivo }) {
  const [dados, setDados] = useState(null);
  const [abaSelecionada, setAbaSelecionada] = useState(null);
  const [metodoSelecionado, setMetodoSelecionado] = useState("");
  const [linguagemSelecionada, setLinguagemSelecionada] = useState("");
  const [expandidos, setExpandidos] = useState({});

  useEffect(() => {
    if (!nomeArquivo) return;

    fetch(`/dados/${nomeArquivo}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Arquivo não encontrado");
        return res.json();
      })
      .then((json) => {
        setDados(json);
      })
      .catch(() => setDados({ erro: "Arquivo não encontrado ou inválido." }));
  }, [nomeArquivo]);

  useEffect(() => {
    if (!dados || !dados.abas) return;

    const primeiraAba = Object.keys(dados.abas)[0];
    setAbaSelecionada(primeiraAba);
  }, [dados]);

  useEffect(() => {
    if (!dados || !abaSelecionada) return;

    const metodos = dados.abas[abaSelecionada]?.metodos;
    if (metodos?.length > 0) {
      setMetodoSelecionado(metodos[0].metodo || "");
      const linguagens = Object.keys(metodos[0]?.tipos_codigo || {});
      setLinguagemSelecionada(linguagens[0] || "");
    }
  }, [abaSelecionada, dados]);

  const toggleExpandir = (campo) => {
    setExpandidos((prev) => ({ ...prev, [campo]: !prev[campo] }));
  };

  const handleMetodoChange = (e) => {
    const metodo = e.target.value;
    setMetodoSelecionado(metodo);

    const metodoObj = dados.abas[abaSelecionada].metodos.find(
      (m) => m.metodo === metodo
    );
    const linguagens = Object.keys(metodoObj?.tipos_codigo || {});
    setLinguagemSelecionada(linguagens[0] || "");
  };

  const handleAbaClick = (aba) => {
    if (abaSelecionada !== aba) {
      setAbaSelecionada(aba);
    }
  };

  const copiarCodigo = () => {
    const codigo = dados.abas[abaSelecionada].metodos.find(
      (m) => m.metodo === metodoSelecionado
    ).tipos_codigo[linguagemSelecionada];

    navigator.clipboard.writeText(codigo).then(() => {
      alert("Código copiado para a área de transferência!");
    });
  };

  const baixarCodigo = () => {
    const codigo = dados.abas[abaSelecionada].metodos.find(
      (m) => m.metodo === metodoSelecionado
    ).tipos_codigo[linguagemSelecionada];

    const blob = new Blob([codigo], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const extensao = {
      javascript: "js",
      node: "js",
      python: "py",
      php: "php",
      curl: "sh",
      bash: "sh",
    };

    const ext = extensao[linguagemSelecionada] || "txt";

    const link = document.createElement("a");
    link.href = url;
    link.download = `${metodoSelecionado}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="meio">
      <div className="window">
        {!dados ? (
          <p>Selecione um item.</p>
        ) : dados.erro ? (
          <p>{dados.erro}</p>
        ) : (
          <div>
            {/* Botões principais */}
            <div className="area-botoes">
              {dados.botoes?.map((botao, index) => (
                <button key={index} className="botao">
                  {botao}
                </button>
              ))}
            </div>

            {/* Abas */}
            <div className="area-abas">
              {Object.keys(dados.abas).map((aba, index) => (
                <button
                  key={index}
                  className={`aba ${abaSelecionada === aba ? "ativa" : ""}`}
                  onClick={() => handleAbaClick(aba)}
                >
                  {aba}
                </button>
              ))}
            </div>

            {/* Conteúdo da Aba */}
            {abaSelecionada && (
              <div className="conteudo-aba">
                {/* Campos à esquerda */}
                <div className="campos">
                  {dados.abas[abaSelecionada]?.campos?.map((campo, index) => (
                    <div key={index} className="campo">
                      <button
                        className="btn-campo"
                        onClick={() => toggleExpandir(campo.nome)}
                      >
                        {campo.nome}
                      </button>
                      {expandidos[campo.nome] && (
                        <div className="descricao">{campo.descricao}</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Métodos à direita */}
                <div className="metodos">
                  <div className="linha-metodos">
                    {dados.abas[abaSelecionada]?.metodos && (
                      <select
                        className={`select-metodo metodo-${metodoSelecionado}`}
                        value={metodoSelecionado}
                        onChange={handleMetodoChange}
                      >
                        {dados.abas[abaSelecionada].metodos.map((m, index) => (
                          <option key={index} value={m.metodo}>
                            {m.metodo}
                          </option>
                        ))}
                      </select>
                    )}

                    {metodoSelecionado && dados.abas[abaSelecionada] && (
                      <select
                        className={`select-tipoCodigo metodo-${metodoSelecionado}`}
                        value={linguagemSelecionada}
                        onChange={(e) =>
                          setLinguagemSelecionada(e.target.value)
                        }
                      >
                        {Object.keys(
                          dados.abas[abaSelecionada].metodos.find(
                            (m) => m.metodo === metodoSelecionado
                          )?.tipos_codigo || {}
                        ).map((linguagem, index) => (
                          <option key={index} value={linguagem}>
                            {linguagem}
                          </option>
                        ))}
                      </select>
                    )}

                    {/* Botões de ação */}
                    {metodoSelecionado && linguagemSelecionada && (
                      <div className="botoes-inline">
                        <button onClick={copiarCodigo}>
                          <img src={copy} className="copy" />
                        </button>
                        <button onClick={baixarCodigo}>
                          <img src={download} className="download" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Código mostrado */}
                  {metodoSelecionado && linguagemSelecionada && (
                    <div className="codigo-container">
                      <pre className="codigo">
                        {
                          dados.abas[abaSelecionada].metodos.find(
                            (m) => m.metodo === metodoSelecionado
                          ).tipos_codigo[linguagemSelecionada]
                        }
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Meio;
