const voip = {
  titulo: "Plataforma Voip",
  principais: [],
  pastas: [
    {
      titulo: "Ramais",
      botoes: [{ chave: "ramal-sip-clientes", label: "Ramal SIP - Clientes" }],
    },
    {
      titulo: "Registro de chamadas",
      botoes: [
        { chave: "registro-de-chamadas", label: "Registro de chamadas" },
      ],
    },
    {
      titulo: "Configurações",
      botoes: [
        {
          chave: "configuracao-para-criacao-de-ramal",
          label: "Configuração para Criação de Ramal",
        },
        { chave: "plano-de-discagem", label: "Plano de discagem" },
        {
          chave: "range-de-numeros-cadastrados",
          label: "Range de números cadastrados",
        },
        {
          chave: "visualizar-range-de-numeros",
          label: "Visualizar Range de números",
        },
      ],
    },
    {
      titulo: "Configurações Summit",
      botoes: [
        { chave: "categorias", label: "Categorias" },
        { chave: "particoes", label: "Partições" },
        { chave: "licensas", label: "Licensas" },
        { chave: "centro-de-custo-summit", label: "Centro de custo summit" },
      ],
    },
    {
      titulo: "Tarifação",
      botoes: [
        { chave: "tarifas", label: "Tarifas" },
        { chave: "plano-de-tarifas", label: "Plano de tarifas" },
      ],
    },
  ],
};

export default voip;
