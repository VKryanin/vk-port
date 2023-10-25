import styles from './NavBar.module.scss';

import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink}>
                        About
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink}>
                        Experience
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink}>
                        Work
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink}>
                        Contact
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink}>
                        All projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}