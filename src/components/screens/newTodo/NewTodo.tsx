import { useRef, useState } from 'react'
import { Arrow } from '../../ui/button/arrow/Arrow'
import styles from './NewTodo.module.scss'

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

	const changeId = (updateTack: any) => {
		for (let i = 0; i < updateTack.length; i++) {
			updateTack[i].id = i
		}
		setTasks(updateTack)
	}

	const deleteTask = (id: any) => {
		changeId(tasks.filter((t: any) => id !== t.id))
	}

	const choiceTask = (t: any, isDone: boolean) => {
		let task = tasks.find((tas: any) => tas.id === t.id)
		if (task) task.isDone = isDone
		let copy = [...tasks]
		setTasks(copy)
	}

	const changeTask = (e: any) => {
		setInput(true)
		console.log(inputRef.current)
		if (inputRef.current === null) {
			return
		} else {
			console.log(inputRef.current.style.height)
			console.log(inputRef.current.scrollHeight)
			inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
		}
		t.task = e.target.value
		setTasks((list: any) =>
			list.map((item: any) => (item.id === t.id ? { ...item } : item))
		)
	}

	return (
		<>
			<div className={styles.wrapper}>
				<label className={styles.label}>
					<input
						className={styles.checkbox}
						type='checkbox'
						checked={t.isDone}
						onChange={e => choiceTask(t, e.target.checked)}
						name='checked'
					/>
					<span className={styles.span}></span>
				</label>

				<div className={styles.wrap}>
					<textarea
						ref={inputRef}
						className={styles.p}
						value={t.task}
						onChange={changeTask}
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
						onClick={() => deleteTask(t.id)}
					/>
				</button>
			</div>
			<Arrow tasks={tasks} index={t.id} changeId={changeId} />
		</>
	)
}
