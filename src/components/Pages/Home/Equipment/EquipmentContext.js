import React, { createContext, useEffect, useState } from 'react'

export const EquipmentContext = createContext()

export const EquipmentStorage = ({children}) => {
  const [ equipamentos, setEquipamentos ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const fetchEquipamentos = () => {
    setLoading(true)
    fetch('https://api-pi-2on3.onrender.com/equipamentos')
      .then(res => res.json())
      .then(json => {
        setEquipamentos(json)
        setLoading(false)
      })
  }

  useEffect(() => fetchEquipamentos(), [])

  return (
    <EquipmentContext.Provider value={{
      equipamentos, 
      fetchEquipamentos,
      loading,
      setLoading
    }}>
      {children}
    </EquipmentContext.Provider>
  )
}
  
