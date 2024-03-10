import React, { useState, useRef } from 'react'
import { MenuButton } from '../MenuButton/MenuButton'
import styles from './BurgerWrapper.module.scss'
import { NavBurger } from '../NavBurger/NavBurger'
import { useClickOutside } from '../../hooks/useClickOutside'

export const BurgerWrapper = () => {
  const [isOpen, setOpen] = useState(false)
  const menuRef = useRef(null)

  useClickOutside(menuRef, () => {
    setOpen(false) 
  })

  return (
    <div className={styles.burgerWrapper} ref={menuRef}>
      <MenuButton isActive={isOpen} onClick={() => setOpen(!isOpen)} />
      <NavBurger isActive={isOpen} />
    </div>
  )
}