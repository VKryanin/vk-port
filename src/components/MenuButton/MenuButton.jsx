import styles from './MenuButton.module.scss'


export const MenuButton = ({ isActive, onClick }) => {
  return (
    <button className={`${styles.menuButton} ${isActive ? styles.menuButtonActive : styles.menuButtonUnactive}`} onClick={() => onClick()}>
      <span />
    </button>
  )
}