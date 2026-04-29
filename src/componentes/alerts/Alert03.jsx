import Alert from "./Alert";
import imagem from "../images/locker.png";

function Alert03() {
  return (
    <Alert
      imagem={imagem}
      titulo="401 Unauthorized!"
      descricao="Esta rota é protegida e não está disponível para uso externo."
      tipo="protegido"
    />
  );
}

export default Alert03;
