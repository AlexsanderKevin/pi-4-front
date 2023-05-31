import { NavLink } from "react-router-dom"
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/config'}>Configurações</NavLink>
      <NavLink to={'/teste'}>Teste</NavLink>
      <NavLink to={'/login'}>login</NavLink>
    </nav>
  )
}

export default Nav
