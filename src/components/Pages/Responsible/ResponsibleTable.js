import { NavLink } from 'react-router-dom'
import Title from '../../Title/Title'
import styles from './ResponsibleTable.module.css'
import { useEffect, useState } from 'react'
import Loading from '../../Helper/Loading'
import api from '../../../services/api'
import { useTranslation } from 'react-i18next'

const ResponsibleTable = () => {
  const { t } = useTranslation()
  const [ responsibles, setResponsibles ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const fetchResponsibles = () => {
    setLoading(true)

    api.get('/responsaveis')
      .then(res => {
        setResponsibles(res.data)
        setLoading(false)
      })
      .catch(err => console.log(err.message))
  }

  useEffect(fetchResponsibles, [])

  return (
    <section className={styles.responsibles}>
      <header>
        <Title>{t('Responsibles')}</Title>
        <NavLink to={'/responsaveis/new'} className={`button-default`}><i className='pi pi-plus'></i></NavLink>
      </header>
      <table className={`table ${styles.responsibleTable}`}>
        <thead>
          <tr>
            <th>{t('ID')}</th>
            <th>{t('Name')}</th>
            <th>{t('Role')}</th>
            <th>{t('Username')}</th>
            <th>{t('Email')}</th>
          </tr>
        </thead>
        <tbody>
          { !loading ? responsibles && responsibles.map( responsible => (
            <tr>
              <th>{responsible.id_responsavel}</th>
              <td>{responsible.nome}</td>
              <td>{responsible.cargo}</td>
              <td>{responsible.login}</td>
              <td>{responsible.email}</td>
            </tr>
          )) : (
            <tr>
              <td><Loading/></td>
              <td><Loading/></td>
              <td><Loading/></td>
              <td><Loading/></td>
              <td><Loading/></td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}

export default ResponsibleTable
