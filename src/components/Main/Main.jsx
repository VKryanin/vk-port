import styles from './Main.module.scss';

import { About } from '../About/About';
import { AppRoutes } from '../Routes/Routes';

export const Main = () => {
    return (
        <section className={styles.main}>
            <AppRoutes />

        </section>
    )
}