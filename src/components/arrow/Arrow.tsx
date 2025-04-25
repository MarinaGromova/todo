import { GoArrowDown, GoArrowUp } from 'react-icons/go'
import { TaskType } from '../newTodos/NewTodos'
import styles from '../newTodos/NewTodos.module.scss'

interface NewTodoProps {
	index: number
	tasks: Array<TaskType>
	setTasks: any
}

export const Arrow = ({ index, tasks, setTasks }: NewTodoProps) => {
	const changeTaskUp = (index: number) => {
		if (index > 0) {
			const updateTack = [...tasks]
			;[updateTack[index], updateTack[index - 1]] = [
				updateTack[index - 1],
				updateTack[index],
			]
			setTasks(updateTack)
		}
	}
	const changeTaskDown = (index: number) => {
		if (index < tasks.length - 1) {
			const updateTack = [...tasks]
			;[updateTack[index + 1], updateTack[index]] = [
				updateTack[index],
				updateTack[index + 1],
			]
			setTasks(updateTack)
		}
	}

	const deleteTask = (index: number) => {
		const updateTack = tasks.filter((_: any, i: number) => i !== index)
		setTasks(updateTack)
	}

	return (
		<>
			<div>
				<button onClick={() => changeTaskDown(index)} className={styles.close}>
					<GoArrowDown fontSize={30} />
				</button>
				<button onClick={() => changeTaskUp(index)} className={styles.close}>
					<GoArrowUp fontSize={30} />
				</button>
			</div>
			<button className={styles.close} onClick={() => deleteTask(index)}>
				<img src='layout/close.svg' />
			</button>
		</>
	)
}
