import { useState } from 'react'
import { TaskType } from '../../../screens/newTodos/NewTodos'
import styles from './ButtonAdd.module.scss'

export interface NewTodoProps {
	tasks: Array<TaskType>
	setTasks: any
}

export const ButtonAdd = ({ tasks, setTasks }: NewTodoProps) => {
	const [newTaskValue, setNewTaskValue] = useState('')

	const handleInputChange = (e: any) => {
		setNewTaskValue(e.target.value)
	}

	const addTask = () => {
		if (newTaskValue !== '') {
			let newTask = { id: tasks.length, task: newTaskValue, isDone: false }
			setTasks([...tasks, newTask])
			setNewTaskValue('')
		}
	}

	return (
		<div className={styles.wrapper}>
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
		</div>
	)
}
