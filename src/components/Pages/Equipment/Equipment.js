import React, { useEffect, useState } from 'react'
import styles from './Equipment.module.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import MovimentacaoTable from './Movimentacao/MovimentacaoTable'
import { MovimentacaoStorage } from './Movimentacao/MovimentacaoContext'

const Equipment = () => {
  const [ equipamento, setEquipamento ] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  const fetchEquipamento = targetId => {
    fetch(`http://35.198.52.93/equipamentos/${targetId}`)
    .then(res => res.json())
    .then(json => {
      setEquipamento(json)
    })
  }

  const deleteEquipamento = () => {
    fetch(`http://35.198.52.93/equipamentos/${id}`, {method: 'DELETE'})
  }

  useEffect(() => fetchEquipamento(id), [id])

  const handleEdit = () => {
    console.log(equipamento)
  }

  const handleDelete = () => {
    deleteEquipamento()
    navigate('/')
  }

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <label styles={styles.headerLabel}>Detalhes:</label>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}> {equipamento?.nome} </h1>
          <button 
            className={`button-default`}
            onClick={handleEdit}
          ><i className='pi pi-pencil'></i></button>
          <button 
            className={`button-default`}
            onClick={handleDelete}
          >
            <i className='pi pi-trash'></i>
          </button>
        </div>
      </header>
      <div className={styles.detailsContainer}>
        <p className={styles.infoTipo}><strong>Tipo</strong> {equipamento.tipo?.nome}</p>
        <p className={styles.infoCodSap}><strong>Cod.SAP</strong> {equipamento.codigo_sap}</p>
        <p className={styles.infoUnidadeMedida}><strong>Unidade de Medida</strong> {equipamento.unidade_medida}</p>
        <p className={styles.infoDescription}><strong>Descrição</strong> {equipamento.descricao}</p>
      </div>
      <MovimentacaoStorage>
        <MovimentacaoTable equipamentoId={id}/>
      </MovimentacaoStorage>
      <Link to={'/'} className='button-default'><i className='pi pi-arrow-left'></i>Voltar</Link>
    </section>
  )
}

export default Equipment
