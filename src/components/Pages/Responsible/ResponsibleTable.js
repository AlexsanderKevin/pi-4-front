import { NavLink } from 'react-router-dom'
import Title from '../../Title/Title'
import styles from './ResponsibleTable.module.css'
import { useEffect, useState } from 'react'
import Loading from '../../Helper/Loading'

const ResponsibleTable = () => {
  const [ responsibles, setResponsibles ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const fetchResponsibles = () => {
    setLoading(true)
    fetch('http://35.198.52.93/responsaveis/')
    .then(res => res.json())
    .then(json => {
        setResponsibles(json)
        setLoading(false)
      })
  }

  useEffect(fetchResponsibles, [])

  return (
    <section className={styles.responsibles}>
      <header>
        <Title>Responsáveis</Title>
        <NavLink to={'/responsaveis/new'} className={`button-default`}><i className='pi pi-plus'></i></NavLink>
      </header>
      <table className={`table ${styles.responsibleTable}`}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Usuário</th>
            <th>Email</th>
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
