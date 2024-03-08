import { NavLink, useNavigate } from "react-router-dom"
import styles from './Nav.module.css'
import { GlobalContext } from "../../../GlobalContext"
import { useContext } from "react"
import { useTranslation } from 'react-i18next';
import LanguageSwitch from "../../LanguageSwitch/LanguageSwitch";

const Nav = () => {
  const { loggedUser, setLoggedUser } = useContext(GlobalContext)
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const handleLogout = () => {
    setLoggedUser(null)
    setAuthToken(null)
    localStorage.removeItem('token')
    navigate('/login')
  }

  const handleLogin = () => navigate('/login')

  return (
    <nav className={styles.nav}>
      { loggedUser ? (
        <>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/Dashboard'}>Dashboard</NavLink>
          <NavLink to={'/config'}>Configurações</NavLink>
          { loggedUser.cargo === 'admin' && <NavLink to={'/responsaveis'}>Responsáveis</NavLink> }
          <button 
            className={`button-default ${styles.logout}`}
            onClick={handleLogout}
          >Sair <i className="pi pi-sign-out" style={{marginLeft: '.5rem'}}></i></button>
        </>
      ) : (
        <>
          <button 
            className={`button-default ${styles.logout}`}
            onClick={handleLogin}
          >{t('Login')} <i className="pi pi-sign-in" style={{marginLeft: '.5rem'}}></i></button>
        </>
      ) }
    </nav>
  )
}

export default Nav
