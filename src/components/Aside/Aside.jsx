import styles from './Aside.module.scss'

import { Contact } from "../Contact/Contact"
import { NavBar } from "../NavBar/NavBar"

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.asideWrapper}>
        <NavBar />
        <Contact />
      </div>
    </aside>
  )
}