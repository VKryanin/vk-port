import { useState } from 'react'

import { MenuButton } from '../MenuButton/MenuButton'
import styles from './BurgerWrapper.module.scss'
import { NavBurger } from '../NavBurger/NavBurger'

export const BurgerWrapper = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className={styles.burgerWrapper}>
      <MenuButton isActive={isOpen} onClick={() => setOpen(!isOpen)} />
      <NavBurger />
    </div>
  )
}