import React, { useContext, useEffect, useState } from 'react'
import Title from '../../Title/Title'
import Input from '../../Forms/Inputs/Input'
import FormContainer from '../../Forms/Containers/FormContainer'
import Select from '../../Forms/Inputs/Select'
import { ZonaContext } from '../Config/Zona/ZonaContext'
import Textarea from '../../Forms/Inputs/Textarea'
import BtnVoltar from '../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'
import { GlobalContext } from '../../../GlobalContext'

const MovimentationForm = () => {
  const [ status, setStatus ] = useState('')
  const [ zonaInput, setZonaInput ] = useState(0)
  const [ quantidade, setQuantidade ] = useState(1)
  const [ observacao, setObservacao ] = useState('')

  const { zonas } = useContext(ZonaContext)
  const { id_equipamento } = useParams()
  const { loggedUser } = useContext(GlobalContext)
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()

    const body = {
      id_responsavel: loggedUser.id_responsavel,
      id_equipamento,
      status,
      id_zona: zonaInput,
      quantidade,
      observacao
    }

    fetch('https://api-pi-2on3.onrender.com/movimentacoes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    .then(() => navigate(`/equipamentos/${id_equipamento}`))
  }

  return (
    <div className='form-page'>
      <Title>Nova Movimentação</Title>

      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Ex.: Em andamento'
          name='status'
          value={status}
          onChange={({target}) => setStatus(target.value)}
          required
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
          value={observacao}
          onChange={({target}) => setObservacao(target.value)}
        />

        <FormContainer>
          <BtnVoltar to={`/equipamentos/${id_equipamento}`}/>
          <BtnSalvar />
        </FormContainer>
      </form>
    </div>
  )
}

export default MovimentationForm
