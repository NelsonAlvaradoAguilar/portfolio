import { useNavigate } from "react-router-dom";
import closeImg from "../../assets/icons/icons8-close.svg";
import "./CloseButton.scss";

function Close({ setOpen, open }) {
  function close(params) {
   if (!open) {
    setOpen(false)
   }
  }
  return (
    <section >
      <img  src={closeImg}></img>
    </section>
  );
}
export default Close;
