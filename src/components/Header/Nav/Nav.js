import { NavLink } from "react-router-dom"
import styles from './Nav.module.css'
import { GlobalContext } from "../../../GlobalContext"
import { useContext } from "react"

const Nav = () => {
  const { loggedUser, setLoggedUser } = useContext(GlobalContext)

  const handleClick = () => {
    setLoggedUser(null)
  }

  if (!loggedUser) return null
  else return (
    <nav className={styles.nav}>
      <NavLink to={'/home'}>Home</NavLink>
      <NavLink to={'/config'}>Configurações</NavLink>
      <button 
        className={`button-default ${styles.logout}`}
        onClick={handleClick}
      >Sair <i className="pi pi-sign-out" style={{marginLeft: '.5rem'}}></i></button>
    </nav>
  )
}

export default Nav
