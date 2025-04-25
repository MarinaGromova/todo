import { useState } from 'react'
import { NewTodoProps } from '../../../newTodos/NewTodos'
import styles from '../../../newTodos/NewTodos.module.scss'
import { SvgChosen } from '../../svg/SvgChosen'
import { SvgUnMarket } from '../../svg/SvgUnmarked'

export const ButtonAll = ({ tasks, setTasks }: NewTodoProps) => {
	const [choice, setChoiceAll] = useState(false)

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
				{choice ? <SvgUnMarket /> : <SvgChosen />}
			</button>
			<p>All</p>
		</div>
	)
}
