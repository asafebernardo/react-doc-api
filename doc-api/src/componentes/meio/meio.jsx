import { useEffect, useState } from "react";
import "../meio/meio.css";

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
        setAbaSelecionada(null);
        setMetodoSelecionado(""); // Resetar o método ao carregar novos dados
        setLinguagemSelecionada(""); // Resetar a linguagem ao carregar novos dados
      })
      .catch(() => setDados({ erro: "Arquivo não encontrado ou inválido." }));
  }, [nomeArquivo]);

  useEffect(() => {
    if (!dados) return;

    // Pré-seleciona a primeira aba se ainda não tiver sido selecionada
    if (!abaSelecionada && Object.keys(dados.abas).length > 0) {
      const primeiraAba = Object.keys(dados.abas)[0]; // Primeira aba
      setAbaSelecionada(primeiraAba);

      // Definir os valores padrões (método e linguagem)
      const primeiroMetodo = dados.abas[primeiraAba].metodos[0]?.metodo;
      const primeiraLinguagem =
        dados.abas[primeiraAba].metodos[0]?.tipos_codigo;

      setMetodoSelecionado(primeiroMetodo || "");
      setLinguagemSelecionada(Object.keys(primeiraLinguagem || {})[0] || "");
    }
  }, [dados, abaSelecionada]);

  const toggleExpandir = (campo) => {
    setExpandidos((prev) => ({ ...prev, [campo]: !prev[campo] }));
  };

  const handleMetodoChange = (e) => {
    const metodoSelecionado = e.target.value;
    setMetodoSelecionado(metodoSelecionado);

    // Atualiza automaticamente o código na linguagem selecionada
    if (linguagemSelecionada) {
      setLinguagemSelecionada(linguagemSelecionada); // Isso vai garantir que o código seja exibido imediatamente
    }
  };

  const handleAbaClick = (aba) => {
    // Só atualiza a aba selecionada se for diferente da atual
    if (abaSelecionada !== aba) {
      setAbaSelecionada(aba);
      setMetodoSelecionado(""); // Resetar método ao trocar aba
      setLinguagemSelecionada(""); // Resetar linguagem ao trocar aba
    }
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
                  onClick={() => handleAbaClick(aba)} // Usando a função para evitar reset
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
                  {dados.abas[abaSelecionada].campos.map((campo, index) => (
                    <div key={index} className="campo">
                      <button onClick={() => toggleExpandir(campo.nome)}>
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
                    <select
                      value={metodoSelecionado}
                      onChange={handleMetodoChange} // Alteração de método
                    >
                      {dados.abas[abaSelecionada].metodos.map((m, index) => (
                        <option key={index} value={m.metodo}>
                          {m.metodo}
                        </option>
                      ))}
                    </select>

                    {metodoSelecionado && (
                      <select
                        value={linguagemSelecionada}
                        onChange={(e) =>
                          setLinguagemSelecionada(e.target.value)
                        }
                      >
                        {Object.keys(
                          dados.abas[abaSelecionada].metodos.find(
                            (m) => m.metodo === metodoSelecionado
                          ).tipos_codigo
                        ).map((linguagem, index) => (
                          <option key={index} value={linguagem}>
                            {linguagem}
                          </option>
                        ))}
                      </select>
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
