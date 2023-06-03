import React, { useContext, useState } from 'react'
import Title from '../../../Title/Title'
import styles from './MovimentacaoTable.module.css'
import { MovimenacaoContext } from './MovimentacaoContext'

const MovimentacaoTable = ({equipamentoId}) => {
  const { movimentacoes, fetchMovimentacoes } = useContext(MovimenacaoContext)

  useState(() => fetchMovimentacoes(equipamentoId), [equipamentoId])

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
