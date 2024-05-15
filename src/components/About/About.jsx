import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

import styles from './About.module.scss';

export const About = ({ id }) => {

    return (
        <div id={id} className={styles.about}>
            <Typewriter
                className={styles.aboutTypewriter}
                options={{
                    cursor: '_',
                    loop: false,
                    cursorClassName: `${styles.aboutCursor}`
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString(`<span class=${styles.aboutGreen}>Htfkbpe. </span> <span class=${styles.aboutTitle}> bltb</span>`)
                        .pauseFor(500)
                        .deleteAll()
                        .typeString(`<span class=${styles.aboutGreen}>Реализую</span><span class=${styles.aboutTitle}> идеи</span>`)
                        // .pauseFor(1000)
                        .typeString(`<span class=${styles.aboutTitle}> в <span class=${styles.aboutBlack}>жизнь</span> с&nbsp;помощью <span class=${styles.aboutGrey} > кода</span></span>`)
                        .start();
                }}
            />

            <p className={styles.aboutText}>
                Мой путь в программировании начался с изучения Java и Python, а также с работы на позиции тестировщика.
                Мой первый проект был <Link className={styles.aboutLink} to="http://cocshop.ru/" target='_blank'>интернет-магазин</Link> для друга.
                Этот небольшой опыт показал мне, что разработка полностью меня увлекает, и я принял решение пройти обучение на курсах от
                <Link className={styles.aboutLink} to="https://practicum.yandex.ru/frontend-developer/?from=catalog" target='_blank'> Яндекс.Практикум</Link> в 2022.
                В 2023 году я успешно защитил дипломную работу по направлению&nbsp;"Веб-&nbsp;разработчик".
                Во время обучения я также устроился на проектную работу в стартапе <Link className={styles.aboutLink} to="https://tessera.hopto.org/" target='_blank'> Roman Mosaic School </Link>
                и параллельно начал изучение на платформе <Link className={styles.aboutLink} to="https://app.rs.school/" target='_blank'>RollingScopes</Link>, созданной frontend разработчиками.
            </p>
            <p className={styles.aboutText}>
                Моя цель - улучшить свои навыки и применить приобретенные знания в пользу компании.
            </p>
            <p className={styles.aboutText}>
                Когда я не занят программированием, я предпочитаю проводить время за настольными играми с друзьями, ходить в походы или поглащать контент фильмов, сериалов.
                Стараюсь регулярно ходить в спортзал, чтобы оставаться в форме и поддерживать энергию на день.
            </p>
        </div >
    )
}