import React, { useState } from 'react'
import Input from '../../Forms/Inputs/Input'
import BtnVoltar from '../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'
import Title from '../../Title/Title'
import FormContainer from '../../Forms/Containers/FormContainer'
import { useNavigate } from 'react-router-dom'
import Select from '../../Forms/Inputs/Select'
import api from '../../../services/api'
import { useTranslation } from 'react-i18next'

const ResponsibleForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [ nome, setNome ] = useState('')
  const [ cargo, setCargo ] = useState('')
  const [ setor, setSetor ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ login, setLogin ] = useState('')
  const [ senha, setSenha ] = useState('')

  const postResponsible = (body) => {
    api.post('/responsaveis', body)
      .then(navigate('/responsaveis'))
      .catch(err => console.log(err.message))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const body = {
      nome,
      cargo,
      setor,
      email,
      login,
      senha
    }

    postResponsible(body)
  }

  return (
    <div className='form-page'>
       <Title>{t('Responsible registration')}</Title>
      <form onSubmit={handleSubmit}>
        <Input 
          type='text' 
          placeholder='fulano de tal' 
          name={t('Name')}
          value={nome}
          onChange={({target}) => setNome(target.value)}
        />
        <FormContainer>
          <Select 
            type='text' 
            placeholder='Tecnico Eletronico' 
            name={t('Role')}
            value={cargo}
            onChange={({target}) => setCargo(target.value)}
          >
            <option value='laboratorio'>{t('Laboratory')}</option>
            <option value='admin'>{t('Administrator')}</option>
          </Select>

          <Input 
            type='text' 
            placeholder='Manutencao eletronica' 
            name={t('Sector')}
            value={setor}
            onChange={({target}) => setSetor(target.value)}
          />
        </FormContainer>
        <Input 
          type='text' 
          placeholder='fulanodetal@' 
          name={t('Email')}
          value={email}
          onChange={({target}) => setEmail(target.value)}
        />
        <FormContainer>
          <Input 
            type='text' 
            placeholder='fulano' 
            name={t('Username')}
            value={login}
            onChange={({target}) => setLogin(target.value)}
          />
          <Input 
            type='password' 
            placeholder='***********' 
            name={t('Password')}
            value={senha}
            onChange={({target}) => setSenha(target.value)}
          />
        </FormContainer>
        <FormContainer>
          <BtnVoltar to="/responsaveis"/>
          <BtnSalvar/>
        </FormContainer>
      </form>
    </div>
  )
}

export default ResponsibleForm
