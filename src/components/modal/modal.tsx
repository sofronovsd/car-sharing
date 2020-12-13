import React from "react";
import "./modal.scss";
import classNames from "classnames";

interface ModalProps {
  isHidden: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const Modal = ({ isHidden, onAccept, onDecline }: ModalProps) => {
  const modalClass = classNames("modal-window", {
    "modal-window__hidden": isHidden,
  });
  return (
    <div className={modalClass}>
      <div className="modal-window_content">
        <h4 className="modal-window_title">Подтвердить заказ</h4>
        <div className="modal-window_button-group">
          <button className="button button__medium" onClick={onAccept}>
            Подтвердить
          </button>
          <button
            className="button button__medium button__red"
            onClick={onDecline}
          >
            Вернуться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
