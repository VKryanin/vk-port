import { EduEng } from '../../utils/education'
import styles from './Education.module.scss'

export const Education = ({ id }) => {
    return (
        <section id={id} className={styles.education}>
            <h5 className={styles.educationTitle}>A little bit about my education</h5>
            <ul className={styles.educationList}>
                {
                    EduEng.map(({ Name, Age, Profile }, index) => (
                        <li className={styles.educationItem} key={index}>
                            <h6 className={styles.educationHeader}>{Name}</h6>
                            <div>
                                <p className={styles.educationProfile}>{Profile}</p>
                                <p className={styles.educationAge}>{Age}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}