import { GoArrowDown, GoArrowUp } from 'react-icons/go'
import { TaskType } from '../../../screens/newTodos/NewTodos'
import styles from './Arrow.module.scss'

interface NewTodoProps {
	t: any
	tasks: Array<TaskType>
	setTasks: any
}

export const Arrow = ({ tasks, setTasks, t }: NewTodoProps) => {
	const changeTaskUp = (t: any) => {
		if (t.id > 0) {
			const updateTack = [...tasks]
			;[updateTack[t.id], updateTack[t.id - 1]] = [
				updateTack[t.id - 1],
				updateTack[t.id],
			]
			setTasks(updateTack)
		}
	}
	const changeTaskDown = (t: any) => {
		if (t.id < tasks.length - 1) {
			const updateTack = [...tasks]
			;[updateTack[t.id + 1], updateTack[t.id]] = [
				updateTack[t.id],
				updateTack[t.id + 1],
			]
			setTasks(updateTack)
		}
	}

	const deleteTask = (t: any) => {
		const updateTack = tasks.filter((_: any, i: number) => i !== t.id)
		setTasks(updateTack)
	}

	return (
		<div className={styles.arrow}>
			<button onClick={() => changeTaskDown(t)} className={styles.button}>
				<GoArrowDown fontSize={30} />
			</button>
			<button onClick={() => changeTaskUp(t)} className={styles.button}>
				<GoArrowUp fontSize={30} />
			</button>
			<button className={styles.button} onClick={() => deleteTask(t)}>
				<img src='layout/close.svg' />
			</button>
		</div>
	)
}
