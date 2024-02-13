/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from './Header.module.scss';

import photo from '../../images/img_normal.png'

import { Logo } from '../Logo/Logo';
import { useState } from 'react';


export const Header = () => {
    const [isOpen, setIsOpne] = useState(false)

    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.headerWrapperImage}>
                <img className={styles.headerImage} src={photo} alt="me" />
            </div>
            <div className={`${styles.headerBurger} ${isOpen ? styles.headerBurgerActive : ''}`} onClick={()=> setIsOpne(!isOpen)} />
        </header>
    )
}