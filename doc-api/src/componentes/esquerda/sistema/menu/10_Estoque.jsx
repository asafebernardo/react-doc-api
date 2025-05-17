const estoque = {
  titulo: "Estoque",
  principais: [
    { chave: "meu_estoque", label: "Meu estoque" },
    { chave: "inventario", label: "Inventário" },
    { chave: "patrimonios", label: "Patrimônios" },
    { chave: "almoxarifados", label: "Almoxarifados" },
    {
      chave: "requisicoes_materiais",
      label: "Requisições de materiais",
    },
  ],
  pastas: [
    {
      titulo: "Transferências",
      botoes: [
        {
          chave: "transferencia_confirmacao",
          label: "Transferência com confirmação",
        },
        {
          chave: "transferencia_almoxarifados",
          label: "Transferência entre almoxarifados",
        },
        {
          chave: "registros_transferencias",
          label: "Registros de transferências",
        },
      ],
    },
    {
      titulo: "Cadastros",
      botoes: [
        {
          chave: "motivo_cancelamento",
          label: "Motivo de cancelamento",
        },
        {
          chave: "motivo_inutilizacao",
          label: "Motivo de Inutilização",
        },
        {
          chave: "modelo_etiqueta",
          label: "Modelo de impressão de etiqueta",
        },
      ],
    },
  ],
};

export default estoque;
