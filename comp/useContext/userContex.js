import React from "react";


export const userContext = React.createContext();

export const UserContextProvider = ({Children })=> {
      return <userContext.Provider value={"ram"}>{Children}</userContext.Provider>
} 