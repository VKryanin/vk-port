import { EduEng, EduRu } from '../../utils/education';
import { EducationItem } from '../EducationItem/EducationItem';

import styles from './Education.module.scss';

export const Education = ({ id }) => {

    return (
        <div id={id} className={styles.education}>
            <h5 className={styles.educationTitle}> Немного <span className={styles.educationGreen}>о</span> моем&nbsp;<span className={styles.educationGrey}>образовании </span></h5>
            <ul className={styles.educationList}>
                {EduRu.reverse().map(({ Name, Age, Profile, Image }, index) => (
                    <EducationItem
                        key={index}
                        name={Name}
                        profile={Profile}
                        age={Age}
                        image={Image}
                    />
                ))}
            </ul>
        </div>
    )
}