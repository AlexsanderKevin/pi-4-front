import React, { useState } from 'react'
import Input from '../../Forms/Inputs/Input'
import BtnVoltar from '../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'
import Title from '../../Title/Title'
import FormContainer from '../../Forms/Containers/FormContainer'
import { useNavigate } from 'react-router-dom'
import Select from '../../Forms/Inputs/Select'

const ResponsibleForm = () => {
  const navigate = useNavigate()

  const [ nome, setNome ] = useState('')
  const [ cargo, setCargo ] = useState('')
  const [ setor, setSetor ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ login, setLogin ] = useState('')
  const [ senha, setSenha ] = useState('')

  const postResponsible = (body) => {
    fetch(`http://35.198.52.93/responsaveis`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    .then(navigate('/responsaveis'))
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
       <Title>Cadastro de Responsável</Title>
      <form onSubmit={handleSubmit}>
        <Input 
          type='text' 
          placeholder='fulano de tal' 
          name='Nome'
          value={nome}
          onChange={({target}) => setNome(target.value)}
        />
        <FormContainer>
          <Select 
            type='text' 
            placeholder='Tecnico Eletronico' 
            name='Cargo'
            value={cargo}
            onChange={({target}) => setCargo(target.value)}
          >
            <option value='laboratorio'>Laboratorio</option>
            <option value='admin'>Administrador</option>
          </Select>

          <Input 
            type='text' 
            placeholder='Manutencao eletronica' 
            name='Setor'
            value={setor}
            onChange={({target}) => setSetor(target.value)}
          />
        </FormContainer>
        <Input 
          type='text' 
          placeholder='fulanodetal@' 
          name='Email'
          value={email}
          onChange={({target}) => setEmail(target.value)}
        />
        <FormContainer>
          <Input 
            type='text' 
            placeholder='fulano' 
            name='Login'
            value={login}
            onChange={({target}) => setLogin(target.value)}
          />
          <Input 
            type='password' 
            placeholder='***********' 
            name='Senha'
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
