import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalStorage = ({children}) => {
  const [ loggedUser, setLoggedUser ] = useState(null)

  return (
    <GlobalContext.Provider value={{loggedUser, setLoggedUser}}>
      {children}
    </GlobalContext.Provider>
  )
}
