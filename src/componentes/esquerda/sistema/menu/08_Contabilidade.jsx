const contabilidade = {
  titulo: "Contabilidade",
  principais: [{ chave: "lancamentos", label: "Lançamento contábeis" }],
  pastas: [
    {
      titulo: "Plano de contas",
      botoes: [
        {
          chave: "contas_sinteticas",
          label: "Contas contábeis sintéticas",
        },
        {
          chave: "contas_analiticas",
          label: "Contas contábeis analíticas",
        },
        {
          chave: "composicao_contas",
          label: "Composição de contas contábeis",
        },
      ],
    },
  ],
};

export default contabilidade;
