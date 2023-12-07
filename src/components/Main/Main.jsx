import styles from './Main.module.scss';
import { useEffect } from 'react';
import { Element } from 'react-scroll';

import { About } from '../About/About';
import { Education } from '../Education/Education';
import { Experience } from '../Experience/Experience';
import { Projects } from '../Projects/Projects';
import { Footer } from '../Footer/Footer';

export const Main = ({ setActiveLink, activeLink }) => {

    const handleScroll = () => {
        const aboutElement = document.getElementById('about');
        const educationElement = document.getElementById('education');
        const experienceElement = document.getElementById('experience');
        const projectsElement = document.getElementById('projects');

        if (
            aboutElement &&
            educationElement &&
            experienceElement &&
            projectsElement
        ) {
            const aboutOffset = aboutElement.offsetTop;
            const educationOffset = educationElement.offsetTop;
            const experienceOffset = experienceElement.offsetTop;
            const projectsOffset = projectsElement.offsetTop;
            const scrollTop = window.pageYOffset;

            if (scrollTop >= aboutOffset && scrollTop < educationOffset) {
                setActiveLink('about');
            } else if (scrollTop >= educationOffset && scrollTop < experienceOffset) {
                setActiveLink('education');
            } else if (scrollTop >= experienceOffset && scrollTop < projectsOffset) {
                setActiveLink('experience');
            } else if (scrollTop >= projectsOffset) {
                setActiveLink('projects');
            }
        }
    };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [activeLink]);

    return (
        <section className={styles.main} id='main'>
            <Element id='about' name='about'>
                <About />
            </Element>
            <Element id='education' name='education'>
                <Education />
            </Element>
            <Element id='experience' name='experience'>
                <Experience />
            </Element>
            <Element id='projects' name='projects'>
                <Projects />
            </Element>
            <Footer />
        </section>
    )
}