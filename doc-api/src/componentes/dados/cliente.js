// src/dados/cliente.js
import enviarSMS from "./enviarSMS";

function blankCode() {
  return {
    padrao: { url: "", headers: "", body: "" },
    curl: "",
    php: "",
    node: "",
    python: "",
  };
}

const cliente = {
  titulo: "cliente",
  descricao: "Rotas relacionadas ao cliente",

  botoes: {
    "Enviar SMS": {
      arquivo: "Cliente/Botao/enviarSMS",
    },
    "Outro Botão": {
      arquivo: "Cliente/Botao/outroBotao",
    },
  },

  abas: {
    cliente: {
      titulo: "cliente",
      descricao: "Isso é uma rota de cliente.",
      campos: [
        { nome: "ID", descricao: "Identificador único do cliente" },
        { nome: "Nome", descricao: "Nome completo do cliente" },
      ],
      metodos: [
        { metodo: "GET", tipos_codigo: blankCode() },
        { metodo: "POST", tipos_codigo: blankCode() },
        { metodo: "PUT", tipos_codigo: blankCode() },
        { metodo: "DELETE", tipos_codigo: blankCode() },
      ],
    },

    arquivo: {
      titulo: "cliente_arquivo",
      descricao: "Isso é uma rota de cliente para arquivos.",
      campos: [
        { nome: "ID", descricao: "Identificador único do cliente" },
        { nome: "Nome", descricao: "Nome completo do cliente" },
      ],
      metodos: [
        { metodo: "GET", tipos_codigo: blankCode() },
        { metodo: "POST", tipos_codigo: blankCode() },
        { metodo: "PUT", tipos_codigo: blankCode() },
        { metodo: "DELETE", tipos_codigo: blankCode() },
      ],
    },
  },
};

export default cliente;
