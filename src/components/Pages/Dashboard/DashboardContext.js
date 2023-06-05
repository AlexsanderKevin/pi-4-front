import React, { createContext, useState } from 'react'

export const DashboardContext = createContext()

export const DashboardStorage = ({children}) => {
  const [ movimentacoes, setMovimentacoes ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const fetchMovimentacoesByYear = (year) => {
    setLoading(true)
    fetch(`http://35.198.52.93/movimentacoes/dashboard/${year}`)
    .then(response => response.json())
    .then(json => {
        setMovimentacoes(json)
        setLoading(false)
    })
  }

  return (
    <DashboardContext.Provider value={{ 
        fetchMovimentacoesByYear, 
        movimentacoes, 
        loading 
    }}>
      {children}
    </DashboardContext.Provider>
  )
}
