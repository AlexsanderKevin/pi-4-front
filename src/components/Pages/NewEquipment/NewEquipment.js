import React, { useContext, useState } from 'react'
import Input from '../../Forms/Inputs/Input'
import Textarea from '../../Forms/Inputs/Textarea'
import Select from '../../Forms/Inputs/Select'
import BtnVoltar from '../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'
import Title from '../../Title/Title'
import FormContainer from '../../Forms/Containers/FormContainer'
import { TipoContext } from '../Config/Tipo/TipoContext'
import { useNavigate } from 'react-router-dom'

const NewEquipment = () => {
  const { tipos } = useContext(TipoContext)
  const navigate = useNavigate()

  const [ nome, setNome ] = useState('')
  const [ codigo_sap, setCodigo_sap ] = useState('')
  const [ tipo, setTipo ] = useState(0)
  const [ prioridade, setPrioridade ] = useState(0)
  const [ unidade_medida, setUnidade_medida ] = useState('')
  const [ descricao, setDescricao ] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const body = {
      nome,
      codigo_sap,
      id_tipo: tipo,
      prioridade,
      unidade_medida,
      descricao
    }

    fetch('http://35.198.52.93/equipamentos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    .then(() => navigate('/'))
  }

  return (
    <div className='form-page' >
      <Title>Novo Equipamento</Title>

      <form onSubmit={handleSubmit}>
        <Input 
          type='text'
          placeholder='Ex.: Teclado' 
          name='nome' 
          value={nome}
          onChange={({target}) => setNome(target.value)}
          required
        />

        <FormContainer>
          <Input 
            type='number' 
            placeholder='Ex.: 123456' 
            name='Código SAP'
            value={codigo_sap}
            onChange={({target}) => setCodigo_sap(target.value)}
            required
          />

          <Select 
            name='tipo'
            value={tipo}
            onChange={({target}) => setTipo(target.value)}
          >
            { tipos && tipos.map( tipo => (
              <option key={tipo.id_tipo} value={tipo.id_tipo}>{tipo.nome}</option>
            ))}
          </Select>
        </FormContainer>

        <FormContainer>
          <Select
            name='prioridade'
            value={prioridade}
            onChange={({target}) => setPrioridade(target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </Select>

          <Input 
            type='text' 
            placeholder='Ex.: Unidade' 
            name='Unidade de medida' 
            value={unidade_medida}
            onChange={({target}) => setUnidade_medida(target.value)}
          />
        </FormContainer>

        <Textarea 
          name='Descrição' 
          placeholder='Ex.: Teclado sem fio com problema'
          value={descricao}
          onChange={({target}) => setDescricao(target.value)}
        />

        <FormContainer>
          <BtnVoltar to={'/'}/>
          <BtnSalvar />
        </FormContainer>
      </form>
    </div>
  )
}

export default NewEquipment