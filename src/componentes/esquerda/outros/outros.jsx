import Expansor from "../expansor";
import Pastas from "../pastas";

function Outros() {
  return (
    <div className="outros">
      <Expansor titulo="Importante">
        <button className="conteudo-expansor">• Sobre</button>
      </Expansor>

      <Expansor titulo="Recursos Internos e Botões">
        <button className="conteudo-expansor">• Cliente</button>
        <button className="conteudo-expansor">• Contrato</button>
        <button className="conteudo-expansor">• Estruturas</button>
        <button className="conteudo-expansor">• Saídas</button>
        <button className="conteudo-expansor">• Pagar</button>
        <button className="conteudo-expansor">• Receber</button>
        <button className="conteudo-expansor">• Estoque</button>
        <button className="conteudo-expansor">• Provedor</button>
        <button className="conteudo-expansor">• Inmap</button>
        <button className="conteudo-expansor">• Suporte</button>
        <button className="conteudo-expansor">• VOIP</button>
        <button className="conteudo-expansor">• TV</button>
      </Expansor>

      <Expansor titulo="Fluxos e Processos">
        <button className="conteudo-expansor">• Autorizar ONU</button>
        <button className="conteudo-expansor">• Produtos por técnico</button>
        <button className="conteudo-expansor">
          • Transferência entre almoxarifados
        </button>
        <button className="conteudo-expansor">• Renegociações</button>
        <button className="conteudo-expansor">
          • Transferência com confirmação
        </button>

        <button className="conteudo-expansor">• Finalizar Wizard</button>
        <Pastas titulo="Boletos por CPF">
          <button className="conteudo-expansor">• Cliente</button>
          <button className="conteudo-expansor">• Contrato</button>
        </Pastas>

        <Pastas titulo="Produtos do Cliente">
          <button className="conteudo-expansor">• Plano de venda</button>
          <button className="conteudo-expansor">• Contrato</button>
          <button className="conteudo-expansor">• Contrato 2</button>
          <button className="conteudo-expansor">• Contrato 3</button>
          <button className="conteudo-expansor">• Contrato 4</button>
        </Pastas>
      </Expansor>

      <Expansor titulo="Erros retornados da API">
        <button className="conteudo-expansor">• 400 - Bad request</button>
        <button className="conteudo-expansor">
          • 401 - Authorization required
        </button>
        <button className="conteudo-expansor">• 403 - Fobidden error</button>
        <button className="conteudo-expansor">• 404 - Not found</button>
        <button className="conteudo-expansor">
          • 500 - Ocorreu um erro ao processar
        </button>
        <button className="conteudo-expansor">
          • Recurso não está disponível
        </button>
        <button className="conteudo-expansor">
          • Seu IP não está liberado, para efetuar login!
        </button>
        <button className="conteudo-expansor">• Connection refused</button>
        <button className="conteudo-expansor">• Erro de host/URL</button>
        <button className="conteudo-expansor">
          • Max retrie exceeded with URL
        </button>
      </Expansor>

      <Expansor titulo="Filtros Avançados (Grid Param)">
        <button className="conteudo-expansor">• Como funciona?</button>
        <button className="conteudo-expansor">• Operadores</button>

        <Pastas titulo="Exemplos comuns">
          <button className="conteudo-expansor">• Clientes</button>
          <button className="conteudo-expansor">• Contratos</button>
          <button className="conteudo-expansor">• Contas a receber</button>
          <button className="conteudo-expansor">• Ordem de serviço</button>
          <button className="conteudo-expansor">• Atendimento</button>
          <button className="conteudo-expansor">• Logins</button>
          <button className="conteudo-expansor">• Radius</button>
          <button className="conteudo-expansor">• Logs</button>
        </Pastas>
      </Expansor>

      <Expansor titulo="Métodos da API">
        <button className="conteudo-expansor">• GET</button>
        <button className="conteudo-expansor">• POST</button>
        <button className="conteudo-expansor">• PUT</button>
        <button className="conteudo-expansor">• DELETE</button>
      </Expansor>

      <Expansor titulo="Permissões">
        <button className="conteudo-expansor">• Permissões Básicas</button>
        <button className="conteudo-expansor">• Permissões Específicas</button>
      </Expansor>

      <Expansor titulo="Integrações">
        <button className="conteudo-expansor">• Análise de crédito</button>
        <button className="conteudo-expansor">• Rastreador</button>
        <button className="conteudo-expansor">• IXC Assina</button>
        <button className="conteudo-expansor">• Notificações</button>
        <button className="conteudo-expansor">• TV</button>
        <button className="conteudo-expansor">• SVA</button>
        <button className="conteudo-expansor">• VOIP - Telefonia fixa</button>
        <button className="conteudo-expansor">• MVNO - Telefonia móvel</button>
      </Expansor>

      <Expansor titulo="Versões">
        <button className="conteudo-expansor">• Versão e Atualizações</button>
      </Expansor>
    </div>
  );
}

export default Outros;
