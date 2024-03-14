import React, { useContext, useEffect, useState } from 'react'
import '../../../Table/Table.css'
import Loading from '../../../Helper/Loading'
import ActionContainer from '../../../Table/ActionContainer'
import TipoModal from './TipoModal'
import { TipoContext } from './TipoContext'
import { useTranslation } from 'react-i18next'

const TipoTable = () => {
  const { t } = useTranslation()
  const { fetchTipos, tipos, loading, setEditTarget } = useContext(TipoContext)

  useEffect(fetchTipos, [])

  return (
    <>
    <table className='table'>
      <thead>
        <tr>
          <th>{t('ID')}</th>
          <th>{t('Name')}</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        { tipos?.map( tipo => (
          <tr key={tipo.id_tipo}>
            <th>{tipo.id_tipo}</th>
            <td>{tipo.nome}</td>
            <td>
              <ActionContainer 
                targetTable={'tipos'} 
                target_id={tipo?.id_tipo}
                fetchFunction={fetchTipos}
                handleEdit={() => setEditTarget(tipo)}
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
    </>
  )
}

export default TipoTable
