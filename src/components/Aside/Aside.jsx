import styles from './Aside.module.scss'

import { Contact } from "../Contact/Contact"
import { NavBar } from "../NavBar/NavBar"

export const Aside = ({ setActiveLink, activeLink }) => {
  return (
    <aside className={styles.aside}>
        <NavBar setActiveLink={setActiveLink} activeLink={activeLink} />
    </aside>
  )
}