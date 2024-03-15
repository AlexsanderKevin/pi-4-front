import React, { useEffect, useState } from 'react'
import styles from './Equipment.module.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import MovimentacaoTable from './Movimentacao/MovimentacaoTable'
import { MovimentacaoStorage } from './Movimentacao/MovimentacaoContext'
import ConfirmationModal from '../../Modal/ConfirmationModal'
import api from '../../../services/api'
import { useTranslation } from 'react-i18next'

const Equipment = () => {
  const { t } = useTranslation()
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
        <label styles={styles.headerLabel}>{t('Details')}:</label>
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
        <p className={styles.infoTipo}><strong>{t('Type')}</strong> {equipamento.tipo?.nome}</p>
        <p className={styles.infoCodSap}><strong>{t('SAP Code')}</strong> {equipamento.codigo_sap}</p>
        <p className={styles.infoUnidadeMedida}><strong>{t('Measure unity')}</strong> {equipamento.unidade_medida}</p>
        <p className={styles.infoDescription}><strong>{t('Description')}</strong> {equipamento.descricao}</p>
      </div>
      <MovimentacaoStorage>
        <MovimentacaoTable equipamentoId={id}/>
      </MovimentacaoStorage>
      <Link to={'/'} className='button-default'><i className='pi pi-arrow-left'></i>{t('Back')}</Link>

      <ConfirmationModal 
        active={activeModal} 
        setActive={setActiveModal}
        title={t('Attention!')}
        message={t('Are you sure you want to delete this equipment?')}
        confirmationFunction={handleDelete}
      />
    </section>
  )
}

export default Equipment
