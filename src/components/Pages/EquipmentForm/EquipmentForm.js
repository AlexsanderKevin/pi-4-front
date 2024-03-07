import React, { useContext, useEffect, useState } from 'react'
import Input from '../../Forms/Inputs/Input'
import Textarea from '../../Forms/Inputs/Textarea'
import Select from '../../Forms/Inputs/Select'
import BtnVoltar from '../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'
import Title from '../../Title/Title'
import FormContainer from '../../Forms/Containers/FormContainer'
import { TipoContext } from '../Config/Tipo/TipoContext'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../../services/api'

const EquipmentForm = () => {
  const { tipos } = useContext(TipoContext)
  const navigate = useNavigate()
  const { id } = useParams()

  const [ editTarget, setEditTarget ] = useState(null)

  const [ nome, setNome ] = useState('')
  const [ codigo_sap, setCodigo_sap ] = useState(editTarget?.codigo_sap || '')
  const [ tipo, setTipo ] = useState(editTarget?.id_tipo || 0)
  const [ prioridade, setPrioridade ] = useState(editTarget?.prioridade || 0)
  const [ unidade_medida, setUnidade_medida ] = useState('')
  const [ descricao, setDescricao ] = useState('')

  const fetchEquipment = (equipamentoId) => {
    api.get(`/equipamentos/${equipamentoId}`)
      .then(res => {
        var json = res.data
        setEditTarget(json)
        setNome(json.nome)
        setCodigo_sap(json.codigo_sap)
        setTipo(json.id_tipo)
        setPrioridade(json.prioridade)
        setUnidade_medida(json.unidade_medida)
        setDescricao(json.descricao)
      }).catch(err => console.log(err.message))
  }

  useEffect(() => {if (id) fetchEquipment(id)}, [id])

  const postEquipment = (body, targetId) => {
    if(targetId !== undefined){
      api.put(`/equipamentos/${targetId}`, body)
        .then(() => {
          navigate(`/equipamentos/${targetId}`)
        })
        .catch(err => console.log(err.message))
    } else {
      api.post('/equipamentos', body)
        .then(navigate(`/`))
        .catch(err => console.log(err.message))
    }
  }

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
    postEquipment(body, id)
  }

  return (
    <div className='form-page' >
      <Title>{ id ? `Editar: ${editTarget?.nome}` : 'Novo Equipamento'}</Title>

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
          <BtnVoltar to={ id ? `/equipamentos/${id}` : `/` }/>
          <BtnSalvar />
        </FormContainer>
      </form>
    </div>
  )
}

export default EquipmentForm