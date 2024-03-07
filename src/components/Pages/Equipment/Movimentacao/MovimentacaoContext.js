import React, { createContext, useState } from 'react'
import api from '../../../../services/api'

export const MovimenacaoContext = createContext()

export const MovimentacaoStorage = ({children}) => {
  const [ movimentacoes, setMovimentacoes ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const fetchMovimentacoes = id => {
    setLoading(true)

    api.get(`/movimentacoes/equipamentos/${id}`)
    .then(res => {
      setLoading(false)
      setMovimentacoes(res.data.reverse())
    }).catch(err => console.log(err.message))
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
