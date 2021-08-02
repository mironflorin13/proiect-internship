import "./modal.scss";

function Modal({ children, isVisible }) {
  return isVisible && <div className="overlay">{children}</div>;
}

export default Modal;
