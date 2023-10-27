import styles from './Main.module.scss';

import { About } from '../About/About';

export const Main = () => {
    return (
        <section className={styles.main}>
            <About />
        </section>
    )
}