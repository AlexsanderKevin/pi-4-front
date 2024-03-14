import React, { useContext, useState } from 'react'
import ToggleForm from '../../../Forms/ToggleForm/ToggleForm'
import Input from '../../../Forms/Inputs/Input'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'
import FormContainer from '../../../Forms/Containers/FormContainer'
import BtnReset from '../../../Forms/Buttons/BtnReset'
import { TipoContext } from './TipoContext'
import api from '../../../../services/api'
import { useTranslation } from 'react-i18next'

const TiposForm = () => {
  const { t } = useTranslation()
  const [ nome, setNome ] = useState(null)
  const [ active, setActive ] = useState(false)
  const { fetchTipos, loading, setLoading } = useContext(TipoContext)

  const handleSubmit = () => {
    setLoading(true)
    const body = {nome}

    api.post('/tipos', body)
      .then(() => {
        fetchTipos()
        setActive(false)
        setLoading(false)
      })
      .catch(err => console.log(err.message))
  }

  return (
    <ToggleForm title={t('Types')} propActive={active} handleSubmit={handleSubmit}>
        <Input 
          type='text' 
          name={t('Name')}
          required 
          placeholder={t('Periferic')}
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
