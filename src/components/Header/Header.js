import React, { useContext } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/img/logo.png'
import Nav from './Nav/Nav'
import { GlobalContext } from '../../GlobalContext'
import { Link } from 'react-router-dom'

const Header = () => {
  const { loggedUser } = useContext(GlobalContext)

  return (
    <header className={`${styles.header}`}>
      <Link to='/'><img src={logo} alt='logo'/></Link>
      { loggedUser && <p><i className='pi pi-user' style={{marginRight: '1rem'}}></i>{loggedUser.nome}</p> }
      <Nav/>
    </header>
  )
}

export default Header
