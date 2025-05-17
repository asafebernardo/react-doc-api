const cadastros = {
  titulo: "Cadastros",
  principais: [
    { chave: "cliente", label: "Clientes" },
    { chave: "cliente_contrato", label: "Contratos" },
    { chave: "produto", label: "Produtos" },
    { chave: "fornecedor", label: "Fornecedor" },
    { chave: "estrutura", label: "Estruturas" },
    { chave: "cpf_cnpj", label: "Central de consultas (CPF/CNPJ)" },
  ],
  pastas: [
    {
      titulo: "Clientes",
      botoes: [
        { chave: "condominios", label: "Condomínios" },
        { chave: "tipos_clientes", label: "Tipos de clientes" },
      ],
    },
    {
      titulo: "Contratos",
      botoes: [
        { chave: "tipo_cobranca", label: "Tipo de cobrança" },
        { chave: "planos_venda", label: "Planos de venda" },
        {
          chave: "servicos_descontos",
          label: "Serviços e descontos adicionais",
        },
        {
          chave: "reajuste_valor",
          label: "Reajuste valor de contrato (acréscimos)",
        },
        {
          chave: "parametros_desconto_acrescimo",
          label: "Parâmetros desconto/acréscimo",
        },
        {
          chave: "modelos_contrato",
          label: "Modelos de contrato de cliente",
        },
        { chave: "indexadores", label: "Indexadores de contratos" },
        {
          chave: "parametros_financeiro_retroativo",
          label:
            "Parâmetros de descontos para Contratos com financeiros retroativos",
        },
      ],
    },
    {
      titulo: "Produtos",
      botoes: [
        { chave: "grupo_produtos", label: "Grupo de produtos" },
        { chave: "subgrupos_produtos", label: "Subgrupos de produtos" },
        { chave: "unidades", label: "Unidades" },
        { chave: "codigo_servico_nf13", label: "Cod. dos serviços (NF13)" },
        { chave: "calculo_precos_geral", label: "Calculo preços geral" },
        {
          chave: "calculo_precos_entrada",
          label: "Calculo preços por entrada",
        },
        { chave: "cest", label: "CEST" },
        { chave: "cfop", label: "CFOP" },
        { chave: "ncm", label: "NCM" },
        {
          chave: "classificacao_franquia",
          label: "Classificação produtos franquia",
        },
      ],
    },
    {
      titulo: "Fornecedores",
      botoes: [
        { chave: "tipo_fornecedor", label: "Tipo de Fornecedor" },
        { chave: "transportadoras", label: "Transportadoras" },
        { chave: "vendedores", label: "Vendedores" },
        { chave: "operadoras_telefonia", label: "Operadoras de telefonia" },
      ],
    },
    {
      titulo: "Financeiro",
      botoes: [
        { chave: "carteira_cobranca", label: "Carteira de cobrança" },
        { chave: "contas", label: "Contas" },
        { chave: "condicoes_pagamento", label: "Condições de pagamento" },
        { chave: "motivos_desconto", label: "Motivos de desconto" },
        { chave: "modelo_rps", label: "Modelo impressão de RPS" },
        { chave: "moedas", label: "Moedas" },
        { chave: "feriados", label: "Feriados" },
        { chave: "motivo_cancelamento", label: "Motivo de cancelamento" },
        { chave: "modelo_recibo", label: "Modelo de recibo" },
        {
          chave: "config_pagamento",
          label: "Configurações alternativas de pagamento",
        },
      ],
    },
    {
      titulo: "Tabela de preços",
      botoes: [{ chave: "tabela_precos", label: "Tabela de preços" }],
    },
    {
      titulo: "Locais",
      botoes: [
        { chave: "cidade", label: "Cidade" },
        { chave: "uf", label: "UF" },
        { chave: "pais", label: "País" },
      ],
    },
    {
      titulo: "TV/SVA",
      botoes: [
        { chave: "usuarios_sva", label: "Usuários SVA" },
        { chave: "usuarios_tv", label: "Usuários TV" },
        { chave: "pacotes_tv", label: "Pacotes TV" },
        { chave: "equipamentos_tv", label: "Equipamento TV" },
        { chave: "canais", label: "Canais" },
      ],
    },
    {
      titulo: "IOT",
      botoes: [],
    },
  ],
};

export default cadastros;
