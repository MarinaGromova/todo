import { useState } from 'react'
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
			{isShow && <div className={styles.menu}>fdgtdhrdht</div>}
		</div>
	)
}
