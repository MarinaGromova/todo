import { Arrow } from '../../ui/button/arrow/Arrow'
import { TaskType } from '../newTodos/NewTodos'
import styles from './NewTodo.module.scss'

interface NewTodoProps {
	t: any
	tasks: Array<TaskType>
	setTasks: any
}

export const NewTodo = ({ t, tasks, setTasks }: NewTodoProps) => {
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
					/>
					<span className={styles.span}></span>
				</label>
				<span className={styles.p}>{t.task}</span>
			</div>

			<Arrow tasks={tasks} setTasks={setTasks} index={t.id} />
		</>
	)
}
