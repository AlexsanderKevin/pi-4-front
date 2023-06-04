import React from 'react'
import Input from '../../../Forms/Inputs/Input'
import Textarea from '../../../Forms/Inputs/Textarea'
import Select from '../../../Forms/Inputs/Select'
import BtnVoltar from '../../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'
import Title from '../../../Title/Title'
import FormContainer from '../../../Forms/Containers/FormContainer'

const ModeloForm = () => {
  return (
    <div className='form-page'>
      <Title>Titulo do formulario</Title>

      <form>
        <Input type='text' placeholder='fulano de tal' name='Nome'/>
        <Input type='number' placeholder='123' name='numero'/>

        <FormContainer>
          <Input type='text' placeholder='fulano de tal' name='nome-2'/>
          <Input type='number' placeholder='123' name='numero-2'/>
        </FormContainer>

        <Textarea name='textarea' placeholder='tralala'/>
        <Select name='select'>
          // TODO
          <option value={'ala'}>ala</option>
          <option value={'ala-2'}>ala-2</option>
          <option value={'ala-3'}>ala-3</option>
          <option value={'ala-4'}>ala-4</option>
          <option value={'ala-5'}>ala-5</option>
        </Select>

        <FormContainer>
          <BtnVoltar/>
          <BtnSalvar/>
        </FormContainer>
      </form>
    </div>
  )
}

export default ModeloForm
