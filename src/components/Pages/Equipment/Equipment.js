import React, { useEffect, useState } from 'react'
import styles from './Equipment.module.css'
import { useParams } from 'react-router-dom'

const Equipment = () => {
  const [ equipamento, setEquipamento ] = useState({})
  const { id } = useParams()

  const fetchEquipamento = targetId => {
    fetch(`http://35.198.52.93/equipamentos/${targetId}`)
    .then(res => res.json())
    .then(json => {
      setEquipamento(json)
    })
  }

  useEffect(() => fetchEquipamento(id), [id])

  const handleEdit = () => {
    console.log(equipamento)
  }

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <label styles={styles.headerLabel}>Detalhes:</label>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}> {equipamento?.nome} </h1>
          <buton 
            className={`button-default`}
            onClick={handleEdit}
          ><i className='pi pi-pencil'></i></buton>
        </div>
        <div className={styles.detailsContainer}>
          <p></p>
        </div>
      </header>
    </section>
  )
}

export default Equipment
