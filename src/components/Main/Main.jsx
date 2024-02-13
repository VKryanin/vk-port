import styles from './Main.module.scss';
import { Element } from 'react-scroll';

import { About } from '../About/About';
import { Education } from '../Education/Education';
import { Experience } from '../Experience/Experience';
import { Projects } from '../Projects/Projects';
import { Footer } from '../Footer/Footer';

export const Main = ({ setActiveLink, activeLink }) => {

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