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
        <Input type='text' placeholder='username' name='Usuario'/>
        <Input type='text' placeholder='password' name='Senha'/>

        <FormContainer>
          <BtnVoltar/>
          <BtnSalvar/>
        </FormContainer>
      </form>
    </div>
  )
}

export default LoginForm
