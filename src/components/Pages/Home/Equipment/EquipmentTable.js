import React, { useContext } from 'react'
import styles from './EquipmentTable.module.css'
import '../../../Table/Table.css'
import { EquipmentContext } from './EquipmentContext'
import Loading from '../../../Helper/Loading'
import { useNavigate } from 'react-router-dom'

const EquipmentTable = () => {
  const { equipamentos, loading } = useContext(EquipmentContext)
  const navigate = useNavigate()

  const handleNavigation = targetId => {
    navigate(`/equipamentos/${targetId}`)
  }

  return (
      <table className={`${styles.equipTable}`}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Prioridade</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          { !loading ? (
             equipamentos.map( equipamento => (
              <tr
                className={styles.tr}
                onClick={() => handleNavigation(equipamento.id_equipamento)} 
                key={equipamento.id_equipamento}
              >
                <th>{equipamento.id_equipamento}</th>
                <td>{equipamento.nome}</td>
                <td>{equipamento.tipo?.nome}</td>
                <td>{equipamento.prioridade}</td>
                <td>{equipamento.descricao}</td>
              </tr>
            ))
          ) : (
            <tr>
              <th><Loading/></th>
              <td><Loading/></td>
              <td><Loading/></td>
              <td><Loading/></td>
              <td><Loading/></td>
            </tr>
          )}
        </tbody>
      </table>
  )
}

export default EquipmentTable
