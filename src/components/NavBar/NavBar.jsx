import styles from './NavBar.module.scss';

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from "react-scroll";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');

    return (
        <>
            <nav className={styles.navbar}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link
                            to='#about'
                            smooth={true}
                            duration={500}
                            onClick={() => {
                                const aboutElement = document.getElementById('about');
                                if (aboutElement) {
                                    aboutElement.scrollIntoView({
                                        behavior: 'smooth',
                                    });
                                }
                                setActiveLink('about');
                            }}
                            className={`${styles.navbarLink} ${activeLink === 'about' ? styles.navbarLinkActive : ''}`}
                        >
                            About
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link
                            to='#education'
                            smooth={true}
                            duration={500}
                            onClick={() => {
                                const aboutElement = document.getElementById("education");
                                if (aboutElement) {
                                    aboutElement.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                                setActiveLink('education');
                            }}
                            className={`${styles.navbarLink} ${activeLink === 'education' ? styles.navbarLinkActive : ""}`}
                        >
                            Education
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link
                            to='#experience'
                            smooth={true}
                            duration={500}
                            onClick={() => {
                                const aboutElement = document.getElementById("experience");
                                if (aboutElement) {
                                    aboutElement.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                                setActiveLink('experience');
                            }}
                            className={`${styles.navbarLink} ${activeLink === 'experience' ? styles.navbarLinkActive : ""}`}
                        >
                            Experience
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link
                            to='#projects'
                            smooth={true}
                            duration={500}
                            onClick={() => {
                                const aboutElement = document.getElementById("projects");
                                if (aboutElement) {
                                    aboutElement.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                                setActiveLink('projects');
                            }}
                            className={`${styles.navbarLink} ${activeLink === 'projects' ? styles.navbarLinkActive : ""}`}
                        >
                            All projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </>

    )

}