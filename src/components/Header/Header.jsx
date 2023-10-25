import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <p className={styles.headerName}>vitaliy kryanin</p>
                <h2 className={styles.headerTitle}>{`<DEV WEB/>`}</h2>
                <p className={styles.headerEmail}>krianinvv@internet.ru</p>
            </div>
        </header>
    )
}