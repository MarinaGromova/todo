import { Header } from '../../layout/header/Header'
import styles from './Account.module.scss'

function Account() {
	return (
		<>
			<Header src={'/header/arrow-left.svg'} alt={'icon arrow'} />
			<main className={styles.wrapper}>
				<h3>Profile</h3>
				<img />
				<p>Marina</p>
			</main>
		</>
	)
}
export default Account
