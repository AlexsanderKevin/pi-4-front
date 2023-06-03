import React from 'react'
import Title from '../../../Title/Title'
import styles from './MovimentacaoTable.module.css'

const MovimentacaoTable = () => {
  return (
    <section className={styles.section}>
      <header>
        <Title>Histórico</Title>
      </header>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Status</th>
            <th>Responsável</th>
            <th>Zona</th>
            <th>Qtd</th>
            <th>Obs</th>
          </tr>
        </thead>
      </table>
    </section>
  )
}

export default MovimentacaoTable
