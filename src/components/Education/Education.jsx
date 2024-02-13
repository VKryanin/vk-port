import { useState } from 'react';

import { EduEng } from '../../utils/education';
import { EducationItem } from '../EducationItem/EducationItem';

import styles from './Education.module.scss';

export const Education = ({ id }) => {

    return (
        <section id={id} className={styles.education}>
            <h5 className={styles.educationTitle}>A little bit <span className={styles.educationGreen}>about</span> my&nbsp;<span className={styles.educationGrey}>education</span></h5>
            <ul className={styles.educationList}>
                {EduEng.map(({ Name, Age, Profile, Image }, index) => (
                    <EducationItem
                        key={index}
                        name={Name}
                        profile={Profile}
                        age={Age}
                        image={Image}
                    />
                ))}
            </ul>
        </section>
    )
}