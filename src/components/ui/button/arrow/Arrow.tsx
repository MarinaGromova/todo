import { GoArrowDown, GoArrowUp } from 'react-icons/go'
import { TaskType } from '../../../screens/newTodo/NewTodo'
import styles from './Arrow.module.scss'

interface NewTodoProps {
	index: any
	tasks: Array<TaskType>
	changeId: any
}

export const Arrow = ({ tasks, index, changeId }: NewTodoProps) => {
	const changeTaskUp = (id: number) => {
		const updateTack = [...tasks]
		if (id > 0) {
			;[updateTack[id], updateTack[id - 1]] = [
				updateTack[id - 1],
				updateTack[id],
			]
			changeId(updateTack)
		}
	}

	const changeTaskDown = (id: any) => {
		const updateTack = [...tasks]
		if (id < tasks.length - 1) {
			;[updateTack[id + 1], updateTack[id]] = [
				updateTack[id],
				updateTack[id + 1],
			]
			changeId(updateTack)
		}
	}

	return (
		<div className={styles.arrow}>
			<button onClick={() => changeTaskDown(index)} className={styles.button}>
				<GoArrowDown fontSize={30} />
			</button>
			<button onClick={() => changeTaskUp(index)} className={styles.button}>
				<GoArrowUp fontSize={30} />
			</button>
		</div>
	)
}
