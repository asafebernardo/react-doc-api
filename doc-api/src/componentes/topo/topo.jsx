import "../topo/topo.css";
import Asafe from "../images/asafe.png";
// import Busca from "./busca";

function Topo() {
  return (
    <div className="topo">
      {/* <Busca /> */}
      <div className="madeBy">
        <span>Feito por Asafe Bernardo</span>
        <a
          href="https://github.com/asafebernardo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="asafe" src={Asafe} alt="Logo Asafe Bernardo" />
        </a>
      </div>
    </div>
  );
}

export default Topo;
