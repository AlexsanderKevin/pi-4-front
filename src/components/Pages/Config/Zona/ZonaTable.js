import React, { useContext, useEffect, useState } from 'react'
import '../../../Table/Table.css'
import Loading from '../../../Helper/Loading'
import ActionContainer from '../../../Table/ActionContainer'
import { ZonaContext } from './ZonaContext'

const ZonaTable = () => {
  const { fetchZonas, zonas, loading, setEditTarget } = useContext(ZonaContext)

  useEffect(fetchZonas, [])

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {zonas?.map( zona => (
          <tr key={zona.id_zona}>
            <th>{zona.id_zona}</th>
            <td>{zona.nome}</td>
            <td>{zona.descricao}</td>
            <td>
              <ActionContainer
                targetTable={'zonas'} 
                target_id={zona?.id_zona}
                fetchFunction={fetchZonas}
                handleEdit={() => setEditTarget(zona)}
              />
            </td>
          </tr>
        ))}

        {loading ? (
          <tr>
            <th><Loading/></th>
            <td><Loading/></td>
            <td><Loading/></td>
            <td><Loading/></td>
          </tr>
        ) : null }
      </tbody>
    </table>
  )
}

export default ZonaTable
