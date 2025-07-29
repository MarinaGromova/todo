import { Link } from 'react-router-dom'
import { Hamburger } from '../hamburger/Hamburger'
import styles from './Header.module.scss'

interface TextProps {
	src: string
	alt: string
}

export const Header = ({ src, alt }: TextProps) => {
	return (
		<header className={styles.wrapper}>
			<button className={styles.button}>
				<Link to='/' className={styles.a}>
					<img src={src} alt={alt} />
				</Link>
			</button>
			<Hamburger />
		</header>
	)
}
