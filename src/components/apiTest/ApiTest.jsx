import React, { useEffect, useState } from 'react'

const ApiTest = () => {
  const [ carregando, setCarregando ] = useState(null)
  const [ tipos, setTipos ] = useState(null)

  const fetchTipos = async () => {
    const response = await fetch('http://35.198.52.93/tipos')
    const json = await response.json()
    setTipos(json)
    setCarregando(false)
    return {response, json}
  }

  const handleClick = () => {
    setCarregando(true)
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
