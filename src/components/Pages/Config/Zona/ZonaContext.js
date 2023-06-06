import { createContext, useEffect, useState } from "react";

export const ZonaContext = createContext()

export const ZonaStorage = ({children}) => {
  const [ editTarget, setEditTarget ] = useState(null)
  const [ zonas, setZonas ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const fetchZonas = () => {
    setLoading(true)
    fetch('https://api-pi-2on3.onrender.com/zonas')
    .then(res => res.json())
    .then(json => {
      setZonas(json)
      setLoading(false)
    })
  }

  useEffect(fetchZonas, [])

  return (
    <ZonaContext.Provider value={{
      editTarget,
      setEditTarget,
      fetchZonas,
      loading,
      setLoading,
      zonas,
    }}>
      {children}
    </ZonaContext.Provider>
  )
}
