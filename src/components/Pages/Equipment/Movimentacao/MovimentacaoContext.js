import React, { createContext, useState } from 'react'

export const MovimenacaoContext = createContext()

export const MovimentacaoStorage = ({children}) => {
  const [ movimentacoes, setMovimentacoes ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const fetchMovimentacoes = id => {
    setLoading(true)
    fetch(`http://35.198.52.93/movimentacoes`)
    .then(response => response.json())
    .then(json => {
      const filtered = json.filter( item => item.id_equipamento === +id )
      setLoading(false)
      setMovimentacoes(filtered)
    }) 
  }

  return (
    <MovimenacaoContext.Provider value={{ fetchMovimentacoes, movimentacoes, loading }}>
      {children}
    </MovimenacaoContext.Provider>
  )
}
