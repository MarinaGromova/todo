import { useRef } from 'react'
import { Arrow } from '../../ui/button/arrow/Arrow'
import { TaskType } from '../newTodos/NewTodos'
import styles from './NewTodo.module.scss'

interface NewTodoProps {
	t: any
	tasks: Array<TaskType>
	setTasks: any
}

export const NewTodo = ({ t, tasks, setTasks }: NewTodoProps) => {
	// const [isInput, setInput] = useState(false)
	const inputRef = useRef(null)
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

	const changeTask = (e: any) => {
		t.task = e.target.value
		setTasks((list: any) =>
			list.map((item: any) => (item.id === t.id ? { ...item } : item))
		)
	}

	const handleButtonClick = () => {
		inputRef.current.style.height = inputRef.current.scrollHeight - 6 + 'px'
		if (inputRef.current && !inputRef.current.matches(':focus')) {
			inputRef.current.focus()
		}
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

				<div className={styles.wrap}>
					<label>
						<textarea
							ref={inputRef}
							className={styles.p}
							value={t.task}
							onChange={changeTask}
							name='task'
						></textarea>
					</label>
					<button onClick={handleButtonClick} className={styles.button}>
						<img className={styles.img} src='/main/pen.png' />
					</button>
					<button className={styles.button}>
						<img
							className={styles.img}
							src='layout/close.svg'
							onClick={() => deleteTask(t.id)}
						/>
					</button>
				</div>
			</div>
			<Arrow tasks={tasks} index={t.id} changeId={changeId} />
		</>
	)
}
