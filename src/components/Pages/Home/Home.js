import styles from './Home.module.css'
import Title from '../../Title/Title'
import { NavLink } from 'react-router-dom'
import EquipmentTable from './Equipment/EquipmentTable'
import { EquipmentStorage } from './Equipment/EquipmentContext'

const Home = () => {
  return (
    <section className={styles.home}>
      <header className={styles.header}>
        <Title>Equipamentos</Title>
        <NavLink to={'/equipamentos/new'} className={`button-default`}><i className='pi pi-plus'></i></NavLink>
      </header>
      <EquipmentStorage>
        <EquipmentTable/>
      </EquipmentStorage>
    </section>
  )
}

export default Home
