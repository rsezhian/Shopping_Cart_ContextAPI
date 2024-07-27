import React, { createContext, useState } from "react";

export const ConCart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <ConCart.Provider value={{ cart, setCart }}>{children}</ConCart.Provider>
  );
};

export default Context;
