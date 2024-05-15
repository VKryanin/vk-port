import React, { useState } from 'react';

import styles from './Projects.module.scss';

import movies from '../../images/movies.jpg';
import mesto from '../../images/mesto.jpg';
import travel from '../../images/travel.jpg';
import stuff from '../../images/stuff.jpg';
import roman from '../../images/Roman.jpg';
import itech from '../../images/i-tech.jpg'
import { Link } from 'react-router-dom';

const slider = [
    {
        photo: itech,
        name: 'I-Tech',
        subtitle: 'Разработка внутренней CRM системы. Рефакторинг созданных ранее модулей. Разработка новых фичей: Учет рабочего времени, заявки на посетителей, контроль статей расходов, выгрузка отчетов, создание КП с выгрузкой pdf.',
        stack: ['React', 'MobX', 'AntD', 'BEM', 'Moment'],
        link: 'https://i-tech.su/'
    },
    {
        photo: roman,
        name: 'Roman Mosaic School',
        subtitle: 'Мой первый коммерческий опыт работы, проектной занятости. Реализовал компоненты: Корзина, запись на курс, авторизация и регистрация.',
        stack: ['React', 'Redux', 'Axios', 'Docker'],
        link: 'https://tessera.hopto.org/'
    },
    {
        photo: stuff,
        name: 'Stuff',
        subtitle: 'Pet-проект Интернет-магазина, созданный на публичном API. Реализован функционал: поиск товаров, фильтрация по цене и категории, а также добавление товаров в избранное и корзину, регистрация и аутентификация пользователя.',
        stack: ['React', 'Redux', 'Axios', 'Docker'],
        link: 'https://reliable-moonbeam-0828f2.netlify.app/'
    },
    // {
    //     photo: movies,
    //     name: 'Movie Explorer',
    //     subtitle: 'Thesis project completed during training at Yandex.Practicum. I created my own API for the project with a connection to the Mongo database',
    //     stack: ['React', 'Node.JS', 'MongoDB', 'BEM'],
    //     link: 'https://movies-explorer.nomoredomainsicu.ru/movies'
    // },
    {
        photo: mesto,
        name: 'Mesto',
        subtitle: 'Доработаный учебный проект, выполненный во время обучения в Яндекс.Практикуме. Я создал для проекта свой API с подключением к базе данных Mongo. Реализован функционал: регистрация, добавление и удаление фотографий, лайки.',
        stack: ['React', 'TS', 'Node.JS', 'MongoDB', 'Redux', 'Axios'],
        link: 'https://mesto.vk-port.dev/'
    },
    {
        photo: travel,
        name: 'Russian travel',
        subtitle: 'Первый образовательный проект, выполненный во время обучения в Яндекс.Практикуме. Написан на HTML и CSS. Добавил его в портфолио, потому что оно мне дорого, как память)',
        stack: ['HTML', 'CSS', 'BEM'],
        link: 'https://vkryanin.github.io/russian-travel/'
    },
]


export const Projects = ({ id }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const countCards = (action) => {
        const newIndex = activeIndex + action;
        if (newIndex >= 0 && newIndex < slider.length) {
            setActiveIndex(newIndex);
        }
    };

    return (
        <div id={id} className={styles.projects}>
            <div className={styles.projectsHeader}>
                <h5 className={styles.projectsTitle}>Мои <span>проекты</span></h5>
                <div className={styles.projectsButtons}>
                    <button className={`${styles.projectsButton} ${activeIndex === 0 ? styles.projectsButtonDissable : ''}`} onClick={() => countCards(-1)} disabled={activeIndex === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="59" viewBox="0 0 65 59" fill="none">
                            <path d="M33.6104 3.32845L44.6302 14.5075C47.7843 17.5475 50.2591 18.9495 53.4245 19.7286C55.1271 20.1476 56.4879 21.6532 56.4862 23.552C56.4845 25.7265 54.8705 27.6136 52.5981 27.6155C50.3257 27.6174 0.0854749 27.6581 0.0854749 27.6581C0.0399294 27.6583 0.00297785 27.695 0.00294171 27.7402L2.91176e-08 31.3209C-3.78319e-05 31.3662 0.0368515 31.4029 0.0823953 31.4029L52.5951 31.3601C57.217 31.3564 57.7569 38.1891 53.3878 39.2412C50.1173 40.0289 47.5354 41.4654 44.1799 44.8048L33.5611 55.6723C33.53 55.7041 33.53 55.7548 33.561 55.7865L35.9436 58.2253C35.9761 58.2585 36.0299 58.2583 36.0622 58.2248L64.977 29.589C65.0076 29.5571 65.0076 29.5069 64.977 29.4753L36.1119 0.775022C36.0796 0.741706 36.0259 0.741651 35.9934 0.774908L33.6103 3.21393C33.579 3.24588 33.5791 3.2967 33.6104 3.32845Z" fill="#CCD6F6" />
                        </svg>
                    </button>
                    <button className={`${styles.projectsButton} ${activeIndex === slider.length - 1 ? styles.projectsButtonDissable : ''}`} onClick={() => countCards(1)} disabled={activeIndex === slider.length - 1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="59" viewBox="0 0 65 59" fill="none">
                            <path d="M33.6104 3.32845L44.6302 14.5075C47.7843 17.5475 50.2591 18.9495 53.4245 19.7286C55.1271 20.1476 56.4879 21.6532 56.4862 23.552C56.4845 25.7265 54.8705 27.6136 52.5981 27.6155C50.3257 27.6174 0.0854749 27.6581 0.0854749 27.6581C0.0399294 27.6583 0.00297785 27.695 0.00294171 27.7402L2.91176e-08 31.3209C-3.78319e-05 31.3662 0.0368515 31.4029 0.0823953 31.4029L52.5951 31.3601C57.217 31.3564 57.7569 38.1891 53.3878 39.2412C50.1173 40.0289 47.5354 41.4654 44.1799 44.8048L33.5611 55.6723C33.53 55.7041 33.53 55.7548 33.561 55.7865L35.9436 58.2253C35.9761 58.2585 36.0299 58.2583 36.0622 58.2248L64.977 29.589C65.0076 29.5571 65.0076 29.5069 64.977 29.4753L36.1119 0.775022C36.0796 0.741706 36.0259 0.741651 35.9934 0.774908L33.6103 3.21393C33.579 3.24588 33.5791 3.2967 33.6104 3.32845Z" fill="#CCD6F6" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* <div className={styles.projectsWrapper}> */}
            <div className={styles.projectsWrapper}>
                {slider.map((item, index) =>

                    <Link to={item.link} target='_blank' key={item.name} className={`${styles.projectsItem} ${index === activeIndex
                        ? styles.projectsItemActive
                        : styles.projectsItemInactive}`}>
                        <h6 className={styles.projectsName}>{item.name}</h6>
                        <div className={styles.projectsContainer}>
                            <img className={styles.projectsImage} src={item.photo} alt={item.name} />
                            <div>
                                <p className={styles.projectsSubtitle}>{item.subtitle}</p>
                                <ul>
                                    {
                                        item.stack.map((tech, i) => {
                                            return <li key={i} className={styles.projectsTech}>
                                                {tech}
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
            {/* </div> */}
        </div>
    );
};