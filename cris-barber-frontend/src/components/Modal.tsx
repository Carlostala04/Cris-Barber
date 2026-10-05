import React from "react";
import type { ModalType } from "../types/modalTypes";
import Error from "../assets/icons/error";
import Success from "../assets/icons/success";
import "../styles/modal.css";
interface modalProps {
  title: string;
  type: ModalType;
  message: string;
  onAction: () => void;
}
const modalConfig: Record<
  ModalType,
  { icon: React.ReactNode; className: string }
> = {
  error: { icon: <Error />, className: "modal--error" },
  success: { icon: <Success />, className: "modal--success" },
};
export default function Modal({ title, message, onAction, type }: modalProps) {
  const { icon, className } = modalConfig[type];
  return (
    <div className={`modal-container ${className}`}>
      <span>{icon}</span>
      <h3>{title}</h3>
      <div className="modal-body">
        <p>{message}</p>
        <button type="button" onClick={onAction}>Cerrar</button>
      </div>
    </div>
  );
}
