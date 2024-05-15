import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Experience.module.scss';

export const Experience = ({ id }) => {
    const [hoveredItem, setHoveredItem] = useState(null);



    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            const newScreenWidth = window.innerWidth;
            setScreenWidth(newScreenWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const handleItemHover = (index) => {
        if (screenWidth <= 890) return
        setHoveredItem(index);
    }


    return (
        <div id={id} className={styles.experience}>
            <h5 className={styles.experienceTitle}>Мой <span>опыт</span></h5>
            <ul className={styles.experienceList}>
                <li>
                    <Link
                        to="https://i-tech.su/"
                        target='_blank'
                        className={`${styles.experienceItem} ${hoveredItem !== null && hoveredItem !== 0 ? styles.darken : ''}`}
                        onMouseEnter={() => handleItemHover(0)}
                        onMouseLeave={() => handleItemHover(null)}>
                        <p className={styles.experienceData}>11.2023 - по настоящее время </p>
                        <div className={styles.experienceWrapper}>
                            <h6 className={styles.experienceLink}>I-Tech
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </h6>
                            <p className={styles.experienceSubtitle}>Веб-разработчик</p>
                            <p className={styles.experienceText}>Разработка внутренней CRM системы. Добавление новых нодулей, под запросы компании, рефакторинг прошлых модулей,
                                исправление ошибок, добаработка функционала.</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://tessera.hopto.org/"
                        target='_blank'
                        className={`${styles.experienceItem} ${hoveredItem !== null && hoveredItem !== 0 ? styles.darken : ''}`}
                        onMouseEnter={() => handleItemHover(0)}
                        onMouseLeave={() => handleItemHover(null)}>
                        <p className={styles.experienceData}>06.2023 - 11.2023</p>
                        <div className={styles.experienceWrapper}>
                            <h6 className={styles.experienceLink}>Roman Mosaic School
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </h6>
                            <p className={styles.experienceSubtitle}>Frontend developer</p>
                            <p className={styles.experienceText}>Проектная занятость, в старпапе онлайн и офлайн курсов по "Римской мозайке" в ходе работы разработал несколько модулей.
                                Исправление ошибок, взаимодействие с дизайнерами.</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://practicum.yandex.ru/catalog/programming/"
                        target='_blank'
                        className={`${styles.experienceItem} ${hoveredItem === 0 ? styles.darken : ''}`}
                        onMouseEnter={() => handleItemHover(1)}
                        onMouseLeave={() => handleItemHover(null)}>
                        <p className={styles.experienceData}>10.2022 - 09.2023</p>
                        <div className={styles.experienceWrapper}>
                            <h6 className={styles.experienceLink}>Яндекс.Практикум
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></h6>
                            <p className={styles.experienceSubtitle}>Frontend developer (Student)</p>
                            <p className={styles.experienceText}>Я работал над проектами под руководством наставников и создавал проекты.
                                За время обучения освоил React, Node.js Express, адаптивный веб-дизайн, методологию BEM, Webpack и MongoDB и составил Roadmap для профессионального роста.
                            </p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}