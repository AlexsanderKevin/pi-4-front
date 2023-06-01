import React from 'react'
import Input from '../../../Forms/Inputs/Input'
import BtnVoltar from '../../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'
import Title from '../../../Title/Title'
import FormContainer from '../../../Forms/Containers/FormContainer'

const LoginForm = () => {
  return (
    <div className='form-page'>
      <Title>Login</Title>

      <form>
        <Input type='text' placeholder='usuário' name='Usuario'/>
        <Input type='password' placeholder='senha' name='Senha'/>

        <FormContainer>
          <BtnVoltar/>
          <BtnSalvar/>
        </FormContainer>
      </form>
    </div>
  )
}

export default LoginForm
