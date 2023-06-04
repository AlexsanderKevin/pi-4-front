import React, { createContext, useEffect, useState } from 'react'

export const EquipmentContext = createContext()

export const EquipmentStorage = ({children}) => {
  const [ editTarget, setEditTarget ] = useState(null)
  const [ equipamentos, setEquipamentos ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const fetchEquipamentos = () => {
    setLoading(true)
    fetch('http://35.198.52.93/equipamentos')
      .then(res => res.json())
      .then(json => {
        setEquipamentos(json)
        setLoading(false)
      })
  }

  useEffect(() => fetchEquipamentos(), [])

  return (
    <EquipmentContext.Provider value={{
      editTarget,
      setEditTarget,
      fetchEquipamentos,
      loading,
      setLoading,
      equipamentos
    }}>
      {children}
    </EquipmentContext.Provider>
  )
}
  
