import React, { useEffect, useState } from 'react'
import styles from './Equipment.module.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import MovimentacaoTable from './Movimentacao/MovimentacaoTable'
import { MovimentacaoStorage } from './Movimentacao/MovimentacaoContext'
import ConfirmationModal from '../../Modal/ConfirmationModal'
import api from '../../../services/api'

const Equipment = () => {
  const [ equipamento, setEquipamento ] = useState({})
  const [ activeModal, setActiveModal ] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  const fetchEquipamento = targetId => {
    api.get(`/equipamentos/${targetId}`)
      .then(res => setEquipamento(res.data))
      .catch(err => console.log(err.message))
  }

  const deleteEquipamento = () => {
    api.delete(`/equipamentos/${id}`)
      .catch(err => console.log(err.message))
  }

  useEffect(() => fetchEquipamento(id), [id])

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

          <Link to={`/equipamentos/${equipamento.id_equipamento}/edit`}
            className={`button-default`}
          ><i className='pi pi-pencil'></i></Link>

          <button 
            className={`button-default`}
            onClick={() => setActiveModal(true)}
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

      <ConfirmationModal 
        active={activeModal} 
        setActive={setActiveModal}
        title='Atenção!' 
        message='Tem certeza que deseja deletar esse equipamento?'
        confirmationFunction={handleDelete}
      />
    </section>
  )
}

export default Equipment
