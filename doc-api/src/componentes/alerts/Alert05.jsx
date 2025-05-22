import Alert from "./Alert";
import imagem from "../images/error.png";

function Alert05() {
  return (
    <Alert
      imagem={imagem}
      titulo="Recurso não está disponível!"
      descricao="Esta funcionalidade ainda não foi desenvolvida ou liberada pelo IXC Provedor. "
      tipo="erro"
    />
  );
}

export default Alert05;
