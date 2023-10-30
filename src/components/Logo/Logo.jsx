import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

export const Logo = () => {
    return (
        <Link className={styles.logo} to={''}>
            <h1 className={styles.logoName}>vitaliy kryanin</h1>
            <h2 className={styles.logoTitle}>{`<DEV WEB/>`}</h2>
            <h3 className={styles.logoText}>
                <span className={styles.logoGreen}>
                    Bringing</span>&nbsp;ideas
            </h3>
            <h4 className={styles.logoText}>
                to&nbsp;
                <span className={styles.logoBlack}>life</span>
                &nbsp;with&nbsp;
                <span className={styles.logoGrey}>code</span>
            </h4>
        </Link>
    )
}