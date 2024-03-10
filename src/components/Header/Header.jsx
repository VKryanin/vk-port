import styles from './Header.module.scss';
import { Element } from 'react-scroll';
import photo from '../../images/img_normal.png'

import { Logo } from '../Logo/Logo';
import { BurgerWrapper } from '../BurgerWrapper/BurgerWrapper';

export const Header = () => {


    return (
        <Element id='header' name='header'>
            <header className={styles.header}>
                <Logo />
                <div className={styles.headerWrapperImage}>
                    <img className={styles.headerImage} src={photo} alt="me" />
                </div>
                <BurgerWrapper />
            </header>
        </Element>

    )
}