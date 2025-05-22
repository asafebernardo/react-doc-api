import React, { useEffect, useState, useRef } from "react";
import copy from "../images/copy01.png";
import download from "../images/download01.png";
import "../meio/window.css";

function Window({ nomeArquivo, onClose, onMensagem, onErro }) {
  const windowRef = useRef(null);
  const [dados, setDados] = useState(null);
  const [abaSelecionada, setAbaSelecionada] = useState(null);
  const [metodoSelecionado, setMetodoSelecionado] = useState("");
  const [linguagemSelecionada, setLinguagemSelecionada] = useState("");
  const [expandidos, setExpandidos] = useState({});

  useEffect(() => {
    if (!nomeArquivo) return;

    import(`../dados/${nomeArquivo}.js`)
      .then((module) => {
        setDados(module.default);
      })
      .catch(() => {
        setDados({ erro: "Arquivo não encontrado ou inválido." });
      });
  }, [nomeArquivo]);

  useEffect(() => {
    if (dados?.abas) {
      const primeiraAba = Object.keys(dados.abas)[0];
      setAbaSelecionada(primeiraAba);
    }
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

  const copiarCodigo = () => {
    try {
      const codigo = dados.abas[abaSelecionada].metodos.find(
        (m) => m.metodo === metodoSelecionado
      ).tipos_codigo[linguagemSelecionada];

      navigator.clipboard
        .writeText(
          typeof codigo === "object" ? JSON.stringify(codigo, null, 2) : codigo
        )
        .then(() => {
          onMensagem && onMensagem("✅ Código copiado!");
          setTimeout(() => onMensagem && onMensagem(""), 3000);
        });
    } catch {
      onErro && onErro("❌ Erro ao copiar o código.");
      setTimeout(() => onErro && onErro(""), 3000);
    }
  };

  const baixarCodigo = () => {
    try {
      const codigo = dados.abas[abaSelecionada].metodos.find(
        (m) => m.metodo === metodoSelecionado
      ).tipos_codigo[linguagemSelecionada];

      const blob = new Blob(
        [typeof codigo === "object" ? JSON.stringify(codigo, null, 2) : codigo],
        { type: "text/plain;charset=utf-8" }
      );
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

      onMensagem && onMensagem("✅ Arquivo baixado!");
      setTimeout(() => onMensagem && onMensagem(""), 3000);
    } catch {
      onErro && onErro("❌ Erro ao baixar o arquivo.");
      setTimeout(() => onErro && onErro(""), 3000);
    }
  };

  if (!dados) return <p>Carregando...</p>;
  if (dados.erro) return <p>{dados.erro}</p>;

  const handleMetodoChange = (e) => {
    const metodo = e.target.value;
    setMetodoSelecionado(metodo);
    const metodoObj = dados.abas[abaSelecionada].metodos.find(
      (m) => m.metodo === metodo
    );
    const linguagens = Object.keys(metodoObj?.tipos_codigo || {});
    setLinguagemSelecionada(linguagens[0] || "");
  };

  const renderCodigo = () => {
    const metodo = dados.abas[abaSelecionada].metodos.find(
      (m) => m.metodo === metodoSelecionado
    );

    const codigo = metodo?.tipos_codigo[linguagemSelecionada];

    if (typeof codigo === "object") {
      return (
        <div className="codigo-objeto">
          <div className="url">
            <div className="tipoTexto">URL/Host</div>
            <div className="code">{codigo.url}</div>
          </div>
          <div className="headers">
            <div className="tipoTexto">Headers</div>
            <div className="code">
              {JSON.stringify(codigo.headers, null, 2)}
            </div>
          </div>
          <div className="body">
            <div></div>
            <div className="code">{codigo.body}</div>
          </div>
        </div>
      );
    }

    return <pre className="codigo">{codigo}</pre>;
  };

  return (
    <div
      className="window"
      ref={windowRef}
      style={{ position: "fixed", top: "100px", left: "100px" }}
    >
      <div className="area-botoes">
        {dados.botoes &&
          Object.keys(dados.botoes).map((key, index) => (
            <button
              key={index}
              className="botao"
              onClick={() => {
                const arquivoExiste = dados.botoes[key].arquivo;

                if (arquivoExiste) {
                  console.log(`Abrir: ${arquivoExiste}`);
                } else {
                  onErro && onErro(`❌ Arquivo para "${key}" não encontrado.`);
                  setTimeout(() => onErro && onErro(""), 3000);
                }
              }}
            >
              {key}
            </button>
          ))}
      </div>

      <div className="area-abas">
        {Object.keys(dados.abas).map((aba, index) => (
          <button
            key={index}
            className={`abaWindow ${abaSelecionada === aba ? "ativa" : ""}`}
            onClick={() => setAbaSelecionada(aba)}
          >
            {aba}
          </button>
        ))}
      </div>

      {abaSelecionada && (
        <div className="conteudo-aba">
          {dados.abas[abaSelecionada]?.descricao && (
            <div className="descricao-aba">
              {dados.abas[abaSelecionada]?.descricao}
            </div>
          )}

          <div className="conteudo-principal">
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

            <div className="metodos">
              <div className="linha-metodos">
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

                <select
                  className={`select-tipoCodigo metodo-${metodoSelecionado}`}
                  value={linguagemSelecionada}
                  onChange={(e) => setLinguagemSelecionada(e.target.value)}
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

                <div className="botoes-inline">
                  <button onClick={copiarCodigo}>
                    <img src={copy} className="copy" alt="Copiar" />
                  </button>
                  <button onClick={baixarCodigo}>
                    <img src={download} className="download" alt="Download" />
                  </button>
                </div>
              </div>

              <div className="codigo-container">{renderCodigo()}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Window;
