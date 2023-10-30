import styles from './Header.module.scss';

import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { Contact } from '../Contact/Contact';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <NavBar />
            <Contact />
        </header>
    )
}