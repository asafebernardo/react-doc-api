// src/dados/enviarSMS.js

function blankCode() {
  return {
    padrao: { url: "", headers: "", body: "" },
    curl: "",
    php: "",
    node: "",
    python: "",
  };
}

const enviarSMS = {
  titulo: "Enviar SMS (botaoAjax_22282)",
  descricao: "Rota para enviar SMS ao cliente.",

  abas: {
    enviar_sms: {
      titulo: "Enviar SMS",
      descricao: "Serve para enviar SMS ao cliente.",
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

export default enviarSMS;
