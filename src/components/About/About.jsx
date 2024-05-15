import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './About.module.scss';

export const About = ({ id }) => {

    return (
        <div id={id} className={styles.about}>
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
                Свой путь в програмирование я начал с изучения Java, Python и работой тестировщика.
                Первым моим проектом был <Link className={styles.aboutLink} to="http://cocshop.ru/" target='_blank'>интернет магазин</Link> для друга.
                Этот небольшой опыт показал мне, что разработка меня увлекает полностью и я принял решение пройти обучение от
                <Link className={styles.aboutLink} to="https://practicum.yandex.ru/frontend-developer/?from=catalog" target='_blank'> Яндекс.Практикум</Link> в 2022.
                В 2023 году я успешно сдал дипломную работу по направлению&nbsp;"Веб&nbsp;разработчик".
                Во время обучения, я устроился на проектую работу в стартап <Link className={styles.aboutLink} to="https://tessera.hopto.org/" target='_blank'> Roman Mosaic School </Link>
                и параллельно начал обучение на платформе <Link className={styles.aboutLink} to="https://app.rs.school/" target='_blank'>RollingScopes</Link>, созданой frontend разработчиками.
            </p>
            <p className={styles.aboutText}>
                Моя цель — улучшить свои навыки и реализовать приобретенные навыки.
            </p>
            <p className={styles.aboutText}>
                По мимо программирования, я хожу в зал, играю в настольные игры, выезжаю с палатками
                или смотрю сериалы, фильмы.
            </p>
        </div >
    )
}