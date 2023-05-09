import { useState } from "react";
import "./TableDataDesign.css";

const TableDataDesign = (props) => {
  const [checked, SetIsCheacked] = useState();
  


  return (
    <tr
      className={checked ? `cheackedata` : " "}
      onChange={() => {
        SetIsCheacked(!checked);
      }}
    >
      <td>
        <input
          type="checkbox"
          onChange={(e) => {
            SetIsCheacked(e.target.value);
          }}
        />
      </td>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.description}</td>
    </tr>
  );
};

export default TableDataDesign;
