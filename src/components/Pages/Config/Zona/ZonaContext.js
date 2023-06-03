import { createContext, useState } from "react";

export const ZonaContext = createContext()

export const ZonaStorage = ({children}) => {
  const [ editTarget, setEditTarget ] = useState(null)
  const [ zonas, setZonas ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const fetchZonas = () => {
    setLoading(true)
    fetch('http://35.198.52.93/zonas')
    .then(res => res.json())
    .then(json => {
      setZonas(json)
      setLoading(false)
    })
  }

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
