import { useState } from 'react'
import { useBackGroundResize } from '../../../../hooks/useBackGroundResize'
import { TaskType } from '../../../screens/newTodo/NewTodo'
import styles from './ButtonAdd.module.scss'

interface NewTodoProps {
	tasks: Array<TaskType>
	setTasks: any
}

export const ButtonAdd = ({ tasks, setTasks }: NewTodoProps) => {
	const [newTaskValue, setNewTaskValue] = useState('')
	const colorObject = useBackGroundResize()

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
				name='Task'
			/>
			<button className={styles.add} onClick={addTask}>
				{colorObject.textAdd}
			</button>
		</div>
	)
}
