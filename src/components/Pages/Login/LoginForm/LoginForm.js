import React, { useContext, useEffect, useState } from 'react'
import Input from '../../../Forms/Inputs/Input'
import Title from '../../../Title/Title'
import FormContainer from '../../../Forms/Containers/FormContainer'
import styles from './LoginForm.module.css'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../../../GlobalContext'

const LoginForm = () => {
  const [ user, setUser ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState(null)
  const [ userList, setUserList ] = useState([])

  const navigate = useNavigate()
  const { setLoggedUser } = useContext(GlobalContext)

  const fetchUsers = () => {
    fetch('https://api-pi-2on3.onrender.com/responsaveis')
    .then(res => res.json())
    .then(json => {
      setUserList(json)
    })
  }

  useEffect(fetchUsers, [])

  const handleSubmit = event => {
    event.preventDefault()

    let targetUser = userList.filter( item => {
      if (item.login === user && item.senha === password)
      return item
    })

    if (targetUser[0]) {
      setLoggedUser(targetUser[0])
      navigate('/')

    } else {
      setError('Usuário ou senha inválidos')
    }
  }

  return (
    <div className={`form-page ${styles.form}`}>
      <Title>Login</Title>

      <form onSubmit={handleSubmit}>
        <Input 
          type='text' 
          placeholder='usuário' 
          name='Usuario'
          value={user}
          onChange={({target}) => setUser(target.value)}
        />
        <Input 
          type='password' 
          placeholder='senha' 
          name='Senha'
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
        { error ? <p className={styles.errorMessage}>{error}</p> : null}

        <FormContainer>
          <button type='submit' className={`button-default ${styles.buttonLogin}`}>Entrar</button>
        </FormContainer>
      </form>
    </div>
  )
}

export default LoginForm
