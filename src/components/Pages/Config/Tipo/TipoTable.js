import React, { useContext, useEffect, useState } from 'react'
import '../../../Table/Table.css'
import Loading from '../../../Helper/Loading'
import ActionContainer from '../../../Table/ActionContainer'
import TipoModal from './TipoModal'
import { TipoContext } from './TipoContext'

const TipoTable = ({tipos, loading, fetchTipos}) => {
  const context = useContext(TipoContext)

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        { tipos.map( tipo => (
          <tr key={tipo.id_tipo}>
            <th>{tipo.id_tipo}</th>
            <td>{tipo.nome}</td>
            <td>
              <ActionContainer 
                targetTable={'tipos'} 
                target_id={tipo?.id_tipo}
                fetchFunction={fetchTipos}
                handleEdit={() => context.setEditTarget(tipo)}
              />
            </td>
          </tr>
        ))}

        { loading ? (
          <tr>
            <th><Loading/></th>
            <td><Loading/></td>
            <td><Loading/></td>
          </tr>
        ) : null}
      </tbody>
    </table>
    <TipoModal/>
    </>
  )
}

export default TipoTable