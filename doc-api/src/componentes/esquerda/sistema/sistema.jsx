import Expansor from "../expansor";
import Pastas from "../pastas";

function Sistema({ onSelecionar }) {
  return (
    <div className="sistema">
      <Expansor titulo="Cadastros">
        <button
          className="conteudo-expansor"
          onClick={() => onSelecionar("cliente")}
        >
          • Clientes
        </button>
        <button
          className="conteudo-expansor"
          onClick={() => onSelecionar("cliente_contrato")}
        >
          • Contratos
        </button>
        <button
          className="conteudo-expansor"
          onClick={() => onSelecionar("produto")}
        >
          • Produtos
        </button>
        <button
          className="conteudo-expansor"
          onClick={() => onSelecionar("fornecedor")}
        >
          • Fornecedor
        </button>
        <button
          className="conteudo-expansor"
          onClick={() => onSelecionar("estrutura")}
        >
          • Estruturas
        </button>
        <button className="conteudo-expansor">
          • Central de consultas (CPF/CNPJ)
        </button>
        <Pastas titulo="Clientes">
          <button className="conteudo-expansor">• Condomínios</button>
          <button className="conteudo-expansor">• Tipos de clientes</button>
        </Pastas>
        <Pastas titulo="Contratos">
          <button className="conteudo-expansor">• Tipo de cobrança</button>
          <button className="conteudo-expansor">• Planos de venda</button>
          <button className="conteudo-expansor">
            • Serviços e descontos adicionais
          </button>
          <button className="conteudo-expansor">
            • Reajuste valor de contrato (acréscimos)
          </button>
          <button className="conteudo-expansor">
            • Parâmetros desocnto/acréscimo
          </button>
          <button className="conteudo-expansor">
            • Modelos de contrato de cliente
          </button>
          <button className="conteudo-expansor">
            • Indexadores de contratos
          </button>
          <button className="conteudo-expansor">
            • Parâmetros de descontos para Contratos com financeiros retroativos
          </button>
        </Pastas>
        <Pastas titulo="Produtos">
          <button className="conteudo-expansor">• Grupo de produtos</button>
          <button className="conteudo-expansor">• Subgrupos de produtos</button>
          <button className="conteudo-expansor">• Unidades</button>
          <button className="conteudo-expansor">
            • Cod. dos serviços (NF13)
          </button>
          <button className="conteudo-expansor">• Calculo preços geral</button>
          <button className="conteudo-expansor">
            • Calculo preços por entrada
          </button>
          <button className="conteudo-expansor">• CEST</button>
          <button className="conteudo-expansor">• CFOP</button>
          <button className="conteudo-expansor">• NCM</button>
          <button className="conteudo-expansor">
            • Classificação produtos franquia
          </button>
        </Pastas>
        <Pastas titulo="Fornecedores">
          <button className="conteudo-expansor">• Tipo de Fornecedor</button>
          <button className="conteudo-expansor">• Transportadoras</button>
          <button className="conteudo-expansor">• Vendedores</button>
          <button className="conteudo-expansor">
            • Operadoras de telefonia
          </button>
        </Pastas>
        <Pastas titulo="Financeiro">
          <button className="conteudo-expansor">• Carteira de cobrança</button>
          <button className="conteudo-expansor">• Contas</button>
          <button className="conteudo-expansor">
            • Condições de pagamento
          </button>
          <button className="conteudo-expansor">• Motivos de desconto</button>
          <button className="conteudo-expansor">
            • Modelo impressão de RPS
          </button>
          <button className="conteudo-expansor">• Moedas</button>
          <button className="conteudo-expansor">• Feriados</button>
          <button className="conteudo-expansor">
            • Motivo de cancelamento
          </button>
          <button className="conteudo-expansor">• Modelo de recibo</button>
          <button className="conteudo-expansor">
            • Configurações alternativas de pagamento
          </button>
        </Pastas>
        <Pastas titulo="Tabela de preços">
          <button className="conteudo-expansor">• Tabela de preços</button>
        </Pastas>
        <Pastas titulo="Locais">
          <button className="conteudo-expansor">• Cidade</button>
          <button className="conteudo-expansor">• UF</button>
          <button className="conteudo-expansor">• País</button>
        </Pastas>

        <Pastas titulo="TV/SVA">
          <button className="conteudo-expansor">• Usuários SVA</button>
          <button className="conteudo-expansor">• Usuários TV</button>
          <button className="conteudo-expansor">• Pacotes TV</button>
          <button className="conteudo-expansor">• Equipamento TV</button>
          <button className="conteudo-expansor">• Canais</button>
        </Pastas>
        <Pastas titulo="IOT"></Pastas>
      </Expansor>

      <Expansor titulo="Entradas">
        <button className="conteudo-expansor">• Compra</button>
        <button className="conteudo-expansor">• Requisição de compra</button>
        <button className="conteudo-expansor">• Pedido de compra</button>
        <button className="conteudo-expansor">
          • Documentos de entrada DF-e
        </button>
      </Expansor>

      <Expansor titulo="Saídas">
        <button className="conteudo-expansor">• Venda</button>
        <button className="conteudo-expansor">• O que é NFCom 62</button>
        <button className="conteudo-expansor">• Pedido de compra</button>
        <Pastas titulo="Pedidos">
          <button className="conteudo-expansor">• Pedido de venda</button>
          <button className="conteudo-expansor">• Pedido e-commerce</button>
          <button className="conteudo-expansor">
            • Pedido de venda via O.S
          </button>
          <button className="conteudo-expansor">
            • Pedido de ordem de serviço
          </button>
        </Pastas>
        <Pastas titulo="Cadastros">
          <button className="conteudo-expansor">• Modelo de venda</button>
        </Pastas>
      </Expansor>

      <Expansor titulo="Pagar">
        <button className="conteudo-expansor">• Contas a pagar</button>
        <button className="conteudo-expansor">• Lote de contas a pagar</button>
        <button className="conteudo-expansor">• Duplicar parcelas</button>
        <button className="conteudo-expansor">• Altera vencimento</button>
        <button className="conteudo-expansor">
          • Adiantamento a fornecedor
        </button>
      </Expansor>

      <Expansor titulo="Receber">
        <button className="conteudo-expansor">• Contas a pagar</button>
        <button className="conteudo-expansor">• Recebimentos</button>
        <button className="conteudo-expansor">• Recebimentos composto</button>
        <button className="conteudo-expansor">• Ponto de recebimento</button>
        <button className="conteudo-expansor">• Altera a receber</button>
        <button className="conteudo-expansor">
          • Adiantamento de clientes
        </button>
        <button className="conteudo-expansor">• Renegociação</button>
      </Expansor>

      <Expansor titulo="Financeiro">
        <button className="conteudo-expansor">• Movimentação financeira</button>
        <button className="conteudo-expansor">
          • Transferência entre contas
        </button>
        <button className="conteudo-expansor">• Conciliação bancária</button>

        <Pastas titulo="Arquivos de boletos">
          <button className="conteudo-expansor">• Remessa boletos</button>
          <button className="conteudo-expansor">
            • Retorno bancário em lote
          </button>
          <button className="conteudo-expansor">• Boletos em remessas</button>
        </Pastas>

        <Pastas titulo="Cadastros">
          <button className="conteudo-expansor">• Cheque de clientes</button>
          <button className="conteudo-expansor">• Tipo de despesa</button>
        </Pastas>

        <Pastas titulo="Débito em conta">
          <button className="conteudo-expansor">
            • Remessa débitos em conta
          </button>
          <button className="conteudo-expansor">
            • Retorno em lote débito em conta
          </button>
        </Pastas>

        <Pastas titulo="Cartão de crédito">
          <button className="conteudo-expansor">
            • Pagamentos cartão de crédito
          </button>
        </Pastas>

        <Pastas titulo="Gateways de Pagamento">
          <button className="conteudo-expansor">• Retorno de pagamento</button>
        </Pastas>
      </Expansor>

      <Expansor titulo="Fiscal">
        <button className="conteudo-expansor">
          • Classificação tributária
        </button>
        <button className="conteudo-expansor">• NF-e inutilizadas</button>
        <button className="conteudo-expansor">
          • Tabela CFOP das entradas
        </button>
        <Pastas titulo="Gateways de Pagamento">
          <button className="conteudo-expansor">• PIS entrada XML</button>
          <button className="conteudo-expansor">• COFINS entrada XML</button>
          <button className="conteudo-expansor">• IPI entrada XML</button>
          <button className="conteudo-expansor">• IXCMS de CSOSN p/ CST</button>
        </Pastas>
      </Expansor>

      <Expansor titulo="Contabilidade">
        <button className="conteudo-expansor">• Lançamento contábeis</button>
        <Pastas titulo="Plano de contas">
          <button className="conteudo-expansor">
            • Contas contábeis sintéticas
          </button>
          <button className="conteudo-expansor">
            • Contas contábeis analíticas
          </button>
          <button className="conteudo-expansor">
            • Composição de contas contábeis
          </button>
        </Pastas>
      </Expansor>

      <Expansor titulo="Folha de pagamento">
        <button className="conteudo-expansor">• Colaboradores</button>
        <button className="conteudo-expansor">
          • Adiantamento de salários
        </button>
        <Pastas titulo="Cadastros">
          <button className="conteudo-expansor">• Departamentos</button>
          <button className="conteudo-expansor">• Setores</button>
          <button className="conteudo-expansor">• Funções</button>
          <button className="conteudo-expansor">• Termos de equipamento</button>
        </Pastas>
      </Expansor>

      <Expansor titulo="Estoque">
        <button className="conteudo-expansor">• Meu estoque</button>
        <button className="conteudo-expansor">• Inventário</button>
        <button className="conteudo-expansor">• Patrimônios</button>
        <button className="conteudo-expansor">• Almoxarifados</button>
        <button className="conteudo-expansor">
          • Requisições de materiais
        </button>

        <Pastas titulo="Transferências">
          <button className="conteudo-expansor">
            • Transferência com confirmação
          </button>
          <button className="conteudo-expansor">
            • Transferência entre almoxarifados
          </button>
          <button className="conteudo-expansor">
            • Registros de transferências
          </button>
        </Pastas>

        <Pastas titulo="Cadastros">
          <button className="conteudo-expansor">
            • Motivo de cancelamento
          </button>
          <button className="conteudo-expansor">
            • Motivo de Inutilização
          </button>
          <button className="conteudo-expansor">
            • Modelo de impressão de etiqueta
          </button>
        </Pastas>
      </Expansor>

      <Expansor titulo="Provedor">
        <button className="conteudo-expansor">• Autorizar ONUs</button>
        <button className="conteudo-expansor">• Logins</button>
        <button className="conteudo-expansor">• Redes adicionais</button>
        <button className="conteudo-expansor">• Planos de velocidades</button>
        <button className="conteudo-expansor">• Concentradores (NAS)</button>
        <button className="conteudo-expansor">• Transmissores (OLT)</button>
        <button className="conteudo-expansor">• Cliente Fibra (ONU)</button>

        <Pastas titulo="Transmissores">
          <button className="conteudo-expansor">
            • POP - Ponto de transmissão
          </button>
          <button className="conteudo-expansor">• Cliente rádio</button>
          <button className="conteudo-expansor">• Perfil cliente fibra</button>
          <button className="conteudo-expansor">• Interface fibra</button>
          <button className="conteudo-expansor">• Interface slot</button>
          <button className="conteudo-expansor">• Interface rádio</button>
          <button className="conteudo-expansor">
            • Modelo de provisionamento
          </button>
          <button className="conteudo-expansor">• Autorização em massa</button>
        </Pastas>

        <Pastas titulo="Pool IP">
          <button className="conteudo-expansor">• Pools</button>
          <button className="conteudo-expansor">• Pool Radius</button>
          <button className="conteudo-expansor">• IP Fixo</button>
          <button className="conteudo-expansor">• IP Fixo IPV6</button>
          <button className="conteudo-expansor">• Pool concentrador</button>
        </Pastas>

        <Pastas titulo="Radius">
          <button className="conteudo-expansor">• DNS</button>
          <button className="conteudo-expansor">• Conexões Radius</button>
          <button className="conteudo-expansor">• Checagem de login</button>
          <button className="conteudo-expansor">• Checagem de grupo</button>
          <button className="conteudo-expansor">• Resposta de grupo</button>
          <button className="conteudo-expansor">• Planos X Logins</button>
          <button className="conteudo-expansor">
            • Histórico de alterações no login
          </button>
        </Pastas>

        <Pastas titulo="CGNAT">
          <button className="conteudo-expansor">• Integrações CGNAT</button>
          <button className="conteudo-expansor">• Conexões Radius CGNAT</button>
          <button className="conteudo-expansor">• Faixas</button>
        </Pastas>

        <Pastas titulo="Autenticação Radius">
          <button className="conteudo-expansor">
            • Concentradores autorizados
          </button>
          <button className="conteudo-expansor">• Logs de autenticação</button>
          <button className="conteudo-expansor">• Pós autenticação</button>
          <button className="conteudo-expansor">• IPs autorizados</button>
          <button className="conteudo-expansor">• Usuários</button>
        </Pastas>

        <Pastas titulo="SpeedTest">
          <button className="conteudo-expansor">
            • Servidores de SpeedTest
          </button>
          <button className="conteudo-expansor">• Resultados SpeedTest</button>
        </Pastas>

        <Pastas titulo="Integrações">
          <button className="conteudo-expansor">• Integrações</button>
          <button className="conteudo-expansor">• Configurações SNMP</button>
        </Pastas>

        <Pastas titulo="Monitoramento de ping">
          <button className="conteudo-expansor">
            • Grupos de monitoramento de hosts
          </button>
          <button className="conteudo-expansor">• Monitoramento de host</button>
        </Pastas>

        <Pastas titulo="Configurações">
          <button className="conteudo-expansor">• Configuração padrão</button>
          <button className="conteudo-expansor">• Circuitos</button>
          <button className="conteudo-expansor">• Hardware</button>
          <button className="conteudo-expansor">• Ocorrências/Soluções</button>
        </Pastas>

        <Pastas titulo="ACS">
          <button className="conteudo-expansor">• Integração</button>
          <button className="conteudo-expansor">• Dispositivos</button>
        </Pastas>

        <Pastas titulo="Rede Neutra - Client">
          <button className="conteudo-expansor">• Operadores neutros</button>
          <button className="conteudo-expansor">• Ordens de serviço</button>
          <button className="conteudo-expansor">• Reservas</button>
        </Pastas>
      </Expansor>

      <Expansor titulo="IXC Hub"></Expansor>

      <Expansor titulo="Inmap">
        <button className="conteudo-expansor">• Fiberdocs</button>
        <button className="conteudo-expansor">• Sales</button>
        <button className="conteudo-expansor">• Service</button>

        <Pastas titulo="Elementos">
          <button className="conteudo-expansor">• Caixas de atendimento</button>
          <button className="conteudo-expansor">• Caixas de emenda</button>
          <button className="conteudo-expansor">• Caixas Subterrâneas</button>
          <button className="conteudo-expansor">• Cabos</button>
          <button className="conteudo-expansor">• Postes</button>
          <button className="conteudo-expansor">• Regiões de cobertura</button>
          <button className="conteudo-expansor">
            • Regiões de rede neutra
          </button>
          <button className="conteudo-expansor">• Projetos</button>
        </Pastas>

        <Pastas titulo="Configurações">
          <button className="conteudo-expansor">
            • Configurações de regiões de cobertura
          </button>
          <button className="conteudo-expansor">
            • Configurações de regiões de rede neutra
          </button>
          <button className="conteudo-expansor">• Configurações de cabo</button>
          <button className="conteudo-expansor">
            • Importação de arquivos KML
          </button>
          <button className="conteudo-expansor">
            • Projetos por colaboradores
          </button>
        </Pastas>

        <Pastas titulo="Expansão de rede">
          <button className="conteudo-expansor">• Projetos de execução</button>
        </Pastas>
      </Expansor>

      <Expansor titulo="Suporte">
        <button className="conteudo-expansor">• Ordens de serviços</button>
        <button className="conteudo-expansor">• Atendimentos</button>
        <button className="conteudo-expansor">• Agenda de usuários</button>
        <button className="conteudo-expansor">• Agendamento de serviços</button>

        <Pastas titulo="Cadastros">
          <button className="conteudo-expansor">• Diagnósticos</button>
          <button className="conteudo-expansor">• OS modelos</button>
          <button className="conteudo-expansor">• Respostas</button>
          <button className="conteudo-expansor">• Equipes</button>
          <button className="conteudo-expansor">• Assuntos</button>
          <button className="conteudo-expansor">• Eventos</button>
        </Pastas>
      </Expansor>

      <Expansor titulo="Hotsite"></Expansor>

      <Expansor titulo="CRM">
        <button className="conteudo-expansor">• Leads</button>
        <button className="conteudo-expansor">• Negociações</button>
        <button className="conteudo-expansor">• Prospecções</button>
        <Pastas titulo="Agenda"></Pastas>
        <Pastas titulo="Cadastros"></Pastas>
        <Pastas titulo="Prospecções"></Pastas>
        <Pastas titulo="Cobrança"></Pastas>
        <Pastas titulo="Marketing"></Pastas>
        <Pastas titulo="Mensagens"></Pastas>
      </Expansor>

      <Expansor titulo="Frota">
        <button className="conteudo-expansor">• Veículos</button>
        <button className="conteudo-expansor">• Condutores</button>
        <button className="conteudo-expansor">• Despesas com veículos</button>
        <button className="conteudo-expansor">• Veículos - Rastreamento</button>
        <button className="conteudo-expansor">• MDF-e</button>
      </Expansor>

      <Expansor titulo="Plataforma Voip">
        <Pastas titulo="Ramais">
          <button className="conteudo-expansor">• Ramal SIP - Clientes</button>
        </Pastas>

        <Pastas titulo="Registro de chamadas">
          <button className="conteudo-expansor">• Registro de chamadas</button>
        </Pastas>

        <Pastas titulo="Configurações">
          <button className="conteudo-expansor">
            • Configuração para Criação de Ramal
          </button>
          <button className="conteudo-expansor">• Plano de discagem</button>
          <button className="conteudo-expansor">
            • Range de números cadastrados
          </button>
          <button className="conteudo-expansor">
            • Visualizar Range de números
          </button>
        </Pastas>

        <Pastas titulo="Configurações Summit">
          <button className="conteudo-expansor">• Categorias</button>
          <button className="conteudo-expansor">• Partições</button>
          <button className="conteudo-expansor">• Licensas</button>
          <button className="conteudo-expansor">
            • Centro de custo summit
          </button>
        </Pastas>

        <Pastas titulo="Tarifação">
          <button className="conteudo-expansor">• Tarifas</button>
          <button className="conteudo-expansor">• Plano de tarifas</button>
        </Pastas>
      </Expansor>
      <Expansor titulo="MVNO/Telefonia móvel">
        <button className="conteudo-expansor">• Assinantes</button>
        <button className="conteudo-expansor">• Produtos IXC/MVNO</button>
      </Expansor>
    </div>
  );
}

export default Sistema;
