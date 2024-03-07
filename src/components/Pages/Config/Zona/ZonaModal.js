import { useContext, useEffect, useState } from "react"
import Modal from "../../../Modal/Modal"
import { ZonaContext } from "./ZonaContext"
import Input from "../../../Forms/Inputs/Input"
import FormContainer from "../../../Forms/Containers/FormContainer"
import BtnVoltar from "../../../Forms/Buttons/BtnVoltar"
import BtnSalvar from "../../../Forms/Buttons/BtnSalvar"
import Textarea from "../../../Forms/Inputs/Textarea"
import api from '../../../../services/api'

const ZonaModal = () => {
  const { 
    editTarget, 
    setEditTarget, 
    fetchZonas, 
    loading, 
    setLoading 
  } = useContext(ZonaContext)

  const [ nome, setNome ] = useState('')
  const [ descricao, setDescricao ] = useState('')

  useEffect(() => {
    setNome(editTarget?.nome || '')
    setDescricao(editTarget?.descricao || '')
  }, [editTarget])

  const handleSubmit = event => {
    event.preventDefault()
    setLoading(true)
    const body = { nome, descricao }

    api.put(`/zonas/${editTarget?.id_zona}`, body)
      .then(() => {
        fetchZonas()
        setEditTarget(null)
      }).catch(err => console.log(err.message))
  }

  return (
    <Modal title='Editar Zona' active={editTarget}>
      <form style={{marginBottom: '0'}} onSubmit={handleSubmit}>
        <Input
          name='nome'
          value={nome}
          onChange={({target}) => setNome(target.value)}
          required
        />
        <Textarea
          name='descrição'
          value={descricao}
          onChange={({target}) => setDescricao(target.value)}
          required
        />
        <FormContainer>
          <BtnVoltar disabled={loading} onClick={() => setEditTarget(null)} />
          <BtnSalvar disabled={loading} />
        </FormContainer>
      </form>
    </Modal>   
  )
}

export default ZonaModal
