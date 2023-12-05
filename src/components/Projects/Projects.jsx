import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Projects.module.scss';

import movies from '../../images/movies.jpg';
import mesto from '../../images/mesto.jpg';
import travel from '../../images/travel.jpg';
import stuff from '../../images/stuff.jpg';
import roman from '../../images/Roman.jpg';


export const Projects = ({ id }) => {
    let [offSet, setOffSet] = useState(0)
    useEffect(() => {
    })

    const handleClick = (possition) => {
        setOffSet(offSet += possition)
    }

    return (
        <section id={id} className={styles.projects}>
            <div className={styles.projectsHeader}>
                <h2 className={styles.projectsName}>My <span>projects</span></h2>
                <div className={styles.projectsButtons}>
                    <button
                        className={offSet < 0 ? styles.projectsButton : styles.projectsButtonDissable}
                        onClick={() => handleClick(570)}
                        disabled={offSet < 0 ? false : true}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="59" viewBox="0 0 65 59" fill='none'>
                            <path d="M31.3896 55.6715L20.3698 44.4925C17.2157 41.4525 14.7409 40.0505 11.5755 39.2714C9.87288 38.8524 8.51213 37.3467 8.51375 35.448C8.51551 33.2735 10.1295 31.3864 12.4019 31.3845C14.6743 31.3826 64.9145 31.3419 64.9145 31.3419C64.9601 31.3417 64.997 31.305 64.9971 31.2598L65 27.6791C65 27.6338 64.9632 27.5971 64.9176 27.5971L12.4049 27.6399C7.783 27.6436 7.24313 20.8109 11.6123 19.7587C14.8828 18.9711 17.4646 17.5346 20.8201 14.1952L31.4389 3.32774C31.47 3.29587 31.47 3.24524 31.439 3.21349L29.0564 0.774747C29.0239 0.741494 28.9701 0.741746 28.9378 0.775246L0.0229975 29.411C-0.00762688 29.4429 -0.00762688 29.4931 0.0229975 29.5247L28.8881 58.225C28.9204 58.2583 28.9741 58.2583 29.0066 58.2251L31.3897 55.7861C31.421 55.7541 31.4209 55.7033 31.3896 55.6715Z" fill="#CCD6F6" fillOpacity={offSet < 0 ? '1' : '.5'} />
                        </svg>
                    </button>
                    <button
                        className={offSet >= -1170 ? styles.projectsButton : styles.projectsButtonDissable}
                        onClick={() => handleClick(-570)}
                        disabled={offSet >= -1170 ? false : true}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="59" viewBox="0 0 65 59" fill='none'>
                            <path d="M33.6104 3.32845L44.6302 14.5075C47.7843 17.5475 50.2591 18.9495 53.4245 19.7286C55.1271 20.1476 56.4879 21.6532 56.4862 23.552C56.4845 25.7265 54.8705 27.6136 52.5981 27.6155C50.3257 27.6174 0.0854749 27.6581 0.0854749 27.6581C0.0399294 27.6583 0.00297785 27.695 0.00294171 27.7402L2.91176e-08 31.3209C-3.78319e-05 31.3662 0.0368515 31.4029 0.0823953 31.4029L52.5951 31.3601C57.217 31.3564 57.7569 38.1891 53.3878 39.2412C50.1173 40.0289 47.5354 41.4654 44.1799 44.8048L33.5611 55.6723C33.53 55.7041 33.53 55.7548 33.561 55.7865L35.9436 58.2253C35.9761 58.2585 36.0299 58.2583 36.0622 58.2248L64.977 29.589C65.0076 29.5571 65.0076 29.5069 64.977 29.4753L36.1119 0.775022C36.0796 0.741706 36.0259 0.741651 35.9934 0.774908L33.6103 3.21393C33.579 3.24588 33.5791 3.2967 33.6104 3.32845Z" fill="#CCD6F6" fillOpacity={offSet >= -1170 ? '1' : '.5'} />
                        </svg>
                    </button>
                </div>
            </div>

            <ul className={styles.projectsList}>
                <div className={styles.projectsWrapper} style={{ left: `${offSet}px` }}>
                    <li className={styles.projectsItem}>
                        <Link className={styles.projectsLink} to="https://tessera.hopto.org/" target='_blank'>
                            <h6 className={styles.projectsTitle}>Tessera</h6>
                            <div className={styles.projectsContainer}>
                                <div className={styles.projectsCornerLT} />
                                <div className={styles.projectsCornerLB} />
                                <div className={styles.projectsCornerRT} />
                                <div className={styles.projectsCornerRB} />
                                <img className={styles.projectsImage} src={roman} alt="Roman Mosaic School" />
                            </div>
                            <p className={styles.projectsSubtitle}>The first commercial project completed by the development team. The project has implemented the sale of courses, souvenirs, course schedules, date booking, profile and functionality is still expanding.</p>
                            <ul className={styles.projectsTechs}>
                                <li className={styles.projectsTech}>React</li>
                                <li className={styles.projectsTech}>JavaScript</li>
                                <li className={styles.projectsTech}>Redux</li>
                                <li className={styles.projectsTech}>Axios</li>
                                <li className={styles.projectsTech}>Docker</li>
                                <li className={styles.projectsTech}>BEM</li>
                            </ul>
                        </Link>
                    </li>
                    <li className={styles.projectsItem}>
                        <Link className={styles.projectsLink} to="https://653fc64cdbdf0a38a1b3084a--reliable-moonbeam-0828f2.netlify.app/" target='_blank'>
                            <h6 className={styles.projectsTitle}>Stuff</h6>
                            <div className={styles.projectsContainer}>
                                <div className={styles.projectsCornerLT} />
                                <div className={styles.projectsCornerLB} />
                                <div className={styles.projectsCornerRT} />
                                <div className={styles.projectsCornerRB} />
                                <img className={styles.projectsImage} src={stuff} alt="Stuff" />
                            </div>
                            <p className={styles.projectsSubtitle}>Pet-project Online store, created on a public API. The functionality has been implemented: searching for products, filtering by price and category, as well as adding products to favorites. Of course, user registration and authentication.
                                .</p>
                            <ul className={styles.projectsTechs}>
                                <li className={styles.projectsTech}>React</li>
                                <li className={styles.projectsTech}>JavaScript</li>
                                <li className={styles.projectsTech}>Redux</li>
                                <li className={styles.projectsTech}>Axios</li>
                                <li className={styles.projectsTech}>BEM</li>
                            </ul>
                        </Link>
                    </li>
                    <li className={styles.projectsItem}>
                        <Link
                            className={styles.projectsLink}
                            to="https://movies-explorer.nomoredomainsicu.ru/"
                            target='_blank'
                        >
                            <h6 className={styles.projectsTitle}>Movies-explorer</h6>
                            <div className={styles.projectsContainer}>
                                <div className={styles.projectsCornerLT} />
                                <div className={styles.projectsCornerLB} />
                                <div className={styles.projectsCornerRT} />
                                <div className={styles.projectsCornerRB} />
                                <img className={styles.projectsImage} src={movies} alt="Movies-explorer" />
                            </div>
                            <p className={styles.projectsSubtitle}>Diploma project in Yandex.Practicum. API developed and connected to the MongoDB database and frontend on React.
                                The project includes registration, authorization, searching and saving films to favorites, editing a profile.</p>
                            <ul className={styles.projectsTechs}>
                                <li className={styles.projectsTech}>React</li>
                                <li className={styles.projectsTech}>JavaScript</li>
                                <li className={styles.projectsTech}>Node.js</li>
                                <li className={styles.projectsTech}>MongoDB</li>
                                <li className={styles.projectsTech}>BEM</li>
                            </ul>
                        </Link>
                    </li>
                    <li className={styles.projectsItem}>
                        <Link
                            className={styles.projectsLink}
                            to="https://vitaly.nomoredomains.work"
                            target='_blank'
                        >
                            <h6 className={styles.projectsTitle}>Mesto</h6>
                            <div className={styles.projectsContainer}>
                                <div className={styles.projectsCornerLT} />
                                <div className={styles.projectsCornerLB} />
                                <div className={styles.projectsCornerRT} />
                                <div className={styles.projectsCornerRB} />
                                <img className={styles.projectsImage} src={mesto} alt="Mesto react" />
                            </div>
                            <p className={styles.projectsSubtitle}>Educational project in Yandex.Practicum. developed a backend (API, connected to MongoDB) and a frontend using React. The functionality of the project includes registration, login, editing a profile, adding photos with information and likes.</p>
                            <ul className={styles.projectsTechs}>
                                <li className={styles.projectsTech}>React</li>
                                <li className={styles.projectsTech}>JavaScript</li>
                                <li className={styles.projectsTech}>Node.js</li>
                                <li className={styles.projectsTech}>MongoDB</li>
                                <li className={styles.projectsTech}>BEM</li>
                            </ul>
                        </Link>
                    </li>
                    <li className={styles.projectsItem}>
                        <Link
                            className={styles.projectsLink}
                            to="https://vitaly.nomoredomains.work"
                            target='_blank'
                        >
                            <h6 className={styles.projectsTitle}>Traveling in Russia</h6>
                            <div className={styles.projectsContainer}>
                                <div className={styles.projectsCornerLT} />
                                <div className={styles.projectsCornerLB} />
                                <div className={styles.projectsCornerRT} />
                                <div className={styles.projectsCornerRB} />
                                <img className={styles.projectsImage} src={travel} alt="Traveling in Russia" />
                            </div>
                            <p className={styles.projectsSubtitle}>One of the first projects in Yandex.Practicum implemented during my studies. The project was implemented with an adaptive and responsive layout using the BEM methodology, the project is not complicated but is as expensive as memory =).</p>
                            <ul className={styles.projectsTechs}>
                                <li className={styles.projectsTech}>HTML</li>
                                <li className={styles.projectsTech}>CSS</li>
                                <li className={styles.projectsTech}>BEM</li>
                            </ul>
                        </Link>
                    </li>
                </div>
            </ul>
        </section>
    )
}