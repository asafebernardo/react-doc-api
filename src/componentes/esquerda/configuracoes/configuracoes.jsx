import Expansor from "../expansor";

function Configuracoes() {
  return (
    <div className="configuracoes">
      <Expansor titulo="Empresa">
        <button className="conteudo-expansor">• Empresa</button>
        <button className="conteudo-expansor">• Filiais</button>
      </Expansor>

      <Expansor titulo="Rotinas"></Expansor>

      <Expansor titulo="Rotinas provedor"></Expansor>

      <Expansor titulo="Rotinas financeiro"></Expansor>

      <Expansor titulo="Rotinas fiscais"></Expansor>

      <Expansor titulo="Usuários">
        <button className="conteudo-expansor">• Grupo de usuários</button>
        <button className="conteudo-expansor">• Usuários</button>
        <button className="conteudo-expansor">
          • Configurações do usuário
        </button>
        <button className="conteudo-expansor">• Trocar senha</button>
      </Expansor>

      <Expansor titulo="Parâmetros"></Expansor>

      <Expansor titulo="Processos">
        <button className="conteudo-expansor">• Processos</button>
        <button className="conteudo-expansor">
          • Configurações ordem de serviço
        </button>
      </Expansor>

      <Expansor titulo="Configurações documentos">
        <button className="conteudo-expansor">• Tipo documento</button>
      </Expansor>

      <Expansor titulo="Integrações">
        <button className="conteudo-expansor">• E-mail SMTP</button>
      </Expansor>

      <Expansor titulo="Logs">
        <button className="conteudo-expansor">• Logs dos usuários</button>
        <button className="conteudo-expansor">• Logs gateway</button>
        <button className="conteudo-expansor">• Logs de e-mails</button>
        <button className="conteudo-expansor">• Log SMS</button>
        <button className="conteudo-expansor">• Logs de backup</button>
      </Expansor>
    </div>
  );
}

export default Configuracoes;
