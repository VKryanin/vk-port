import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Projects.module.scss';

import movies from '../../images/movies.jpg';
import mesto from '../../images/mesto.jpg';
import travel from '../../images/travel.jpg';
import stuff from '../../images/stuff.jpg';
import roman from '../../images/Roman.jpg';


export const Projects = ({ id }) => {
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

    return (
        <section id={id} className={styles.projects}>
            {screenWidth <= 890
                ? <h2 className={styles.projectsHeader}>What projects are in your portfolio?</h2>
                : <></>}
            <ul className={styles.projectsList}>
                <li>
                    <Link className={styles.projectsItem} to="https://tessera.hopto.org/" target='_blank'>
                        <div className={styles.projectsWrapper} style={screenWidth <= 560 ? { backgroundImage: `url(${roman})`, filter: 'brightness(70%) saturate(120%) #000' } : undefined}>
                            <img className={styles.projectsImage} src={roman} alt="Roman Mosaic School" />
                            <div className={styles.projectsInfo}>
                                <h6 className={styles.projectsTitle}>Tessera
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </h6>
                                <p className={styles.projectsSubtitles}>
                                    The first commercial project completed by the development team. The project has implemented the sale of courses, souvenirs, course schedules, date booking, profile and functionality is still expanding.
                                </p>
                            </div>
                        </div>
                        <ul className={styles.projectsTech}>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Redux</li>
                            <li>Axios</li>
                            <li>Docker</li>
                            <li>Postres</li>
                            <li>BEM</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link className={styles.projectsItem} to="https://653fc64cdbdf0a38a1b3084a--reliable-moonbeam-0828f2.netlify.app/" target='_blank'>
                        <div className={styles.projectsWrapper} style={screenWidth <= 560 ? { backgroundImage: `url(${stuff})` } : undefined}>
                            <img className={styles.projectsImage} src={stuff} alt="Stuff" />
                            <div className={styles.projectsInfo}>
                                <h6 className={styles.projectsTitle}>Stuff
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </h6>
                                <p className={styles.projectsSubtitles}>
                                    Pet-project Online store, created on a public API. The functionality has been implemented: searching for products, filtering by price and category, as well as adding products to favorites. Of course, user registration and authentication.
                                    .
                                </p>
                            </div>
                        </div>
                        <ul className={styles.projectsTech}>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Redux</li>
                            <li>Axios</li>
                            <li>BEM</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link className={styles.projectsItem} to="https://movies-explorer.nomoredomainsicu.ru/" target='_blank'>
                        <div className={styles.projectsWrapper} style={screenWidth <= 560 ? { backgroundImage: `url(${movies})` } : undefined}>
                            <img className={styles.projectsImage} src={movies} alt="Movies" />
                            <div className={styles.projectsInfo}>
                                <h6 className={styles.projectsTitle}>Movies-explorer
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </h6>
                                <p className={styles.projectsSubtitles}>
                                    Diploma project in Yandex.Practicum. API developed and connected to the MongoDB database and frontend on React.
                                    The project includes registration, authorization, searching and saving films to favorites, editing a profile.
                                </p>
                            </div>
                        </div>
                        <ul className={styles.projectsTech}>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>BEM</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link className={styles.projectsItem} to="https://vitaly.nomoredomains.work" target='_blank'>
                        <div className={styles.projectsWrapper} style={screenWidth <= 560 ? { backgroundImage: `url(${mesto})` } : undefined}>
                            <img className={styles.projectsImage} src={mesto} alt="Mesto" />
                            <div className={styles.projectsInfo}>
                                <h6 className={styles.projectsTitle}>Mesto react
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </h6>
                                <p className={styles.projectsSubtitles}>
                                    Educational project in Yandex.Practicum. developed a backend (API, connected to MongoDB) and a frontend using React. The functionality of the project includes registration, login, editing a profile, adding photos with information and likes.
                                </p>
                            </div>
                        </div>
                        <ul className={styles.projectsTech}>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>BEM</li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link className={styles.projectsItem} to="https://vkryanin.github.io/russian-travel/" target='_blank'>
                        <div className={styles.projectsWrapper} style={screenWidth <= 560 ? { backgroundImage: `url(${travel})` } : undefined}>
                            <img className={styles.projectsImage} src={travel} alt="Traveling in Russia" />
                            <div className={styles.projectsInfo}>
                                <h6 className={styles.projectsTitle}>Traveling in Russia
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </h6>
                                <p className={styles.projectsSubtitles}>
                                    One of the first projects in Yandex.Practicum implemented during my studies. The project was implemented with an adaptive and responsive layout using the BEM methodology, the project is not complicated but is as expensive as memory =).                                </p>
                            </div>
                        </div>
                        <ul className={styles.projectsTech}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>BEM</li>
                        </ul>
                    </Link>
                </li>

                <li></li>
            </ul>
        </section>
    )
}