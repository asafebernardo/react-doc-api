const saidas = {
  titulo: "Saídas",
  principais: [
    { chave: "venda", label: "Venda" },
    { chave: "nfcom", label: "O que é NFCom 62" },
    { chave: "pedido_compra", label: "Pedido de compra" },
  ],
  pastas: [
    {
      titulo: "Pedidos",
      botoes: [
        { chave: "pedido_venda", label: "Pedido de venda" },
        { chave: "pedido_ecommerce", label: "Pedido e-commerce" },
        { chave: "pedido_os", label: "Pedido de venda via O.S" },
        { chave: "pedido_ordem_servico", label: "Pedido de ordem de serviço" },
      ],
    },
    {
      titulo: "Cadastros",
      botoes: [{ chave: "modelo_venda", label: "Modelo de venda" }],
    },
  ],
};

export default saidas;
