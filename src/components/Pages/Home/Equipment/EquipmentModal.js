import { useContext, useEffect, useState } from "react"

import Modal from "../../../Modal/Modal"
import { EquipmentContext } from "./EquipmentContext"
import Input from "../../../Forms/Inputs/Input"
import Select from "../../../Forms/Inputs/Select"
import FormContainer from "../../../Forms/Containers/FormContainer"
import BtnVoltar from "../../../Forms/Buttons/BtnVoltar"
import BtnSalvar from "../../../Forms/Buttons/BtnSalvar"
import Textarea from "../../../Forms/Inputs/Textarea"

const EquipamentModal = () => {
  const { 
    editTarget, 
    setEditTarget, 
    fetchEquipamentos, 
    loading, 
    setLoading 
  } = useContext(EquipmentContext)


  const [ id_tipo, setTipo] = useState('')
  const [ nome, setNome ] = useState('')
  const [ descricao, setDescricao ] = useState('')
  const [ unidade_medida, setUnidadeMedida ] = useState('')
  const [ codigo_sap, setCodigoSap ] = useState('')
  const [ prioridade, setPrioridade ] = useState('')

  useEffect(() => {
    setTipo(editTarget?.id_tipo || '')
    setNome(editTarget?.nome || '')
    setDescricao(editTarget?.descricao || '')
    setUnidadeMedida(editTarget?.unidade_medida || '')
    setCodigoSap(editTarget?.codigo_sap || '')
    setPrioridade(editTarget?.prioridade || '')
  }, [editTarget])

  const handleSubmit = event => {
    event.preventDefault()
    setLoading(true)
    const body = { id_tipo, nome, descricao, unidade_medida, codigo_sap, prioridade }

    fetch(`http://35.198.52.93/equipamentos/${editTarget?.id_equipamento}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    }
    ).then(() => {
      fetchEquipamentos()
      setEditTarget(null)
    })
  }

  return (
    <Modal title='Editar Equipamento' active={editTarget}>
      <form style={{marginBottom: 'o'}} onSubmit={handleSubmit}>
        <Input 
          type='text' 
          placeholder='Ex.: Teclado' 
          name='Nome' 
          required 
          onChange={({target}) => setNome(target.value)} 
        />
        <FormContainer>
          <Input 
            type='number' 
            placeholder='Ex.: 123456' 
            name='Código SAP'
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
            placeholder='Ex: valor crescente >= 1' 
            name='Prioridade'
            required
            onChange={({target}) => setPrioridade(target.value)}
          />
          <Input 
            type='text' 
            placeholder='Ex.: Unidade' 
            name='Unidade de medida'
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
          <BtnVoltar disabled={loading} onClick={() => setEditTarget(null)} />
          <BtnSalvar disabled={loading} />
        </FormContainer>
      </form>
    </Modal>   
  )
}

export default EquipamentModal
