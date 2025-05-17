const provedor = {
  titulo: "Provedor",
  principais: [
    { chave: "autorizar_onus", label: "Autorizar ONUs" },
    { chave: "logins", label: "Logins" },
    { chave: "redes_adicionais", label: "Redes adicionais" },
    { chave: "planos_velocidades", label: "Planos de velocidades" },
    { chave: "concentradores_nas", label: "Concentradores (NAS)" },
    { chave: "transmissores_olt", label: "Transmissores (OLT)" },
    { chave: "cliente_fibra_onu", label: "Cliente Fibra (ONU)" },
  ],
  pastas: [
    {
      titulo: "Transmissores",
      botoes: [
        { chave: "pop", label: "POP - Ponto de transmissão" },
        { chave: "cliente_radio", label: "Cliente rádio" },
        { chave: "perfil_cliente_fibra", label: "Perfil cliente fibra" },
        { chave: "interface_fibra", label: "Interface fibra" },
        { chave: "interface_slot", label: "Interface slot" },
        { chave: "interface_radio", label: "Interface rádio" },
        { chave: "modelo_provisionamento", label: "Modelo de provisionamento" },
        { chave: "autorizacao_massa", label: "Autorização em massa" },
      ],
    },
    {
      titulo: "Pool IP",
      botoes: [
        { chave: "pools", label: "Pools" },
        { chave: "pool_radius", label: "Pool Radius" },
        { chave: "ip_fixo", label: "IP Fixo" },
        { chave: "ip_fixo_ipv6", label: "IP Fixo IPV6" },
        { chave: "pool_concentrador", label: "Pool concentrador" },
      ],
    },
    {
      titulo: "Radius",
      botoes: [
        { chave: "dns", label: "DNS" },
        { chave: "conexoes_radius", label: "Conexões Radius" },
        { chave: "checagem_login", label: "Checagem de login" },
        { chave: "checagem_grupo", label: "Checagem de grupo" },
        { chave: "resposta_grupo", label: "Resposta de grupo" },
        { chave: "planos_logins", label: "Planos X Logins" },
        {
          chave: "historico_login",
          label: "Histórico de alterações no login",
        },
      ],
    },
    {
      titulo: "CGNAT",
      botoes: [
        { chave: "integracoes_cgnat", label: "Integrações CGNAT" },
        { chave: "conexoes_radius_cgnat", label: "Conexões Radius CGNAT" },
        { chave: "faixas", label: "Faixas" },
      ],
    },
    {
      titulo: "Autenticação Radius",
      botoes: [
        {
          chave: "concentradores_autorizados",
          label: "Concentradores autorizados",
        },
        { chave: "logs_autenticacao", label: "Logs de autenticação" },
        { chave: "pos_autenticacao", label: "Pós autenticação" },
        { chave: "ips_autorizados", label: "IPs autorizados" },
        { chave: "usuarios", label: "Usuários" },
      ],
    },
    {
      titulo: "SpeedTest",
      botoes: [
        { chave: "servidores_speedtest", label: "Servidores de SpeedTest" },
        { chave: "resultados_speedtest", label: "Resultados SpeedTest" },
      ],
    },
    {
      titulo: "Integrações",
      botoes: [
        { chave: "integracoes", label: "Integrações" },
        { chave: "configuracoes_snmp", label: "Configurações SNMP" },
      ],
    },
    {
      titulo: "Monitoramento de ping",
      botoes: [
        {
          chave: "grupos_monitoramento_hosts",
          label: "Grupos de monitoramento de hosts",
        },
        { chave: "monitoramento_host", label: "Monitoramento de host" },
      ],
    },
    {
      titulo: "Configurações",
      botoes: [
        { chave: "configuracao_padrao", label: "Configuração padrão" },
        { chave: "circuitos", label: "Circuitos" },
        { chave: "hardware", label: "Hardware" },
        { chave: "ocorrencias_solucoes", label: "Ocorrências/Soluções" },
      ],
    },
    {
      titulo: "ACS",
      botoes: [
        { chave: "integracao_acs", label: "Integração" },
        { chave: "dispositivos", label: "Dispositivos" },
      ],
    },
    {
      titulo: "Rede Neutra - Client",
      botoes: [
        { chave: "operadores_neutros", label: "Operadores neutros" },
        { chave: "ordens_servico", label: "Ordens de serviço" },
        { chave: "reservas", label: "Reservas" },
      ],
    },
  ],
};

export default provedor;
