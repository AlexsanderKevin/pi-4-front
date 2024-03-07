import React, { useEffect, useState } from 'react'
import api from '../../services/api'

const ApiTest = () => {
  const [ carregando, setCarregando ] = useState(null)
  const [ tipos, setTipos ] = useState(null)

  const fetchTipos = async () => {
    setCarregando(true)

    api.get('/tipos')
      .then((res) => {
        setTipos(res.data) 
        setCarregando(false)
      }).catch((error) => {console.log(error.message)})
  }

  const handleClick = () => {
    fetchTipos()
  }

  return (
    <section>
      <h1>Atividade 10</h1>
      <h2>Fetch tipo</h2>
      <button onClick={handleClick}>Fetch</button>
      {carregando ? (
        <p>Carregando ...</p>
      ): (
        <ul>
          { tipos ? (
            <li key={ tipos[0].id_tipo }><b>{ tipos[0].id_tipo }- </b>{ tipos[0].nome }</li>
          ) : null }
        </ul>
      )}
    </section>
  )
}

export default ApiTest
