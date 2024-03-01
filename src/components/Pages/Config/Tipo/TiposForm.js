import React, { useContext, useState } from 'react'
import ToggleForm from '../../../Forms/ToggleForm/ToggleForm'
import Input from '../../../Forms/Inputs/Input'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'
import FormContainer from '../../../Forms/Containers/FormContainer'
import BtnReset from '../../../Forms/Buttons/BtnReset'
import { TipoContext } from './TipoContext'

const TiposForm = () => {
  const [ nome, setNome ] = useState(null)
  const [ active, setActive ] = useState(false)
  const { fetchTipos, loading, setLoading } = useContext(TipoContext)

  const handleSubmit = () => {
    setLoading(true)
    const body = {nome}

    fetch(process.env.REACT_APP_API_URL + 'tipos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    .then(() => {
      fetchTipos()
      setActive(false)
    })
    .then(() => setLoading(false))
  }

  return (
    <ToggleForm title='Tipos' propActive={active} handleSubmit={handleSubmit}>
        <Input 
          type='text' 
          name='Nome' 
          required 
          placeholder='Periferico' 
          onChange={({target}) => setNome(target.value)}
        />
        <FormContainer>
          <BtnReset disabled={loading ? true : false}/>
          <BtnSalvar disabled={loading ? true : false}/>
        </FormContainer>
    </ToggleForm>
  )
}

export default TiposForm
