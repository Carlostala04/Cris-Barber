import React, { type ReactNode } from "react";
import "../styles/table.css"
export interface Column<T> {
  header: string;
  key?: keyof T;
  render?: (row: T) => ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string | number;
  onAction?: (row: T) => void; // opcional y con la fila
}

export default function Table<T>({ data, columns, rowKey, onAction }: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.header}>{col.header}</th>
          ))}
          {onAction && <th>Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length + (onAction ? 1 : 0)}>
              No hay datos para mostrar
            </td>
          </tr>
        ) : (
          data.map((row) => (
            <tr key={rowKey(row)}>
              {columns.map((col) => (
                <td key={col.header}>
                  {col.render ? col.render(row) : String(row[col.key!])}
                </td>
              ))}
              {onAction && (
                <td>
                  <button onClick={() => onAction(row)}>Detalles</button>
                </td>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}