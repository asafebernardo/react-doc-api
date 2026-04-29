import Alert from "./Alert";
import imagem from "../images/correct.png";

function Alert02() {
  return (
    <Alert
      imagem={imagem}
      titulo="Sucesso!"
      descricao="Arquivo baixado com sucesso!"
      tipo="sucesso"
    />
  );
}

export default Alert02;
