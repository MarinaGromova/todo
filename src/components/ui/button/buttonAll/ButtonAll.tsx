import { useState } from 'react'
import { TaskType } from '../../../screens/newTodos/NewTodos'
import { SvgChosen } from '../../svg/SvgChosen'
import { SvgUnMarket } from '../../svg/SvgUnmarked'
import { useBackGroundResize } from './../../../../hooks/useBackGroundResize'
import styles from './ButtonAll.module.scss'

interface NewTodoProps {
	tasks: Array<TaskType>
	setTasks: any
}

export const ButtonAll = ({ tasks, setTasks }: NewTodoProps) => {
	const [choice, setChoiceAll] = useState(false)

	const colorObject = useBackGroundResize()

	const choiceAll = () => {
		setChoiceAll(!choice)
		if (!choice) {
			let task = tasks.map((t: any) => {
				t.isDone = true
				return t
			})
			setTasks(task)
		} else {
			let task = tasks.map((t: any) => {
				t.isDone = false
				return t
			})
			setTasks(task)
		}
	}

	return (
		<div className={styles.il}>
			<button className={styles.circle} onClick={choiceAll}>
				{choice ? (
					<SvgUnMarket color={colorObject} />
				) : (
					<SvgChosen color={colorObject} />
				)}
			</button>
			<p>All</p>
		</div>
	)
}
