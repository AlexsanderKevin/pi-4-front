import { createContext, useEffect, useState } from "react";

export const ZonaContext = createContext()

export const ZonaStorage = ({children}) => {
  const [ editTarget, setEditTarget ] = useState(null)
  const [ zonas, setZonas ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const fetchZonas = () => {
    setLoading(true)
    fetch(process.env.REACT_APP_API_URL + 'zonas')
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
