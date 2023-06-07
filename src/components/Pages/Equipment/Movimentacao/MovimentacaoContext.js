import React, { createContext, useState } from 'react'

export const MovimenacaoContext = createContext()

export const MovimentacaoStorage = ({children}) => {
  const [ movimentacoes, setMovimentacoes ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const fetchMovimentacoes = id => {
    setLoading(true)
    fetch(`http://35.198.52.93/movimentacoes/equipamentos/${id}`)
    .then(response => response.json())
    .then(json => {
      setLoading(false)
      setMovimentacoes(json.reverse())
    }) 
  }

  return (
    <MovimenacaoContext.Provider value={{ 
      fetchMovimentacoes, 
      movimentacoes, 
      loading 
    }}>
      {children}
    </MovimenacaoContext.Provider>
  )
}
