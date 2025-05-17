// src/dados/cliente.js
//import enviarSMS from "./enviarSMS";

function Cliente(nameFunction) {
  const metodos = {
    Get: () => ({
      padrao: {
        url: "https://meudominio.com/webservice/v1/cliente",
        headers: "ixcsoft=listar",
        body: "{teste:teste}",
      },
      curl: "curl GET...",
    }),
    Post: () => ({
      padrao: {
        url: "https://meudominio.com/webservice/v1/cliente",
        headers: "ixcsoft=inserir",
        body: "{novo:cliente}",
      },
      curl: "curl POST...",
    }),
    Put: () => ({
      padrao: {
        url: "https://meudominio.com/webservice/v1/cliente",
        headers: "ixcsoft=alterar",
        body: "{id:1,nome:novo}",
      },
      curl: "curl PUT...",
    }),
    Delete: () => ({
      padrao: {
        url: "https://meudominio.com/webservice/v1/cliente",
        headers: "ixcsoft=excluir",
        body: "{id:1}",
      },
      curl: "curl DELETE...",
    }),
  };

  return metodos[nameFunction]();
}

function Arquivo(nameFunction) {
  const metodos = {
    Get: () => ({
      padrao: {
        url: "https://meudominio.com/webservice/v1/cliente_arquivos",
        headers: "ixcsoft=listar",
        body: "{teste:teste}",
      },
      curl: "curl GET Arquivos...",
    }),
    Post: () => ({
      padrao: {
        url: "https://meudominio.com/webservice/v1/cliente_arquivos",
        headers: "ixcsoft=inserir",
        body: "{arquivo:novo}",
      },
      curl: "curl POST Arquivos...",
    }),
    Put: () => ({
      padrao: {
        url: "https://meudominio.com/webservice/v1/cliente_arquivos",
        headers: "ixcsoft=alterar",
        body: "{id:1,arquivo:atualizado}",
      },
      curl: "curl PUT Arquivos...",
    }),
    Delete: () => ({
      padrao: {
        url: "https://meudominio.com/webservice/v1/cliente_arquivos",
        headers: "ixcsoft=excluir",
        body: "{id:1}",
      },
      curl: "curl DELETE Arquivos...",
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
