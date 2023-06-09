import { NavLink, useNavigate } from "react-router-dom"
import styles from './Nav.module.css'
import { GlobalContext } from "../../../GlobalContext"
import { useContext } from "react"

const Nav = () => {
  const { loggedUser, setLoggedUser } = useContext(GlobalContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    setLoggedUser(null)
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
        <button 
          className={`button-default ${styles.logout}`}
          onClick={handleLogin}
        >Entrar <i className="pi pi-sign-in" style={{marginLeft: '.5rem'}}></i></button>
      ) }
    </nav>
  )
}

export default Nav
