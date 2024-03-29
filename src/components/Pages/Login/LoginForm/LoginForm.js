import React, { useContext, useEffect, useState } from 'react'
import Input from '../../../Forms/Inputs/Input'
import Title from '../../../Title/Title'
import FormContainer from '../../../Forms/Containers/FormContainer'
import styles from './LoginForm.module.css'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../../../GlobalContext'
import api from '../../../../services/api'
import { setAuthToken } from '../../../Helper/setAuthToken'
import criptografar from '../../../Helper/rsa'
import { useTranslation } from 'react-i18next'

const LoginForm = () => {
  const { t } = useTranslation()
  const [ user, setUser ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState(null)

  const navigate = useNavigate()
  const { setLoggedUser } = useContext(GlobalContext)

  const fetchUser = (body) => {
    api.post('/login',{
      data: body
    }).then(async res => {
      let { token, responsavel } = res.data
      
      setAuthToken(token)
      setLoggedUser(responsavel)

      navigate('/')
    }).catch(e => {
      const { message } = e.response.data
      if (message) {
        setError(`${message}`)
      }else {
        setError(`${e}`)
      }
    });
  }

  const handleSubmit = event => {
    event.preventDefault()

    const body = {
      login: user,
      senha: criptografar(password)
    }

    fetchUser(body)
  }

  return (
    <div className={`form-page ${styles.form}`}>
      <Title>{t('Login')}</Title>

      <form onSubmit={handleSubmit}>
        <Input 
          type='text' 
          placeholder={'Fulano Beltrano da Silva'}
          name={t('Username')}
          value={user}
          onChange={({target}) => setUser(target.value)}
        />
        <Input 
          type='password' 
          placeholder={'*************'}
          name={t('Password')}
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
        { error ? <p className={styles.errorMessage}>{error}</p> : null}

        <FormContainer>
          <button type='submit' className={`button-default ${styles.buttonLogin}`}>{t('Enter')}</button>
        </FormContainer>
      </form>
    </div>
  )
}

export default LoginForm
