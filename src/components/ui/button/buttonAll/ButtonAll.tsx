import styles from './ButtonAll.module.scss'

interface NewTodoProps {
	choiceAll: Function
}

export const ButtonAll = ({ choiceAll }: NewTodoProps) => {
	return (
		<div className={styles.il}>
			<button
				className={styles.button}
				onClick={() => {
					choiceAll('all')
				}}
			>
				All
			</button>
			<button
				className={styles.button}
				onClick={() => {
					choiceAll('active')
				}}
			>
				Active
			</button>
			<button
				className={styles.button}
				onClick={() => {
					choiceAll('completed')
				}}
			>
				Completed
			</button>
		</div>
	)
}
