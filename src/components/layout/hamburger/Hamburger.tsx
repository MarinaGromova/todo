import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Hamburger.module.scss'

export const Hamburger = () => {
	const [isShow, setShow] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button
				className={styles.button}
				onClick={() => setShow(!isShow)}
				aria-label='гамбургер'
			>
				<img src='/header/menu.svg' alt='icon menu' />
			</button>
			{isShow && (
				<nav className={styles.menu}>
					<ul>
						<li>
							<Link to='/account'>
								<button className={styles.button}>Account</button>
							</Link>
						</li>
						<li>
							<Link to='/exit'>
								<button className={styles.button}>Logout</button>
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</div>
	)
}
