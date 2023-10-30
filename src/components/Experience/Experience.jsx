import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Experience.module.scss';

export const Experience = ({ id }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleItemHover = (index) => {
        setHoveredItem(index);
    }

    return (
        <section id={id} className={styles.experience}>
            <ul className={styles.experienceList}>
                <li>
                    <Link
                        to="https://tessera.hopto.org/"
                        target='_blank'
                        className={`${styles.experienceItem} ${hoveredItem !== null && hoveredItem !== 0 ? styles.darken : ''}`}
                        onMouseEnter={() => handleItemHover(0)}
                        onMouseLeave={() => handleItemHover(null)}>
                        <p className={styles.experienceData}>June 2023 - Present</p>
                        <div className={styles.experienceWrapper}>
                            <h6 className={styles.experienceLink}>Roman Mosaic School
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                            </h6>
                            <p className={styles.experienceSubtitle}>Frontend developer</p>
                            <p className={styles.experienceText}>Project work, during the work I developed the components of authorization,
                                registration, shopping cart and course registration.
                                Bug fixes.</p>
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
                        <p className={styles.experienceData}>Oct 2022 - Nov 2023</p>
                        <div className={styles.experienceWrapper}>
                            <h6 className={styles.experienceLink}>Yandex.Practicum <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></h6>
                            <p className={styles.experienceSubtitle}>Frontend developer (Student)</p>
                            <p className={styles.experienceText}>I worked on projects under the supervision of mentors and created projects.
                                I have mastered React, Node.js Express, Responsive Web Design, BEM methodology, Webpack, and MongoDB.
                            </p>
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
    )
}