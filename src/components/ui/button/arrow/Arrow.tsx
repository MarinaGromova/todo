import { GoArrowDown, GoArrowUp } from 'react-icons/go'
import { TaskType } from '../../../screens/newTodos/NewTodos'
import styles from './Arrow.module.scss'

interface NewTodoProps {
	index: any
	tasks: Array<TaskType>
	setTasks: any
}

export const Arrow = ({ tasks, setTasks, index }: NewTodoProps) => {
	const changeId = (updateTack: any) => {
		for (let i = 0; i < updateTack.length; i++) {
			updateTack[i].id = i
		}
		setTasks(updateTack)
	}

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

	const deleteTask = (id: any) => {
		const updateTack = tasks.filter((t: any) => id !== t.id)
		changeId(updateTack)
	}

	return (
		<div className={styles.arrow}>
			<button onClick={() => changeTaskDown(index)} className={styles.button}>
				<GoArrowDown fontSize={30} />
			</button>
			<button onClick={() => changeTaskUp(index)} className={styles.button}>
				<GoArrowUp fontSize={30} />
			</button>
			<button className={styles.button} onClick={() => deleteTask(index)}>
				<img src='layout/close.svg' />
			</button>
		</div>
	)
}
