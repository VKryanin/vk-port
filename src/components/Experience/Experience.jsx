import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Experience.module.scss';

export const Experience = ({ id }) => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isHover, setIsHover] = useState(false)

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
    }, []);

    const handleItemHover = (index) => {
        if (screenWidth <= 890) return;
        setHoveredItem(index);
        setIsHover(true)
    };

    const handleItemLeave = () => {
        if (screenWidth <= 890) return;
        setHoveredItem(null);
        setIsHover(false)
    };


    return (
        <div id={id} className={styles.experience}>
            <h5 className={styles.experienceTitle}>Мой <span>опыт</span></h5>
            <ul className={styles.experienceList}>
                <li>
                    <Link
                        to="https://i-tech.su/"
                        target='_blank'
                        className={`${styles.experienceItem} ${hoveredItem !== 0 && isHover ? styles.darken : ''}`}
                        onMouseEnter={() => handleItemHover(0)}
                        onMouseLeave={handleItemLeave}>
                        <p className={styles.experienceData}>11.2023 - 10.2024 </p>
                        <div className={styles.experienceWrapper}>
                            <h6 className={styles.experienceLink}>I-Tech
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </h6>
                            <p className={styles.experienceSubtitle}>Fullstack-разработчик</p>
                            <p className={styles.experienceText}>Участвовал в продуктовой разработке CRM-системы, которая покрывала ключевые бизнес-процессы: контроль работы инженеров,
                                отслеживание выполнения заказов и внедрение внутреннего электронного документооборота с дальнейшим масштабированием для оптимизации и автоматизации процессов.</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://tessera.hopto.org/"
                        target='_blank'
                        className={`${styles.experienceItem} ${hoveredItem !== 1 && isHover ? styles.darken : ''}`}
                        onMouseEnter={() => handleItemHover(1)}
                        onMouseLeave={handleItemLeave}>
                        <p className={styles.experienceData}>06.2023 - 11.2023</p>
                        <div className={styles.experienceWrapper}>
                            <h6 className={styles.experienceLink}>Roman Mosaic School
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </h6>
                            <p className={styles.experienceSubtitle}>Frontend developer</p>
                            <p className={styles.experienceText}>Стартап по разработке сайта для курсов римской мозаики с возможностями интернет-магазина: добавлением товаров в корзину
                                и регистрацией на онлайн- и офлайн-курсы.
                            </p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://practicum.yandex.ru/catalog/programming/"
                        target='_blank'
                        className={`${styles.experienceItem} ${hoveredItem !== 2 && isHover ? styles.darken : ''}`}
                        onMouseEnter={() => handleItemHover(2)}
                        onMouseLeave={handleItemLeave}>
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
