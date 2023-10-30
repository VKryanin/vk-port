import styles from './Main.module.scss';

import { About } from '../About/About';
import { Education } from '../Education/Education';
import { Experience } from '../Experience/Experience';
import { Projects } from '../Projects/Projects';

export const Main = () => {
    return (
        <section className={styles.main}>
            <About id='about' />
            <Education id='education' />
            <Experience id='experience' />
            <Projects id='projects' />
        </section>
    )
}