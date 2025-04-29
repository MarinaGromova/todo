import { Arrow } from '../arrow/Arrow'
import { TaskType } from '../newTodos/NewTodos'
import styles from './NewTodo.module.scss'

interface NewTodoProps {
	t: any
	tasks: Array<TaskType>
	setTasks: any
	index: number
}

export const NewTodo = ({ t, tasks, setTasks, index }: NewTodoProps) => {
	const choiceTask = (index: number, isDone: boolean) => {
		let task = tasks.find((t: any) => {
			return t.id === index
		})
		if (task) task.isDone = isDone
		let copy = [...tasks]
		setTasks(copy)
	}

	return (
		<>
			<form className={styles.li}>
				<input
					type='checkbox'
					checked={t.isDone}
					onChange={e => choiceTask(t.id, e.target.checked)}
				/>
				<span className={styles.p}>{t.task}</span>
			</form>
			<Arrow tasks={tasks} setTasks={setTasks} index={index} />
		</>
	)
}
