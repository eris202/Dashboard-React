import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext("");

export function MenuProvider({ children }) {
  const [rightMenuState, setRightMenuState] = useState(false);
  const [leftMenuState, setLeftMenuState] = useState(false);

  const functions = {
    rightMenu: () => {
      setRightMenuState(!rightMenuState);
    },
    leftMenu: () => {
      setLeftMenuState(!leftMenuState);
    },
  };

  return (
    <MenuContext.Provider
      value={{
        ...functions,
        rightMenuState,
        leftMenuState,
        setRightMenuState,
        setLeftMenuState,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export default function useMenu() {
  const getAllContext = useContext(MenuContext);
  console.log(getAllContext, "getAll");

  console.log(getAllContext);

  return getAllContext;
}
