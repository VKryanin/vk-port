import React from 'react';
import { Link } from "react-scroll";

import styles from './BurgerMenu.module.scss';

export const BurgerMenu = ({ status }) => {

    return (
        <nav className={status ? `${styles.burger} ${styles.burgerIsShow}` : styles.burger}>
            <ul className={styles.burgerList}>
                <li className={styles.burgerItem}>
                    <Link
                        to='about'
                        smooth={true}
                        duration={500}
                        className={styles.burgerLink}
                    >
                        Обо мне
                    </Link>
                </li>
                <li className={styles.burgerItem}>
                    <Link
                        to='education'
                        smooth={true}
                        duration={500}
                        className={styles.burgerLink}
                    >
                        Обучение
                    </Link>
                </li>
                <li className={styles.burgerItem}>
                    <Link
                        to='experience'
                        smooth={true}
                        duration={500}
                        className={styles.burgerLink}
                    >
                        Опыт
                    </Link>
                </li>
                <li className={styles.burgerItem}>
                    <Link
                        to='projects'
                        smooth={true}
                        duration={500}
                        className={styles.burgerLink}
                    >
                        Мои проекты
                    </Link>
                </li>
            </ul>
        </nav>
    )
}