import React, { createContext, useEffect, useState } from 'react'
import api from '../../../../services/api'

export const EquipmentContext = createContext()

export const EquipmentStorage = ({children}) => {
  const [ equipamentos, setEquipamentos ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const fetchEquipamentos = () => {
    setLoading(true)

    api.get('/equipamentos')
      .then((res) => {
        setEquipamentos(res.data) 
        setLoading(false)
      }).catch((error) => {console.log(error.message)})
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
  
