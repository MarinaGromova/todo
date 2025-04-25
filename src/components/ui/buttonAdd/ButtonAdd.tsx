import { useState } from 'react'
import { NewTodoProps } from '../../newTodos/NewTodos'
import styles from '../../newTodos/NewTodos.module.scss'

export const ButtonAdd = ({ setTasks }: NewTodoProps) => {
	const [newTaskValue, setNewTaskValue] = useState('')

	const handleInputChange = (e: any) => {
		setNewTaskValue(e.target.value)
	}

	const addTask = () => {
		let newTask = { id: 6, task: newTaskValue, isDone: false }
		setTasks((t: any) => [newTask, ...t])
		setNewTaskValue('')
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.il}>
				<input
					className={styles.input}
					value={newTaskValue}
					type='text'
					onChange={handleInputChange}
					placeholder='Enter a task ...'
				/>
				<button className={styles.add} onClick={addTask}>
					+ Add New
				</button>
			</div>
		</div>
	)
}
