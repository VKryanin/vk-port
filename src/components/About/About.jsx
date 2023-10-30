import { Link } from 'react-router-dom';
import styles from './About.module.scss';

export const About = () => {

    return (
        <section className={styles.about}>
            <p className={styles.aboutText}>
                In 2022, I decided to try my hand in IT.
                I studied Java and Python, worked as a tester,
                but I became completely engrossed in web development.
                I created an <Link to="http://cocshop.ru/" target='_blank'>online store</Link> for a friend, successfully completed the "Web Developer"
                training from <Link to="https://practicum.yandex.ru/frontend-developer/?from=catalog" target='_blank'>Yandex.Praktikum</Link>, and simultaneously learned frontend development
                on <Link to="https://app.rs.school/" target='_blank'>RollingScopes</Link> online platform. I worked on the creation of a website for the
                <Link to="https://tessera.hopto.org/" target='_blank'>"Roman Mosaic School"</Link> in Astana.
            </p>
            <p className={styles.aboutText}>
                My main focus these days is to improve my skills and implement my existing skills.
            </p>
            <p className={styles.aboutText}>
                When I'm not at the computer, I usually enjoy going to the gym,
                playing board games, or watching how a pirate searches for <span>One Piece</span>.
            </p>
        </section>
    )
}