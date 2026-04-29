const financeiro = {
  titulo: "Financeiro",
  principais: [
    { chave: "movimentacao_financeira", label: "Movimentação financeira" },
    { chave: "transferencia_contas", label: "Transferência entre contas" },
    { chave: "conciliacao_bancaria", label: "Conciliação bancária" },
  ],
  pastas: [
    {
      titulo: "Arquivos de boletos",
      botoes: [
        { chave: "remessa_boletos", label: "Remessa boletos" },
        { chave: "retorno_lote", label: "Retorno bancário em lote" },
        { chave: "boletos_remessas", label: "Boletos em remessas" },
      ],
    },
    {
      titulo: "Cadastros",
      botoes: [
        { chave: "cheque_clientes", label: "Cheque de clientes" },
        { chave: "tipo_despesa", label: "Tipo de despesa" },
      ],
    },
    {
      titulo: "Débito em conta",
      botoes: [
        { chave: "remessa_debito", label: "Remessa débitos em conta" },
        {
          chave: "retorno_lote_debito",
          label: "Retorno em lote débito em conta",
        },
      ],
    },
    {
      titulo: "Cartão de crédito",
      botoes: [
        {
          chave: "pagamento_cartao",
          label: "Pagamentos cartão de crédito",
        },
      ],
    },
    {
      titulo: "Gateways de Pagamento",
      botoes: [{ chave: "retorno_pagamento", label: "Retorno de pagamento" }],
    },
  ],
};

export default financeiro;
