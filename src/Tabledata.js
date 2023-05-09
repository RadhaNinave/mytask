import TableDataDesign from "./TableDataDesign";
import { Context } from "./Context";
import { useContext } from "react";
import "./Tabledata.css";

const Tabledata = () => {
  const ctx = useContext(Context);
  const data = ctx.tabledata.products;
  console.log(data);
  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Select</th>
            <th>Sr.No</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
          {data.map((data) => {
            return (
              <TableDataDesign
                id={data.id}
                key={data.id}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Tabledata;
