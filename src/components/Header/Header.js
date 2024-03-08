import React, { useContext } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/img/logo.png'
import Nav from './Nav/Nav'
import { GlobalContext, GlobalStorage } from '../../GlobalContext'
import { Link } from 'react-router-dom'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'

const Header = () => {
  const { loggedUser } = useContext(GlobalContext)

  return (
    <header className={`${styles.header}`}>
      <Link to='/'><img src={logo} alt='logo'/></Link>
      <LanguageSwitch/>
      { loggedUser && <p><i className='pi pi-user' style={{marginRight: '1rem'}}></i>{loggedUser.nome}</p> }
      <Nav/>
    </header>
  )
}

export default Header
