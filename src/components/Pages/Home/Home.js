import styles from './Home.module.css'
import EquipmentTable from './Equipment/EquipmentTable'
import { EquipmentStorage } from './Equipment/EquipmentContext'
import EquipamentForm from './Equipment/EquipmentForm'

const Home = () => {
  return (
    <section className={styles.home}>
      <EquipmentStorage>
        <EquipamentForm/>
        <EquipmentTable/>
      </EquipmentStorage>
    </section>
  )
}

export default Home
