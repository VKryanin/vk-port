import styles from './Welcome.module.scss'

export const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <p className={styles.welcomeText}>
                <span className={styles.welcomeGreen}>
                    Hello! </span> I’m&nbsp;
                <span className={styles.welcomeGrey}>
                    Vitaliy
                </span>.
            </p>
            <p className={styles.welcomeText}>
                <span className={styles.welcomeGreen}>
                    Bringing
                </span>&nbsp;ideas
            </p>
            <p className={styles.welcomeText}>
                to&nbsp;<span className={styles.welcomeBlack}>life</span>&nbsp;with&nbsp;<span className={styles.welcomeGrey}>code</span>
            </p>
        </div>
    )
}