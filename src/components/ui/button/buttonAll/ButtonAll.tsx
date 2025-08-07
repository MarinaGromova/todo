import styles from './ButtonAll.module.scss'

interface NewTodoProps {
	handleClick: Function
	filter: any
}

const FILTERS: { label: string; value: 'all' | 'active' | 'completed' }[] = [
	{ label: 'All', value: 'all' },
	{ label: 'Active', value: 'active' },
	{ label: 'Completed', value: 'completed' },
]

export const ButtonAll = ({ handleClick, filter }: NewTodoProps) => {
	return (
		<div className={styles.il}>
			{FILTERS.map(({ label, value }) => (
				<button
					key={value}
					className={styles.button}
					style={{
						backgroundColor: filter === value ? '#adefd1' : 'white',
					}}
					onClick={() => {
						handleClick(value)
					}}
				>
					{label}
				</button>
			))}
		</div>
	)
}
