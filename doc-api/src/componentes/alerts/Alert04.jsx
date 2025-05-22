import Alert from "./Alert";
import imagem from "../images/alert.png";

function Alert04() {
  return (
    <Alert
      imagem={imagem}
      titulo="Página em desenvolvimento!"
      descricao="Esta página ainda está em desenvolvimento e será disponibilizada em breve."
      tipo="erro"
    />
  );
}

export default Alert04;
