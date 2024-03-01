import React, { createContext, useEffect, useState } from 'react'

export const TipoContext = createContext()

export const TipoStorage = ({children}) => {
  const [ editTarget, setEditTarget ] = useState(null)
  const [ tipos, setTipos ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const fetchTipos = () => {
    setLoading(true)
    fetch(process.env.REACT_APP_API_URL + '/tipos')
    .then(res => res.json())
    .then(json => {
      setTipos(json)
      setLoading(false)
    })
  }

  useEffect(fetchTipos, [])

  return (
    <TipoContext.Provider value={{
      editTarget, 
      setEditTarget, 
      fetchTipos,
      loading,
      setLoading,
      tipos
    }}>
      {children}
    </TipoContext.Provider>
  )
}