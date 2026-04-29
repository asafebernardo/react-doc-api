import "./Alert.css";

function Alert({ imagem, titulo, descricao, tipo = "sucesso" }) {
  return (
    <div className={`alerta alerta-${tipo}`}>
      <div className="icone">
        <img src={imagem} alt="Ícone de alerta" />
      </div>
      <div className="texto">
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
    </div>
  );
}

export default Alert;
