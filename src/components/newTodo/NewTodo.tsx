import { Arrow } from '../arrow/Arrow'
import styles from '../newTodos/NewTodos.module.scss'

export type TaskType = {
	id: number
	task: string
	isDone: boolean
}

interface NewTodoProps {
	tasks: Array<TaskType>
	setTasks: any
}

export const NewTodo = ({ tasks, setTasks }: NewTodoProps) => {
	const choiceTask = (index: number, isDone: boolean) => {
		let task = tasks.find((t: any) => t.id === index)
		if (task) task.isDone = isDone
		let copy = [...tasks]
		setTasks(copy)
	}

	return (
		<>
			<ul className={styles.wrapper}>
				{tasks.map((t, index: number) => {
					return (
						<li key={t.id} className={styles.li}>
							<form className={styles.li} method='get'>
								<input
									type='checkbox'
									name='name'
									id='name'
									required
									checked={t.isDone}
									onChange={e => choiceTask(t.id, e.target.checked)}
								/>
								<span className={styles.p}>{t.task}</span>
							</form>
							<Arrow tasks={tasks} setTasks={setTasks} index={index} />
						</li>
					)
				})}
			</ul>
		</>
	)
}
