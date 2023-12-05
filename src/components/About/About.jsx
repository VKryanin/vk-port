import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './About.module.scss';

export const About = ({ id }) => {

    return (
        <section id={id} className={styles.about}>
            <h3 className={styles.aboutTitle}>
                <span className={styles.aboutGreen}>
                    Bringing</span>&nbsp;ideas
            </h3>
            <h4 className={styles.aboutTitle}>
                to&nbsp;
                <span className={styles.aboutBlack}>life</span>
                &nbsp;with&nbsp;
                <span className={styles.aboutGrey}>code</span>
            </h4>
            <p className={styles.aboutText}>
                In 2022, I decided to try my hand in IT.
                I studied Java and Python, worked as a tester,
                but I became completely engrossed in web development.
                I created an <Link className={styles.aboutLink} to="http://cocshop.ru/" target='_blank'>online store</Link> for a friend, successfully completed the&nbsp;"Web&nbsp;Developer"
                training from <Link className={styles.aboutLink} to="https://practicum.yandex.ru/frontend-developer/?from=catalog" target='_blank'>Yandex.Praktikum</Link>, and simultaneously learned frontend development
                on&nbsp;<Link className={styles.aboutLink} to="https://app.rs.school/" target='_blank'>RollingScopes</Link> online platform. I worked on the creation of a website for
                <Link className={styles.aboutLink} to="https://tessera.hopto.org/" target='_blank'> "Roman Mosaic School"</Link> in Astana.
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