import { Link } from "react-scroll";
import React, { useState, useEffect, useLayoutEffect } from 'react';

import styles from './BurgerMenu.module.scss';

export const BurgerMenu = ({ status }) => {
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
        <nav className={status ? `${styles.burger} ${styles.burgerIsShow}` : styles.burger}>
            <ul className={styles.burgerList}>
                <li className={styles.burgerItem}>
                    <Link
                        to='about'
                        smooth={true}
                        duration={500}
                        className={`${styles.burgerLink} ${activeLink === 'about' ? styles.burgerLinkActive : ''}`}
                        activeClass={styles.burgerLinkActive}
                    >
                        About
                    </Link>
                </li>
                <li className={styles.burgerItem}>
                    <Link
                        to='education'
                        smooth={true}
                        duration={500}
                        className={`${styles.burgerLink} ${activeLink === 'education' ? styles.burgerLinkActive : ''}`}
                        activeClass={styles.burgerLinkActive}
                    >
                        Education
                    </Link>
                </li>
                <li className={styles.burgerItem}>
                    <Link
                        to='experience'
                        smooth={true}
                        duration={500}
                        className={`${styles.burgerLink} ${activeLink === 'experience' ? styles.burgerLinkActive : ''}`}
                        activeClass={styles.burgerLinkActive}
                    >
                        Experience
                    </Link>
                </li>
                <li className={styles.burgerItem}>
                    <Link
                        to='projects'
                        smooth={true}
                        duration={500}
                        className={`${styles.burgerLink} ${activeLink === 'projects' ? styles.burgerLinkActive : ''}`}
                        activeClass={styles.burgerLinkActive}
                    >
                        All projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}