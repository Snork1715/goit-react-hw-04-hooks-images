import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

export default function Modal({ onClose, bigImage }) {
  useEffect(() => {
    window.addEventListener("keydown", handleEscClose);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  });

  const handleEscClose = (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img src={bigImage} alt="" />
      </div>
    </div>,
    modalRoot
  );
}
