import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './NavBar.module.scss';

export const NavBar = ({ activeLink, setActiveLink }) => {

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className={`${styles.navbarLink} ${activeLink === 'about' ? styles.navbarLinkActive : ''
                            }`}
                        onClick={() => setActiveLink('about')}
                    >
                        About
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        to="education"
                        smooth={true}
                        duration={500}
                        className={`${styles.navbarLink} ${activeLink === 'education' ? styles.navbarLinkActive : ''
                            }`}
                        onClick={() => setActiveLink('education')}
                    >
                        Education
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        to="experience"
                        smooth={true}
                        duration={500}
                        className={`${styles.navbarLink} ${activeLink === 'experience' ? styles.navbarLinkActive : ''
                            }`}
                        onClick={() => setActiveLink('experience')}
                    >
                        Experience
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className={`${styles.navbarLink} ${activeLink === 'projects' ? styles.navbarLinkActive : ''
                            }`}
                        onClick={() => setActiveLink('projects')}
                    >
                        All projects
                    </Link>
                </li>
            </ul>
        </nav>
    );
};