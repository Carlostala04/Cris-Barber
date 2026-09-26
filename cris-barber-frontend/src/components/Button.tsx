import React from "react";
import "../index.css"
interface buttonProps {
  title: string;
  onAction: () => void;
}
export default function Button({ title, onAction }: buttonProps) {
  return <button onClick={onAction}>{title}</button>;
}
