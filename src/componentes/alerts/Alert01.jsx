import Alert from "./Alert";
import imagem from "../images/correct.png";

function Alert01() {
  return (
    <Alert
      imagem={imagem}
      titulo="Sucesso!"
      descricao="Código copiado para a área de transferência!"
      tipo="sucesso"
    />
  );
}

export default Alert01;
