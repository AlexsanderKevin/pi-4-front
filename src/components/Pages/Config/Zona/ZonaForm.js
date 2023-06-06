import React, { useContext, useState } from 'react'
import ToggleForm from '../../../Forms/ToggleForm/ToggleForm'
import Input from '../../../Forms/Inputs/Input'
import Textarea from '../../../Forms/Inputs/Textarea'
import FormContainer from '../../../Forms/Containers/FormContainer'
import BtnReset from '../../../Forms/Buttons/BtnReset'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'
import { ZonaContext } from './ZonaContext'

const ZonaForm = () => {
  const [ nome, setNome ] = useState('')
  const [ descricao, setDescricao ] = useState('')
  const [ active, setActive ] = useState(false)

  const { fetchZonas, loading, setLoading } = useContext(ZonaContext)

  const handleSubmit = () => {
    setLoading(true)
    const body = {nome, descricao}

    fetch('https://api-pi-2on3.onrender.com/zonas', {
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
        value={descricao}
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
