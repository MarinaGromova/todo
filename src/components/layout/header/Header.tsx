import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.wrapper}>
			<button className={styles.button}>
				<img src='/header/profile.svg' alt='icon minion' />
			</button>
			<button className={styles.button}>
				<img src='/header/menu.svg' alt='icon menu' />
			</button>
		</header>
	)
}
