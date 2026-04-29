const inmap = {
  titulo: "Inmap",
  principais: [
    { chave: "fiberdocs", label: "Fiberdocs" },
    { chave: "sales", label: "Sales" },
    { chave: "service", label: "Service" },
  ],
  pastas: [
    {
      titulo: "Elementos",
      botoes: [
        { chave: "caixas-de-atendimento", label: "Caixas de atendimento" },
        { chave: "caixas-de-emenda", label: "Caixas de emenda" },
        { chave: "caixas-subterraneas", label: "Caixas Subterrâneas" },
        { chave: "cabos", label: "Cabos" },
        { chave: "postes", label: "Postes" },
        { chave: "regioes-de-cobertura", label: "Regiões de cobertura" },
        { chave: "regioes-de-rede-neutra", label: "Regiões de rede neutra" },
        { chave: "projetos", label: "Projetos" },
      ],
    },
    {
      titulo: "Configurações",
      botoes: [
        {
          chave: "configuracoes-de-regioes-de-cobertura",
          label: "Configurações de regiões de cobertura",
        },
        {
          chave: "configuracoes-de-regioes-de-rede-neutra",
          label: "Configurações de regiões de rede neutra",
        },
        { chave: "configuracoes-de-cabo", label: "Configurações de cabo" },
        {
          chave: "importacao-de-arquivos-kml",
          label: "Importação de arquivos KML",
        },
        {
          chave: "projetos-por-colaboradores",
          label: "Projetos por colaboradores",
        },
      ],
    },
    {
      titulo: "Expansão de rede",
      botoes: [
        { chave: "projetos-de-execucao", label: "Projetos de execução" },
      ],
    },
  ],
};

export default inmap;
