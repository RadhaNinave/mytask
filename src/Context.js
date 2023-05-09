import axios from "axios";
import React, { useEffect, useState } from "react";

export const Context = React.createContext({
  tabledata: [],
});

const ContextProvider = (props) => {
  const [IsTable, SetIsTable] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      SetIsTable(res.data);
    };
    getdata();
  }, []);
  const DeafaultValue = {
    tabledata: IsTable,
  };
  return (
    <Context.Provider value={DeafaultValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
