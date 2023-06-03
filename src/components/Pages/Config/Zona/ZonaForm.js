import React, { useContext, useState } from 'react'
import ToggleForm from '../../../Forms/ToggleForm/ToggleForm'
import Input from '../../../Forms/Inputs/Input'
import Textarea from '../../../Forms/Inputs/Textarea'
import FormContainer from '../../../Forms/Containers/FormContainer'
import BtnReset from '../../../Forms/Buttons/BtnReset'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'
import { ZonaContext } from './ZonaContext'

const ZonaForm = () => {
  const [ nome, setNome ] = useState(null)
  const [ descricao, setDescricao ] = useState(null)
  const [ active, setActive ] = useState(false)

  const { fetchZonas, loading, setLoading } = useContext(ZonaContext)

  const handleSubmit = () => {
    setLoading(true)
    const body = {nome, descricao}

    fetch('http://35.198.52.93/zonas', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    .then(() => {
      fetchZonas()
      setLoading(false)
      setActive(false)
    })
  }

  return (
    <ToggleForm title='Zonas' propActive={active} handleSubmit={handleSubmit}>
      <Input
        type='text'
        name='Nome'
        placeholder='Armario XYZ'
        required
        onChange={({target}) => setNome(target.value)}
      />
      <Textarea
        type='text'
        name='Descrição'
        placeholder='Aguardando Teste'
        required
        onChange={({target}) => setDescricao(target.value)}
      />
      <FormContainer>
        <BtnReset disabled={loading ? true : false}/>
        <BtnSalvar disabled={loading ? true : false}/>
      </FormContainer>
    </ToggleForm>
  )
}

export default ZonaForm
