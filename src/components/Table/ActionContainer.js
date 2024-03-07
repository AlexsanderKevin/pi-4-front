import React, { useState } from 'react'
import styles from './ActionContainer.module.css'
import api from '../../services/api'

const ActionContainer = ({ handleEdit, target_id, targetTable, fetchFunction }) => {
  const [ confirmMode, setConfirmMode ] = useState(false)
  const [ loading, setLoading ] = useState(false)

  const handleDelete = () => {
    setLoading(true)

    api.delete(`${targetTable}/${target_id}`)
      .then(fetchFunction)
      .catch(err => console.log(err.message))
  }

  return (
    <div className={styles.div}>
      <i className='pi pi-ellipsis-h button-default'></i>

      {!confirmMode ? (
        <>
        <button className='button-default' onClick={handleEdit}><i className='pi pi-pencil'></i></button>
        <button className='button-default' onClick={() => setConfirmMode(true)}><i className='pi pi-trash'></i></button>
        </>
      ) : (
        <>
        <button className='button-default' disabled={loading} onClick={() => setConfirmMode(false)}><i className='pi pi-times'></i></button>
        <button className='button-default' disabled={loading} onClick={handleDelete}><i className='pi pi-check'></i></button>
        </>
      )}
    </div>
  )
}

export default ActionContainer
