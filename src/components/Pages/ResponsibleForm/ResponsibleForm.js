import React from 'react'
import Input from '../../Forms/Inputs/Input'
import BtnVoltar from '../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'
import Title from '../../Title/Title'
import FormContainer from '../../Forms/Containers/FormContainer'

const ResponsibleForm = () => {
  return (
    <div className='form-page'>
       <Title>Cadastro de Responsaveis</Title>
      <form>
        <Input type='text' placeholder='fulano de tal' name='Nome'/>
        <FormContainer>
          <Input type='text' placeholder='Tecnico Eletronico' name='Cargo'/>
          <Input type='text' placeholder='Manutencao eletronica' name='Setor'/>
        </FormContainer>
        <Input type='text' placeholder='fulanodetal@' name='Email'/>
        <FormContainer>
          <Input type='text' placeholder='fulano' name='Login'/>
          <Input type='password' placeholder='***********' name='Senha'/>
        </FormContainer>
        <FormContainer>
          <BtnVoltar/>
          <BtnSalvar/>
        </FormContainer>
      </form>
    </div>
  )
}

export default ResponsibleForm
