import styles from './Contact.module.scss';
import tg from '../../images/tg.svg';
import inst from '../../images/inst.svg';
import ln from '../../images/ln.svg'
import github from '../../images/github.svg'

import { Link } from 'react-router-dom';



export const Contact = () => {
    return (
        <ul className={styles.contacts}>
            <li>
                <Link to={'https://github.com/VKryanin'} target='_blank'>
                    <img src={github} alt="Github" />
                </Link>
            </li>
            <li>
                <Link to={'https://t.me/RJKvCyMbXo'} target='_blank'>
                    <img src={tg} alt="Telegram" />
                </Link>
            </li>
            <li>
                <Link to={'https://www.linkedin.com/in/vitaliy-krianin-16564a263/'} target='_blank'>
                    <img src={ln} alt="LinkedIn" />
                </Link>
            </li>
            <li>
                <Link to={'https://www.instagram.com/sooooooooooooooqa'} target='_blank'>
                    <img src={inst} alt="Instagram" />
                </Link>
            </li>
        </ul>
    )
}