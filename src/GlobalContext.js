import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

export const GlobalStorage = ({children}) => {
  const [ loggedUser, setLoggedUser ] = useState(() => {
    return JSON.parse(localStorage.getItem('loggedUser'))
  })

  useEffect(() => {
    localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
  }, [loggedUser])

  return (
    <GlobalContext.Provider value={{loggedUser, setLoggedUser}}>
      {children}
    </GlobalContext.Provider>
  )
}
