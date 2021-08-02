import "../left-hand-panel/left-hand-panel.scss";

function Modal({ children, isVisible }) {
  return isVisible && <div className="overlay">{children}</div>;
}

export default Modal;
