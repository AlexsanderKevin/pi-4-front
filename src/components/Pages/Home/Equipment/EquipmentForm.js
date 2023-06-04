import React, { useContext, useState } from 'react'
import ToggleForm from '../../../Forms/ToggleForm/ToggleForm'
import Input from '../../../Forms/Inputs/Input'
import Textarea from '../../../Forms/Inputs/Textarea'
import Select from '../../../Forms/Inputs/Select'
import BtnReset from '../../../Forms/Buttons/BtnReset'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'
import FormContainer from '../../../Forms/Containers/FormContainer'
import { EquipmentContext } from './EquipmentContext'

const EquipamentForm = () => {
  const [ id_tipo, setTipo] = useState(null)
  const [ nome, setNome ] = useState(null)
  const [ descricao, setDescricao ] = useState(null)
  const [ unidade_medida, setUnidadeMedida ] = useState(null)
  const [ codigo_sap, setCodigoSap ] = useState(null)
  const [ prioridade, setPrioridade ] = useState(null)
  const [ active, setActive ] = useState(false)

  const { fetchEquipamentos, loading, setLoading } = useContext(EquipmentContext)

  const handleSubmit = () => {
    setLoading(true)
    const body = {nome, descricao, unidade_medida, codigo_sap, prioridade}

    fetch('http://35.198.52.93/equipamentos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    }).then(() => {
      fetchEquipamentos()
      setLoading(false)
      setActive(false)
    })
  }

  return (
    <ToggleForm title='Equipamentos' propActive={active} handleSubmit={handleSubmit}>
      <Input 
        type='text' 
        name='Nome'
        placeholder='Ex.: Teclado'
        required 
        onChange={({target}) => setNome(target.value)} 
      />

      <FormContainer>
        <Input 
          type='number' 
          name='Código SAP'
          placeholder='Ex.: 123456'
          required
          onChange={({target}) => setCodigoSap(target.value)}
        />
        <Select name='Tipo'>
          <option value={'ala'}>Periférico</option>
          <option value={'ala-2'}>ala-2</option>
          <option value={'ala-3'}>ala-3</option>
          <option value={'ala-4'}>ala-4</option>
          <option value={'ala-5'}>ala-5</option>
        </Select>
      </FormContainer>

      <Input 
        type='number' 
        name='Prioridade'
        placeholder='Ex: valor crescente >= 1'
        required
        onChange={({target}) => setPrioridade(target.value)}
      />
      <Input 
        type='text'
        name='Unidade de medida' 
        placeholder='Ex.: Unidade'
        required
        onChange={({target}) => setUnidadeMedida(target.value)}
      />
      <Textarea
        type='text'
        name='Descrição' 
        placeholder='Ex.: Teclado sem fio com problema'
        required
        onChange={({target}) => setDescricao(target.value)}
      />
        
      <FormContainer>
        <BtnReset disabled={loading ? true : false}/>
        <BtnSalvar disabled={loading ? true : false}/>
      </FormContainer>
    </ToggleForm>
  )
}

export default EquipamentForm