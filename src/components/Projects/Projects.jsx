import styles from './Projects.module.scss';
import movies from '../../images/movies.jpg';
import mesto from '../../images/mesto.jpg';
import travel from '../../images/travel.jpg';
import stuff from '../../images/stuff.jpg';
import { Link } from 'react-scroll';

export const Projects = ({ id }) => {
    return (
        <section id={id} className={styles.projects}>
            <ul className={styles.projectsList}>
                <li>
                    <Link className={styles.projectsItem} to="https://vkryanin.github.io/russian-travel/" target='_blank'>
                        <div className={styles.projectsWrapper}>
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
                                    An online store built on a public API has been created. It includes product search, filtering by price and category, and adding items to favorites. Registration and user authentication have been implemented.
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
                        <div className={styles.projectsWrapper}>
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
                                    I have developed the backend and frontend. The project includes registration, login,
                                    search and saving movies to favorites, profile editing.
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
                        <div className={styles.projectsWrapper}>
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
                                    I have developed the backend and frontend. The project includes registration, login, profile editing, adding photos with information, and likes.
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
                        <div className={styles.projectsWrapper}>
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
                                    One of the first projects completed during my training. The project was implemented with adaptive and responsive layout using the BEM methodology.
                                </p>
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