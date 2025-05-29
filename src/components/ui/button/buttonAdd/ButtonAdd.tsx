import { useState } from 'react'
import { NewTodoProps } from '../../../screens/newTodos/NewTodos'
import styles from './ButtonAdd.module.scss'

export const ButtonAdd = ({ setTasks }: NewTodoProps) => {
	const [newTaskValue, setNewTaskValue] = useState('')

	const handleInputChange = (e: any) => {
		setNewTaskValue(e.target.value)
	}

	const addTask = () => {
		if (newTaskValue !== '') {
			let newTask = { id: 6, task: newTaskValue, isDone: false }
			setTasks((t: any) => [newTask, ...t])
			setNewTaskValue('')
		}
	}

	return (
		<form className={styles.wrapper}>
			<input
				className={styles.input}
				value={newTaskValue}
				type='text'
				onChange={handleInputChange}
				placeholder='Enter a task ...'
			/>
			<button className={styles.add} onClick={addTask}>
				+ add
			</button>
		</form>
	)
}
