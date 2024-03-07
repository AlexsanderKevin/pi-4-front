import React, { useContext, useEffect, useState } from 'react'
import Modal from '../../../Modal/Modal'
import Input from '../../../Forms/Inputs/Input'
import FormContainer from '../../../Forms/Containers/FormContainer'
import BtnVoltar from '../../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'
import { TipoContext } from './TipoContext'
import api from '../../../../services/api'

const TipoModal = () => {
  const {
    editTarget, 
    setEditTarget, 
    fetchTipos, 
    loading, 
    setLoading 
  } = useContext(TipoContext)

  const [ nome, setNome ] = useState('')

  useEffect(() => {
    setNome(editTarget?.nome || '')
  }, [editTarget])

  const handleSubmit = event => {
    event.preventDefault()
    setLoading(true)
    const body = {nome}

    api.put(`/tipos/${editTarget?.id_tipo}`, body)
      .then(() => {
        fetchTipos()
        setEditTarget(null)
      }).catch(err => console.log(err.message))
  }

  return (
    <Modal title='Editar Tipo' active={editTarget}>
      <form style={{marginBottom: '0'}} onSubmit={handleSubmit}>
        <Input 
          name='nome'
          value={nome}
          onChange={({target}) => setNome(target.value)}
          required
        />
        <FormContainer>
          <BtnVoltar disabled={loading} onClick={() => setEditTarget(null)} />
          <BtnSalvar disabled={loading} />
        </FormContainer>
      </form>
    </Modal>
  )
}

export default TipoModal
