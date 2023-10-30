import styles from './NavBar.module.scss';

import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <NavLink
                        to={'/about'}
                        // className={styles.navbarLink}
                        className={({ isActive }) => `${styles.navbarLink} ${isActive ? styles.navbarLinkActive : ''}`}
                    >
                        About
                    </NavLink>
                </li>
                <li className={styles.navbarItem}>
                    <NavLink
                        className={({ isActive }) => `${styles.navbarLink} ${isActive ? styles.navbarLinkActive : ''}`}
                        to={'/education'}
                    >
                        Education
                    </NavLink>
                </li>
                <li className={styles.navbarItem}>
                    <NavLink
                        className={({ isActive }) => `${styles.navbarLink} ${isActive ? styles.navbarLinkActive : ''}`}
                        to={'/experience'}
                    >
                        Experience
                    </NavLink>
                </li>
                <li className={styles.navbarItem}>
                    <NavLink
                        className={({ isActive }) => `${styles.navbarLink} ${isActive ? styles.navbarLinkActive : ''}`}
                        to={'/projects'}
                    >
                        All projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}