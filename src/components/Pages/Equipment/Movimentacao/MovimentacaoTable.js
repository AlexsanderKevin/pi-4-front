import React, { useContext, useState } from 'react'
import Title from '../../../Title/Title'
import styles from './MovimentacaoTable.module.css'
import { MovimenacaoContext } from './MovimentacaoContext'

const MovimentacaoTable = ({equipamentoId}) => {
  const { movimentacoes, fetchMovimentacoes } = useContext(MovimenacaoContext)
  console.log(movimentacoes)

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
        <tbody>
          { movimentacoes.map(movimentacao => (
            <tr key={movimentacao.id_movimentacao}>
              <td>{movimentacao.createdAt}</td>
              <td>{movimentacao.zona?.descricao}</td>
              <td>{movimentacao.responsavel?.nome}</td>
              <td>{movimentacao.zona?.nome}</td>
              <td>{movimentacao.quantidade}</td>
              <td>{movimentacao.observacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default MovimentacaoTable
