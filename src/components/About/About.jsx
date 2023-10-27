import { Welcome } from '../Welcome/Welcome';
import styles from './About.module.scss';
import normalPhoto from '../../images/img_normal.png';
import hoverPhoto from '../../images/img_hover.png'
import qr from '../../images/tg.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const About = () => {
    const [hovered, setHovered] = useState(false);


    return (
        <div className={styles.about}>
            <div className={styles.aboutWrapper}>
                <Link
                    to='https://t.me/RJKvCyMbXo'
                    target='_blank'
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} rel="noreferrer"
                >
                    <img className={styles.saboutImage}
                        src={hoverPhoto}
                        alt={hovered ? 'Hovered photo' : 'Normal photo'} />
                    <img
                        className={styles.aboutQr}
                        src={qr}
                        alt="qr tg" />
                </Link>
            </div>
            <div className={styles.aboutAbout}>
                <h3 className={styles.aboutTitle}>About</h3>
                <Welcome />
                <p className={styles.aboutSubtitle}>
                    I work as a frontend developer and have implemented a number of commercial and pet projects. 
                    I am open to new opportunities and challenges.
                </p>
            </div>

        </div>
    )
}