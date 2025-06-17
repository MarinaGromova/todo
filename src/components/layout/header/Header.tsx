import { Hamburger } from '../hamburger/Hamburger'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.wrapper}>
			<button className={styles.button}>
				<img src='/header/profile.svg' alt='icon minion' />
			</button>
			<Hamburger />
		</header>
	)
}
