import React, { createContext, useState } from "react";

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const ListProvider = ({ children }) => {
  const [list, setList] = useState();

  return <Provider value={{ list, setList }}>{children}</Provider>;
};

export { store, ListProvider };
