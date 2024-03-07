import React, { createContext, useEffect, useState } from 'react'
import api from '../../../../services/api'

export const TipoContext = createContext()

export const TipoStorage = ({children}) => {
  const [ editTarget, setEditTarget ] = useState(null)
  const [ tipos, setTipos ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const fetchTipos = () => {
    setLoading(true)

    api.get('/tipos')
      .then((res) => {
        setTipos(res.data)
        setLoading(false)
      }).catch((error) => {console.log(error.message)})
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