import React, { useContext, useState } from 'react'
import Title from '../../../Title/Title'
import styles from './MovimentacaoTable.module.css'
import { MovimenacaoContext } from './MovimentacaoContext'
import Loading from '../../../Helper/Loading'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const MovimentacaoTable = ({equipamentoId}) => {
  const { t } = useTranslation()
  const { movimentacoes, fetchMovimentacoes, loading } = useContext(MovimenacaoContext)

  useState(() => fetchMovimentacoes(equipamentoId), [fetchMovimentacoes])

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title>{t('History')}</Title>
        <Link to={`/movimentacoes/${equipamentoId}/new`} className='button-default'><i className='pi pi-sort-alt' ></i></Link>
      </header>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{t('Date')}</th>
            <th>{t('Status')}</th>
            <th>{t('Responsible')}</th>
            <th>{t('Zone')}</th>
            <th>{t('Qtd')}</th>
            <th>{t('Obs')}</th>
          </tr>
        </thead>
        <tbody>
          { !loading ? 
            movimentacoes.map(movimentacao => (
            <tr key={movimentacao.id_movimentacao}>
              <td>{movimentacao.createdAt.substring(0, 10)}</td>
              <td>{movimentacao.status}</td>
              <td>{movimentacao.responsavel?.nome}</td>
              <td>{movimentacao.zona?.nome}</td>
              <td>{movimentacao.quantidade}</td>
              <td>{movimentacao.observacao}</td>
            </tr>
          )) : (
            <tr>
              <td><Loading/></td>
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

export default MovimentacaoTable
