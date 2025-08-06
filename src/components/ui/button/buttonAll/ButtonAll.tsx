import styles from './ButtonAll.module.scss'

interface NewTodoProps {
	choiceAll: Function
	color: any
}

export const ButtonAll = ({ choiceAll, color }: NewTodoProps) => {
	return (
		<div className={styles.il}>
			<button
				className={styles.button}
				style={{ backgroundColor: color }}
				onClick={() => {
					choiceAll('all')
				}}
			>
				All
			</button>
			<button
				className={styles.button}
				style={{ backgroundColor: color }}
				onClick={() => {
					choiceAll('active')
				}}
			>
				Active
			</button>
			<button
				className={styles.button}
				style={{ backgroundColor: color }}
				onClick={() => {
					choiceAll('completed')
				}}
			>
				Completed
			</button>
		</div>
	)
}
