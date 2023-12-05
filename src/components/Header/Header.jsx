/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from './Header.module.scss';

import photo from '../../images/img_normal.png'

import { Logo } from '../Logo/Logo';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <img src={photo} alt="me" />
        </header>
    )
}