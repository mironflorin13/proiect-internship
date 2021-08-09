import { useCallback, useEffect } from "react";

import "./modal.scss";

function Modal({ children, isVisible, onClose }) {
  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && isVisible) {
        onClose();
      }
    },
    [isVisible]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  if (!isVisible) {
    return null;
  }
  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
}

export default Modal;
