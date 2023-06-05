import React, { useContext, useEffect, useState } from 'react'
import Title from '../../Title/Title'
import Input from '../../Forms/Inputs/Input'
import FormContainer from '../../Forms/Containers/FormContainer'
import Select from '../../Forms/Inputs/Select'
import { ZonaContext } from '../Config/Zona/ZonaContext'
import Textarea from '../../Forms/Inputs/Textarea'
import BtnVoltar from '../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'
import { useParams } from 'react-router-dom'

const NewMovimentation = () => {
  const [ status, setStatus ] = useState('')
  const [ zonaInput, setZonaInput ] = useState(0)
  const [ quantidade, setQuantidade ] = useState(1)
  const [ observacoes, setObservacoes ] = useState('')

  const { zonas } = useContext(ZonaContext)
  const { id_equipamento } = useParams()

  return (
    <div className='form-page'>
      <Title>Nova Movimentação</Title>

      <form>
        <Input
          type='text'
          placeholder='Ex.: Eme andamento'
          name='status'
          value={status}
          onChange={({target}) => setStatus(target.value)}
        />

        <FormContainer>
          <Select
            name='zona'
            value={zonaInput}
            onChange={({target}) => setZonaInput(target.value)}	
          >
            { zonas && zonas.map( zona => (
              <option key={zona.id_zona} value={zona.id_zona}>
                {zona.nome}
              </option>
            ))}
          </Select>
          <Input
            type='number'
            placeholder='Ex.: 1'
            name='quantidade'
            value={quantidade}
            onChange={({target}) => setQuantidade(target.value)}
          />
        </FormContainer>
        <Textarea
          type="text"
          name='observações'
          placeholder='Ex.: Esperando peças'
          value={observacoes}
          onChange={({target}) => setObservacoes(target.value)}
        />

        <FormContainer>
          <BtnVoltar to={`/equipamentos/${id_equipamento}`}/>
          <BtnSalvar />
        </FormContainer>
      </form>
    </div>
  )
}

export default NewMovimentation
