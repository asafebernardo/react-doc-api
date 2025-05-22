// src/dados/cliente.js
//import enviarSMS from "./enviarSMS";

function Cliente(nameFunction) {
  const metodos = {
    Get: () => ({
      Padrão: {
        url: "https://meudominio.com/webservice/v1/cliente",
        headers: "ixcsoft=listar",
        body: "{teste:teste}",
      },
      cURL: "curl GET...",
    }),
    Post: () => ({
      Padrão: {
        url: "https://meudominio.com/webservice/v1/cliente",
        headers: "ixcsoft=inserir",
        body: "{novo:cliente}",
      },
      cURL: "curl POST...",
    }),
    Put: () => ({
      Padrão: {
        url: "https://meudominio.com/webservice/v1/cliente",
        headers: "ixcsoft=alterar",
        body: "{id:1,nome:novo}",
      },
      cURL: "curl PUT...",
    }),
    Delete: () => ({
      Padrão: {
        url: "https://meudominio.com/webservice/v1/cliente",
        headers: "ixcsoft=excluir",
        body: "{id:1}",
      },
      cURL: "curl DELETE...",
    }),
  };

  return metodos[nameFunction]();
}

function Arquivo(nameFunction) {
  const metodos = {
    Get: () => ({
      Padrão: {
        url: "https://meudominio.com/webservice/v1/cliente_arquivos",
        headers: "ixcsoft=listar",
        body: "{teste:teste}",
      },
      cURL: "curl GET Arquivos...",
    }),
    Post: () => ({
      Padrão: {
        url: "https://meudominio.com/webservice/v1/cliente_arquivos",
        headers: "ixcsoft=inserir",
        body: "{arquivo:novo}",
      },
      cURL: "curl POST Arquivos...",
    }),
    Put: () => ({
      Padrão: {
        url: "https://meudominio.com/webservice/v1/cliente_arquivos",
        headers: "ixcsoft=alterar",
        body: "{id:1,arquivo:atualizado}",
      },
      cURL: "curl PUT Arquivos...",
    }),
    Delete: () => ({
      Padrão: {
        url: "https://meudominio.com/webservice/v1/cliente_arquivos",
        headers: "ixcsoft=excluir",
        body: "{id:1}",
      },
      cURL: "curl DELETE Arquivos...",
    }),
  };

  return metodos[nameFunction]();
}

const cliente = {
  titulo: "",
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
    Cliente: {
      titulo: "cliente",
      descricao: "Isso é uma rota de cliente.",
      campos: [
        { nome: "ID", descricao: "Identificador único do cliente" },
        { nome: "Nome", descricao: "Nome completo do cliente" },
      ],
      metodos: [
        { metodo: "GET", tipos_codigo: Cliente("Get") },
        { metodo: "POST", tipos_codigo: Cliente("Post") },
        { metodo: "PUT", tipos_codigo: Cliente("Put") },
        { metodo: "DELETE", tipos_codigo: Cliente("Delete") },
      ],
    },

    Arquivos: {
      titulo: "cliente_arquivo",
      descricao: "Isso é uma rota de cliente para arquivos.",
      campos: [
        { nome: "ID", descricao: "Identificador único do cliente" },
        { nome: "Nome", descricao: "Nome completo do cliente" },
      ],
      metodos: [
        { metodo: "GET", tipos_codigo: Arquivo("Get") },
        { metodo: "POST", tipos_codigo: Arquivo("Post") },
        { metodo: "PUT", tipos_codigo: Arquivo("Put") },
        { metodo: "DELETE", tipos_codigo: Arquivo("Delete") },
      ],
    },
  },
};

export default cliente;
