import React, { createContext, useEffect, useState } from 'react'

export const TipoContext = createContext()

export const TipoStorage = ({children}) => {
  const [ editTarget, setEditTarget ] = useState(null)
  const [ tipos, setTipos ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const fetchTipos = () => {
    setLoading(true)
    fetch('http://35.198.52.93/tipos')
    .then(res => res.json())
    .then(json => {
      setTipos(json)
      setLoading(false)
    })
  }

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