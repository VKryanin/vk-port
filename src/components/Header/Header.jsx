import styles from './Header.module.scss';

import photo from '../../images/img_normal.png'

import { Logo } from '../Logo/Logo';
import { BurgerWrapper } from '../BurgerWrapper/BurgerWrapper';

export const Header = () => {


    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.headerWrapperImage}>
                <img className={styles.headerImage} src={photo} alt="me" />
            </div>
            <BurgerWrapper />
        </header>
    )
}