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
                        About
                    </Link>
                </li>
                <li className={styles.burgerItem}>
                    <Link
                        to='education'
                        smooth={true}
                        duration={500}
                        className={styles.burgerLink}
                    >
                        Education
                    </Link>
                </li>
                <li className={styles.burgerItem}>
                    <Link
                        to='experience'
                        smooth={true}
                        duration={500}
                        className={styles.burgerLink}
                    >
                        Experience
                    </Link>
                </li>
                <li className={styles.burgerItem}>
                    <Link
                        to='projects'
                        smooth={true}
                        duration={500}
                        className={styles.burgerLink}
                    >
                        All projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}