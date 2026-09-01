import React from 'react';
import { Link } from 'react-scroll';
import styles from './NavBar.module.scss';

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link
                        activeClass={styles.navbarLinkActive}
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Обо мне
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        activeClass={styles.navbarLinkActive}
                        to="education"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Обучение
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        activeClass={styles.navbarLinkActive}
                        to="experience"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Опыт
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        activeClass={styles.navbarLinkActive}
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Мои проекты
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
