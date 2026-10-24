import React from "react";
interface tableProps {
  tableTitles: string[];
  tableData: (string | number | Date)[];
  onAction: () => void;
}
export default function Table({
  tableTitles,
  tableData,
  onAction,
}: tableProps) {
  return (
    <table>
      <thead>
        <tr>
          {tableTitles.map((titles) => (
            <td>{titles}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          
        </tr>
      </tbody>
    </table>
  );
}
