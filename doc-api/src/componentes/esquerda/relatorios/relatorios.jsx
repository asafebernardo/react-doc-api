import Expansor from "../expansor";
import Pastas from "../pastas";

function Relatorios() {
  return (
    <div className="relatorios">
      <Expansor titulo="Relatórios de cadastros">
        <button className="conteudo-expansor">• Relatório de clientes</button>
      </Expansor>

      <Expansor titulo="Relatórios de estoque">
        <button className="conteudo-expansor">• Relatório de produtos</button>
        <button className="conteudo-expansor">
          • Relatório de inventário de Estoque por Colaborador
        </button>
      </Expansor>

      <Expansor titulo="Relatórios de provedor">
        <Pastas titulo="Relatório contratos">
          <button className="conteudo-expansor">• Relatório contratos</button>
        </Pastas>
      </Expansor>

      <Expansor titulo="Relatórios fiscais">
        <Pastas titulo="Relatórios nota modelo 21">
          <button className="conteudo-expansor">
            • Relatórios nota modelo 21/22
          </button>
        </Pastas>
      </Expansor>
    </div>
  );
}

export default Relatorios;
