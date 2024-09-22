import { useNavigate } from "react-router-dom";
import closeImg from "../../assets/icons/icons8-close.svg";
import "./CloseButton.scss";

function Close({ setOpen }) {
  function close(params) {
    setOpen(false);
  }
  return (
    <section onClick={close}>
      <img src={closeImg}></img>
    </section>
  );
}
export default Close;
