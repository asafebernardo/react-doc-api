const fiscal = {
  titulo: "Fiscal",
  principais: [
    { chave: "classificacao_tributaria", label: "Classificação tributária" },
    { chave: "nfe_inutilizadas", label: "NF-e inutilizadas" },
    { chave: "cfop_entradas", label: "Tabela CFOP das entradas" },
  ],
  pastas: [
    {
      titulo: "Gateways de Pagamento",
      botoes: [
        { chave: "pis_entrada", label: "PIS entrada XML" },
        { chave: "cofins_entrada", label: "COFINS entrada XML" },
        { chave: "ipi_entrada", label: "IPI entrada XML" },
        {
          chave: "ixcms_csosn_cst",
          label: "IXCMS de CSOSN p/ CST",
        },
      ],
    },
  ],
};

export default fiscal;
