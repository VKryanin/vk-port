import { Link } from "react-scroll";
import styles from './Logo.module.scss';

export const Logo = () => {
    return (
        <Link
            className={styles.logo}
            to='about'
            smooth={true}
            duration={500}
        >
            <h1 className={styles.logoName}>vitaliy kryanin</h1>
            <h2 className={styles.logoTitle}>{`<DEV WEB/>`}</h2>
            <p className={styles.logoEmail}>krianinvv@internet.ru</p>
        </Link>
    )
}