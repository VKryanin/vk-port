import styles from './NavBar.module.scss';

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from "react-scroll";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useLayoutEffect(() => {
        const aboutSection = document.getElementById('about');
        const educationSection = document.getElementById('education');
        const experienceSection = document.getElementById('experience');
        const projectsSection = document.getElementById('projects');

        const position = scrollPosition + window.innerHeight / 2;

        if (
            position >= aboutSection.offsetTop &&
            position < educationSection.offsetTop
        ) {
            setActiveLink('about');
        } else if (
            position >= educationSection.offsetTop &&
            position < experienceSection.offsetTop
        ) {
            setActiveLink('education');
        } else if (
            position >= experienceSection.offsetTop &&
            position < projectsSection.offsetTop
        ) {
            setActiveLink('experience');
        } else if (position >= projectsSection.offsetTop) {
            setActiveLink('projects');
        } else {
            setActiveLink('');
        }
    }, [scrollPosition]);


    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link
                        to='about'
                        smooth={true}
                        duration={500}
                        className={`${styles.navbarLink} ${activeLink === 'about' ? styles.navbarLinkActive : ''}`}
                        activeClass={styles.navbarLinkActive}
                    >
                        About
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        to='education'
                        smooth={true}
                        duration={500}
                        className={`${styles.navbarLink} ${activeLink === 'education' ? styles.navbarLinkActive : ''}`}
                        activeClass={styles.navbarLinkActive}
                    >
                        Education
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        to='experience'
                        smooth={true}
                        duration={500}
                        className={`${styles.navbarLink} ${activeLink === 'experience' ? styles.navbarLinkActive : ''}`}
                        activeClass={styles.navbarLinkActive}
                    >
                        Experience
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link
                        to='projects'
                        smooth={true}
                        duration={500}
                        className={`${styles.navbarLink} ${activeLink === 'projects' ? styles.navbarLinkActive : ''}`}
                        activeClass={styles.navbarLinkActive}
                    >
                        All projects
                    </Link>
                </li>
            </ul>
        </nav>
    )

}