import { useRef, useState } from 'react'
import { Arrow } from '../../ui/button/arrow/Arrow'
import styles from './NewTodo.module.scss'
import { useTodo } from './useTodo'

export type TaskType = {
	id: number
	task: string
	isDone: boolean
}

interface NewTodoProps {
	t: any
	tasks: Array<TaskType>
	setTasks: any
}

export const NewTodo = ({ t, tasks, setTasks }: NewTodoProps) => {
	const [isInput, setInput] = useState(false)
	const inputRef = useRef(null)
	const { deleteTask, choiceTask, changeTask } = useTodo()

	const changeId = (updateTack: any) => {
		for (let i = 0; i < updateTack.length; i++) {
			updateTack[i].id = i
		}
		setTasks(updateTack)
	}

	return (
		<>
			<div className={styles.wrapper}>
				<label className={styles.label}>
					<input
						className={styles.checkbox}
						type='checkbox'
						checked={t.isDone}
						onChange={e => choiceTask(t, e.target.checked, tasks, setTasks)}
						name='checked'
					/>
					<span className={styles.span}></span>
				</label>
				<div className={styles.wrap}>
					<textarea
						ref={inputRef}
						className={styles.p}
						value={t.task}
						onChange={e => changeTask(e, setInput, t, setTasks, inputRef)}
						name='task'
					></textarea>
					{isInput && (
						<button onClick={() => setInput(false)} className={styles.button}>
							<p className={styles.text}>ok</p>
						</button>
					)}
				</div>

				<button className={styles.button}>
					<img
						className={styles.img}
						src='layout/close.svg'
						onClick={() => deleteTask(t.id, tasks, changeId)}
					/>
				</button>
			</div>
			<Arrow tasks={tasks} index={t.id} changeId={changeId} />
		</>
	)
}
