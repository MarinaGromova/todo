import { Arrow } from '../../ui/button/arrow/Arrow'
import { TaskType } from '../newTodos/NewTodos'
import styles from './NewTodo.module.scss'

interface NewTodoProps {
	t: any
	tasks: Array<TaskType>
	setTasks: any
}

export const NewTodo = ({ t, tasks, setTasks }: NewTodoProps) => {
	const changeId = (updateTack: any) => {
		for (let i = 0; i < updateTack.length; i++) {
			updateTack[i].id = i
		}
		setTasks(updateTack)
	}

	const deleteTask = (id: any) => {
		const updateTack = tasks.filter((t: any) => id !== t.id)
		changeId(updateTack)
	}

	const choiceTask = (t: any, isDone: boolean) => {
		let task = tasks.find((tas: any) => tas.id === t.id)
		if (task) task.isDone = isDone
		let copy = [...tasks]
		setTasks(copy)
	}

	return (
		<>
			<div className={styles.wrapper}>
				<label>
					<input
						className={styles.checkbox}
						type='checkbox'
						checked={t.isDone}
						onChange={e => choiceTask(t, e.target.checked)}
						name='checked'
					/>
					<span className={styles.span}></span>
				</label>
				<span className={styles.p}>{t.task}</span>
				<button className={styles.button}>
					<img
						className={styles.img}
						src='layout/close.svg'
						onClick={() => deleteTask(t.id)}
					/>
				</button>
			</div>
			<Arrow tasks={tasks} index={t.id} changeId={changeId} />
		</>
	)
}
