import { createContext, useEffect, useState } from "react";
import api from '../../../../services/api'

export const ZonaContext = createContext()

export const ZonaStorage = ({children}) => {
  const [ editTarget, setEditTarget ] = useState(null)
  const [ zonas, setZonas ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const fetchZonas = () => {
    setLoading(true)

    api.get('/zonas')
      .then((res) => {
        setZonas(res.data) 
        setLoading(false)
      }).catch((error) => {console.log(error.message)})
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
