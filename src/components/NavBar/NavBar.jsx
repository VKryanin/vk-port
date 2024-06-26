import React, { useEffect, useState } from 'react';
import { Link, scroller } from 'react-scroll';
import styles from './NavBar.module.scss';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('about');

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    useEffect(() => {
        const scrollOffset = -100; 
        scroller.register('begin', (to, element) => {
        });

        scroller.register('end', (to, element) => {
            setActiveLink(to);
        });

        return () => {
            scroller.unregister('begin');
            scroller.unregister('end');
        };
    }, []);

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
                        onSetActive={handleSetActive}
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
                        onSetActive={handleSetActive}
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
                        onSetActive={handleSetActive}
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
                        onSetActive={handleSetActive}
                    >
                        Мои проекты
                    </Link>
                </li>
            </ul>
        </nav>
    );
};